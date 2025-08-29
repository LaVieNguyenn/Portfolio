// src/services/useGithubProjects.js
import { useEffect, useState } from 'react';
import {
  fetchPinnedRepos, mapRepoGraphQL,
  fetchUserRepos, mapRepoREST, pickFeatured
} from './github';

export default function useGithubProjects(username) {
  const [state, set] = useState({ items: [], loading: true, error: null, source: 'none' });

  useEffect(() => {
    let cancel = false;
    (async () => {
      try {
        let items = [];
        let source = 'graphql';

        try {
          const pinned = await fetchPinnedRepos(username);
          if (Array.isArray(pinned) && pinned.length > 0) {
            items = pinned.map(mapRepoGraphQL);
          } else {
            source = 'rest';
          }
        } catch {
          source = 'rest';
        }

        if (source === 'rest') {
          const raw = await fetchUserRepos(username);
          items = pickFeatured(raw.map(mapRepoREST), 6);
        }

        if (!cancel) set({ items, loading: false, error: null, source });
      } catch (e) {
        if (!cancel) set({ items: [], loading: false, error: e, source: 'error' });
      }
    })();
    return () => { cancel = true; };
  }, [username]);

  return state;
}
