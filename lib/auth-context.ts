'use client';

import { useUser } from '@/contexts/user-context';

/**
 * Auth context hook that wraps the existing UserContext
 * Provides a useAuth hook compatible with the agents page
 */
export function useAuth() {
  const { user } = useUser();
  
  return {
    user,
  };
}


