import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Table from '../components/table'
import Search from '../components/Search'
export default function Home() {
  return (
    <div className='pt-10 pl-3'>
      <div className='bg-slate-100 rounded-lg shadow-2xl '>
          <header className='bg-gray-200 rounded-t-lg py-5 px-8 text-base font-bold float-right w-1/6 pr-5'>
            Total Credit: &nbsp;&nbsp; Credit
          </header> 
          
      </div>
            
      <div div className='bg-slate-100 rounded-lg shadow-2xl w-3/4 '>
        <header className='font-extrabold text-center text-2xl pt-5'>List Subject</header>
        
        <Table/>
      
        
      </div>
      <div className='pt-5 w-3/4'>
        <Search/>
      </div>
      <div div className='bg-gray-100 rounded-lg shadow-2xl w-3/4 '>
        {/* <button className='bg-green-400 text-green-50 rounded-lg py-2 px-4 mt-5 float-right '>Add</button>
        <button className='bg-blue-400 text-blue-50 rounded-lg py-2 px-4 mt-5 float-right'>Info</button> */}
        
      </div>  
        
    </div>
  )
}
