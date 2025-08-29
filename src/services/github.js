const REST = 'https://api.github.com';
const GQL  = 'https://api.github.com/graphql';

function headers(base = 'rest') {
  const h = base === 'gql'
    ? { 'Content-Type': 'application/json' }
    : { Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' };
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  if (token) h.Authorization = `Bearer ${token}`;
  return h;
}

/** REST: lấy repos public của user (fallback) */
export async function fetchUserRepos(username) {
  const r = await fetch(`${REST}/users/${username}/repos?per_page=100&sort=updated`, { headers: headers('rest') });
  if (!r.ok) throw new Error(`GitHub REST ${r.status}`);
  return r.json();
}

/** GQL: lấy 6 pinned repos (yêu cầu token) */
export async function fetchPinnedRepos(username) {
  if (!import.meta.env.VITE_GITHUB_TOKEN) throw new Error('Missing token for GraphQL');
  const query = `
    query($login: String!) {
      user(login: $login) {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              id
              name
              description
              url
              stargazerCount
              forkCount
              diskUsage        # KB
              primaryLanguage { name color }
              updatedAt
              languages(first: 5, orderBy: {field: SIZE, direction: DESC}) {
                nodes { name }
              }
            }
          }
        }
      }
    }`;
  const r = await fetch(GQL, {
    method: 'POST',
    headers: headers('gql'),
    body: JSON.stringify({ query, variables: { login: username } }),
  });
  if (!r.ok) throw new Error(`GitHub GQL ${r.status}`);
  const data = await r.json();
  if (data.errors) throw new Error(data.errors[0]?.message || 'GQL error');
  return (data.data.user?.pinnedItems?.nodes || []);
}

export function mapRepoGraphQL(repo) {
  const mb = `${(repo.diskUsage / 1024).toFixed(1)} MB`;
  const lang = repo.primaryLanguage?.name || repo.languages?.nodes?.[0]?.name || '—';
  return {
    id: repo.id,
    name: repo.name,
    url: repo.url,
    desc: repo.description ?? 'No description',
    lang,
    forks: repo.forkCount,
    stars: repo.stargazerCount,
    size: mb,
    pushedAt: repo.updatedAt,
  };
}

export function mapRepoREST(repo) {
  const mb = `${(repo.size / 1024).toFixed(1)} MB`; // REST size = KB
  return {
    id: repo.id,
    name: repo.name,
    url: repo.html_url,
    desc: repo.description ?? 'No description',
    lang: repo.language ?? '—',
    forks: repo.forks_count,
    stars: repo.stargazers_count,
    size: mb,
    pushedAt: repo.pushed_at,
  };
}

/** chọn 6 repo nổi bật khi dùng REST fallback */
export function pickFeatured(repos, n = 6) {
  const scored = repos.map(r => {
    const days = (Date.now() - new Date(r.pushedAt)) / 86400000;
    const score = r.stars * 4 + r.forks * 2 + Math.max(0, 120 - days);
    return { ...r, _score: score };
  });
  return scored.sort((a, b) => b._score - a._score).slice(0, n);
}
