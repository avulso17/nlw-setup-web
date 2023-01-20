import { Plus } from 'phosphor-react'

import logoImage from '../assets/logo.svg'

export function Header(): JSX.Element {
  return (
    <div className='w-full max-w-3xl mx-auto flex items-center justify-between'>
      <img src={logoImage} alt='Habits' className='' />
      <button
        className='border border-violet-500 font-semibold py-4 px-6 rounded-lg flex items-center gap-3 hover:border-violet-300 ease-in-out transition-all duration-200'
        type='button'
      >
        <Plus size={20} className='text-violet-500' />
        New Habit
      </button>
    </div>
  )
}
