import Link from 'next/link'
import LoginForm from '../ui/login/login-form'
import SignupForm from '../ui/login/signup-form'

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F2F7F9]">
      <div className="pt-4 flex flex-col text-wbase min-h-screen">
        <div className="flex justify-center items-center mb-6">
          <div className="h-10 w-10 rounded-full bg-amber-800"></div>
        </div>
        <div className="mb-12">
          <h2 className="font-semibold text-lg text-center">Crea tu cuenta</h2>
        </div>

        <SignupForm />
      </div>
    </div>
  )
}
