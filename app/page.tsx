import Image from 'next/image'
import Header from '@/components/Header/Header'
import Navbar from '@/components/Navbar/Navbar'

export default function Home () {
  return (
    <main className='flex flex-col w-screen h-screen items-center bg-main-color'>
      <Header />
      <Navbar />
      <div className='flex w-full px-80 flex-1 font-mono items-center'>
        <article className='flex w-full h-full flex-col'>
          <h2 className='font-bold font-main text-2xl mt-16'>
            In case the internet goes out, anticipating your downloads can save
            you money and time
          </h2>
          <hr className='border border-solid border-slate-950' />
          <p className='font-main mt-4 leading-6'>
            Well, this is an unlikely scenario, but just as people like to stock
            up on groceries when there is news of wars and lockdowns, wouldn't
            it be nice to stock up on "digital groceries" on your computer?
          </p>
        </article>
      </div>
    </main>
  )
}
