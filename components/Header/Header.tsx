import Image from 'next/image'
import cat from './cat.png'
export default function Header () {
  return (
    <header className='flex items-center justify-center w-full h-32 border-solid border-b'>
      <Image src={cat} width={65} alt='cat' />
      <h1 className='text-second-color font-main font-bold text-2xl ml-4'>
        What if Internet Ends
      </h1>
    </header>
  )
}
