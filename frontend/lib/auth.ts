import { createAuthClient } from 'better-auth/client'
import { useState, useEffect } from 'react'

// Initialize Better Auth client
export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || 'http://localhost:3000',
})

// Custom useSession hook
export function useSession() {
  const [data, setData] = useState<any>(null)
  const [status, setStatus] = useState<'loading' | 'authenticated' | 'unauthenticated'>('loading')

  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await (authClient as any).getSession?.() || null
        if (session) {
          setData(session)
          setStatus('authenticated')
        } else {
          setData(null)
          setStatus('unauthenticated')
        }
      } catch (error) {
        console.error('Failed to get session:', error)
        setData(null)
        setStatus('unauthenticated')
      }
    }

    checkSession()
  }, [])

  return { data, status }
}