import { Link } from 'react-router-dom';
import PageNotFoundImg from '../assets/images/pagenotfound.png'
import { useEffect } from 'react';


const PageNotFound = () => {

  useEffect(()=>{
    document.title = `Page Not Found /  Cinemate`
  },[])
  
  return (
    <main> 
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4 ">
          <p className='text-7xl text-gray-700 font-bold my-10 dark:text-white'>404 Oops!</p>
          <div className='max-w-lg'>
            <img className='rounded' src={PageNotFoundImg} alt="404 Page Not Found"></img>
          </div>
       
        </div>
        <div className='flex justify-center my-4'>
          <Link to={"/"}>
            <button className='w-64 text-white text-xl bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium'>Back To Cinemate</button>
          </Link>
        

        </div>
      </section>
    </main>
  )
}

export default PageNotFound
