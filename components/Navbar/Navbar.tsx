export default function Navbar () {
  return (
    <header className='flex items-center justify-center w-fit h-fit font-main'>
      <nav>
        <ul className='flex'>
          <li className='border border-solid border-t-0 px-4 py-1'>
            <a className='hover:text-terciary-color' href='/'>
              Home
            </a>
          </li>
          <li className='border-solid border-b px-4 py-1'>
            <a className='hover:text-terciary-color' href='/'>
              List
            </a>
          </li>
          <li className='border border-solid border-t-0 px-4 py-1'>
            <a className='hover:text-terciary-color' href='/'>
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
