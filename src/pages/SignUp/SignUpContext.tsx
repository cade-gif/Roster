import { createContext, useContext, useState, type ReactNode } from 'react'

interface SignUpData {
  firstName: string
  lastName: string
  email: string
  gender: string
  password: string
  confirmPassword: string
}

interface SignUpContextValue {
  data: SignUpData
  updateData: (fields: Partial<SignUpData>) => void
}

const initialData: SignUpData = {
  firstName: '',
  lastName: '',
  email: '',
  gender: '',
  password: '',
  confirmPassword: '',
}

const SignUpContext = createContext<SignUpContextValue | null>(null)

export function SignUpProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<SignUpData>(initialData)

  function updateData(fields: Partial<SignUpData>) {
    setData((prev) => ({ ...prev, ...fields }))
  }

  return <SignUpContext.Provider value={{ data, updateData }}>{children}</SignUpContext.Provider>
}

export function useSignUp() {
  const ctx = useContext(SignUpContext)
  if (!ctx) {
    throw new Error('useSignUp must be used within a SignUpProvider')
  }
  return ctx
}
