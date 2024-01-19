import Image from 'next/image'
import picture from './assets/AL_Logo.png'
import Cards from "./components/Cards"



export default function Home() {
  return (
    <div>
      <div className='flex p-4 gap-2 flex-row  '>
        <Image
        src={picture}
        alt='cobagambar'
        width={50}
        height={50}
        />
        <span className='mt-3'>
          <h1> Kantin selasih</h1>
        </span>
      </div>
      <Cards/>
      <Cards/>
    </div>
  )
}
