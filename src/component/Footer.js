import {Link} from "react-router-dom"

const Footer = () => {
  return (
    
      <footer className="bg-white   dark:bg-gray-800 mb-0	 ">
          <div className=" mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between  ">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <Link to="/" className="hover:underline">Cinemate</Link>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
             
              <li>
                  <a href="http://www.linkedin.com/in/haimhubara " target="_blank" className="hover:underline me-4 md:me-6"rel="noreferrer">LinkedIn</a>
              </li>
              <li>
                  <a href="https://github.com/haimhubara" target="_blank" className="hover:underline " rel="noreferrer">Github</a>
              </li>
          </ul>
          </div>
      </footer>


  )
}

export default Footer
