import { IconMoon } from '@tabler/icons-react';
export const Header = () => {
  return (
    <header className="bg-white shadow-md mb-4 nonito-sans flex justify-between py-8 px-4">
        <h1 className="font-bold">Where in the world?</h1>
        <button className='flex font-semibold items-center  gap-2'>
          <IconMoon size={20} strokeWidth={1.6} />
          <p>Dark Mode</p>
        </button>
      </header> 
  )
}