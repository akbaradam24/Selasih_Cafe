import Image from 'next/image'
import picture from './assets/AL_Logo.png'
import Cards from "./components/Cards"
import profilePic from './assets/profile.png'



export default function Home() {
  return (
    <div className='mx-auto max-w-screen-xl'>
      <div className=" flex justify-between">
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
        <div className='flex gap-2 p-4'>
          {/* <input className='w-auto h-2 border-blue-200 rounded-xl' placeholder='search...' type="text" /> */}
          <input type="text" className='h-8 w-24 rounded-lg border-2 mt-2 p-1' placeholder='search...' />
          <Image  className='object-contain ml-4'
          src={profilePic}
          alt="profil logo" 
          width={35}
          height={35} />
        </div>
      </div>
      <Cards/>
      <Cards/>
    </div>
  )
}
