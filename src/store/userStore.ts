import { create } from 'zustand';
import axios from 'axios';

type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
};

type UserState = {
  user: User | null;
  loading: boolean;
  error: string | null;
  fetchUser: (id: string) => Promise<void>;
  clearUser: () => void;
};

export const useUserStore = create<UserState>(set => ({
  user: null,
  loading: false,
  error: null,

  fetchUser: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`/api/users/${id}`);
      set({ user: response.data, loading: false });
    } catch (error: any) {
      set({ error: error.message || 'Failed to fetch user', loading: false });
    }
  },

  clearUser: () => set({ user: null }),
}));
