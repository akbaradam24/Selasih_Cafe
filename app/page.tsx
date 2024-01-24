import Navbar from "./components/Navbar";
import Cards from "./components/Cards"
import Carausel from './components/Carausel';




export default function Home() {
  return (
    <div className=' flex flex-col justify-center'>
      <Navbar/>
      <Carausel/>
      <div className='flex'>
        <Cards/>
        <Cards/>
      </div>
    </div>
  )
}
