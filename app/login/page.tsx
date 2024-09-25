import LoginForm from '../ui/login/login-form'
import ThemeSwitcher from '../ui/theme-switcher'

export default function Page() {
  return (
    <div className="min-h-screen bg-wbgbase dark:bg-dbgbase transition">
      <div className="pt-4 flex flex-col text-wbase dark:text-dbase min-h-screen mx-auto sm:max-w-[640px]">
        <div className="flex justify-center items-center mb-6">
          <div className="h-16 w-16 rounded-full bg-blue-600"></div>
        </div>
        <div className="mb-12">
          <h2 className="font-semibold text-lg text-center">Crea tu cuenta</h2>
        </div>

        <LoginForm />
      </div>

      <div className='absolute top-4 left-4'>
        <ThemeSwitcher />
      </div>
    </div>
  )
}
