'use client'

import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store'
import ProtectedRoute from '@/components/ProtectedRoute'
import { FormButton } from '@/components'

export default function DashboardPage() {
  const router = useRouter()
  const logout = useAuthStore((state) => state.logout)
  const user = useAuthStore((state) => state.user)

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full text-center space-y-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome, you’re logged in.
          </h1>
          <p className="text-sm text-gray-500">
            {user?.email}
          </p>
          <FormButton type="button" variant="primary" onClick={handleLogout}>
            Logout
          </FormButton>
        </div>
      </div>
    </ProtectedRoute>
  )
}
