import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type User = {
  id: string
  email: string
  role: string
  token: string
}

type AuthState = {
  user: User | null
  isLoggedIn: boolean
  error: string | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        isLoggedIn: false,
        error: null,

        login: async (email, password) => {
          console.log('BASE_URL:', BASE_URL)
          try {
            const res = await fetch(`${BASE_URL}/users`)
            const users = await res.json()
            const found = users.find(
              (user: any) => user.email === email && user.password === password
            )

            if (found) {
              set({ user: found, isLoggedIn: true, error: null })
              localStorage.setItem('auth-token', found.token)
              return true
            } else {
              set({ error: 'Invalid credentials', isLoggedIn: false })
              return false
            }
          } catch (err) {
            set({ error: 'Login failed', isLoggedIn: false })
            return false
          }
        },

        logout: () => {
          localStorage.removeItem('auth-token')
          set({ user: null, isLoggedIn: false, error: null })
        },
      }),
      {
        name: 'auth-storage',
        partialize: (state) => ({
          user: state.user,
          isLoggedIn: state.isLoggedIn,
        }),
      }
    ),
    { name: 'AuthStore' }
  )
)
