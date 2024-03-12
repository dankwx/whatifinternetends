import Image from 'next/image'
import Header from '@/components/Header/Header'
import Navbar from '@/components/Navbar/Navbar'

export default function Home () {
  return (
    <main className='flex flex-col w-screen h-screen items-center bg-main-color'>
      <Header />
      <Navbar />
      <div className='flex flex-col w-full px-80 flex-1 font-main items-center'>
        <article className='flex w-full h-fit flex-col items-center mb-16'>
          <h2 className='font-bold font-main text-2xl mt-16'>
            antecipate your downloads
          </h2>
          <p className='font-main mt-4 leading-6'>
            a collection of must have programs, guides and suggestions everyone
            must have on their computers and smartphones in case the internet
            went down
          </p>
        </article>
        <section className='flex flex-col w-full border border-solid'>
          <h2 className='w-full bg-second-color py-2 pl-2'>Collection</h2>
          <div className='flex'>
            <ul>
              <li>teste 1</li>
              <li>teste 2</li>
            </ul>
            <ul>
              <li>teste 3</li>
              <li>teste 4</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}
