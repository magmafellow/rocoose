import Link from 'next/link'
import LoginForm from '../ui/login/login-form'
import SignupForm from '../ui/login/signup-form'

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F2F7F9]">
      <div className="pt-4 flex flex-col text-wbase min-h-screen mx-auto sm:max-w-[640px]">
        <div className="flex justify-center items-center mb-6">
          <div className="h-16 w-16 rounded-full bg-blue-800"></div>
        </div>
        <div className="mb-12">
          <h2 className="font-semibold text-lg text-center">Crea tu cuenta</h2>
        </div>

        <SignupForm />
      </div>
    </div>
  )
}
