//Link
import { Link  } from 'react-scroll'

//Icons
import { FiHome } from "react-icons/fi";
import { BiUser} from 'react-icons/bi'
import { BsBriefcase, BsChatLeftText} from 'react-icons/bs'
import { FaRegKeyboard } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";


export default function Nav() {
  return (
    
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max
      bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>

        <div className="flex w-full xl:flex-col items-center justify-between
          xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8
          bg-white/20 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full" >
          
          {/* Texto */}
          
          <Link to='home' activeClass='active' smooth={true} spy={true} offset={-200} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <FiHome />
          </Link>  

          <Link to='about' activeClass='active' smooth={true} spy={true} offset={-200} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <BiUser />
          </Link> 
 
          <Link to='skills' activeClass='active' smooth={true} spy={true} offset={-200} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <FaRegKeyboard />
          </Link> 

          <Link to='projects' activeClass='active' smooth={true} spy={true} offset={-200} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <FaCode/>
          </Link> 

          <Link to='work' activeClass='active' smooth={true} spy={true} offset={-200} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <BsBriefcase/>
          </Link> 

          <Link to='contact' activeClass='active' smooth={true} spy={true} offset={-200} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <BsChatLeftText/>
          </Link> 

        </div>
    </nav>
  )
}
