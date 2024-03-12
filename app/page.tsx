import Image from 'next/image'
import Header from '@/components/Header/Header'
import Navbar from '@/components/Navbar/Navbar'

export default function Home () {
  return (
    <main className='flex flex-col w-screen h-screen items-center bg-main-color'>
      <Header />
      <Navbar />
      <div className='flex w-full px-80 flex-1 font-mono items-center'>
        <article className='flex w-full h-full flex-col items-center'>
          <h2 className='font-bold font-main text-2xl mt-16'>
            antecipate your downloads
          </h2>
          <p className='font-main mt-4 leading-6'>
            a collection of must have programs, guides and suggestions everyone
            must have on their computers and smartphones in case the internet
            went down
          </p>
        </article>
      </div>
    </main>
  )
}
