import { NavLink, Outlet } from 'react-router-dom'
import {HiOutlineQuestionMarkCircle,HiClipboardList,HiOutlineShoppingCart,HiOutlineScale,HiOutlineRefresh,HiOutlineUserCircle,HiOutlineLogout,HiOutlineLink,HiOutlineChartSquareBar,HiOutlineCalculator,HiOutlineCash, HiBell ,HiSun,HiMoon} from "react-icons/hi";
import clickInsureLogo from "../images/ClickInsure_Logo_Blue.png"
import { useSelector, useDispatch } from 'react-redux'
import { lightMode, darkMode  } from '../theme/LightDarkMode';


export default function MainLayout() {
    const theme = useSelector((state)=>state.theme.color)
    const user = useSelector((state)=>state.userdata.user)
    const dispatch = useDispatch()

  return (
    <div className={`w-100`}>
      {/* sidebar */}
      <div className='z-5 w-[20%] shadow-sm flex flex-col justify-between top-0 bottom-0 h-screen max-h-screen fixed overflow-hidden'>

          <div className='p-4'>
            <div className='logo p-2'>
              <img className='w-40 h-10' src={clickInsureLogo} alt='ClickInsure'/>
            </div>
            <nav className='flex flex-col justify-between content-between mt-4'>
              <div className='flex flex-col items-start'>
                  <NavLink to="/" className='nav-link p-1'><HiOutlineUserCircle className='mr-2' />Profile</NavLink>
                  <NavLink to="/transactions" className='nav-link p-1'><HiOutlineCalculator className='mr-2' />Transactions</NavLink>
                  <NavLink to="/claims" className='nav-link p-1'><HiOutlineCash className='mr-2' />Claims</NavLink>
                  <NavLink to="/buy-insurance" className='nav-link p-1'><HiOutlineShoppingCart className='mr-2' />Buy Insurance</NavLink>
                  <NavLink to="/policy" className='nav-link p-1'><HiClipboardList className='mr-2'/>Policy</NavLink>
                  <NavLink to="/renewal" className='nav-link p-1'><HiOutlineRefresh className='mr-2' /> Renewal</NavLink>
                  <NavLink to="/report" className='nav-link p-1'><HiOutlineChartSquareBar className='mr-2' />Report</NavLink>
                  <NavLink to="/complaint" className='nav-link p-1'><HiOutlineLink className='mr-2' />Complaint</NavLink>
                  <NavLink to="/feedback-rating" className='nav-link p-1'><HiOutlineScale className='mr-2' /> Feedback & Rating</NavLink>
                  <NavLink to="/faq-support" className='nav-link p-1'><HiOutlineQuestionMarkCircle className='mr-2' />FAQ & Support</NavLink>
                </div>
             </nav>
          </div>

          <div className='mb-4'>
            <div className={`${theme} rounded-xl flex m-4 p-1 border border-slate-200`}>
              <span className='p-1 w-1/2 flex items-center rounded-xl cursor-pointer' onClick={()=>dispatch(darkMode())}><HiMoon className='mr-2'  />Dark</span>
              <span className={`p-1 w-1/2 flex items-center rounded-xl bg-white cursor-pointer ${theme==='dark-mode'?'text-black':''}`} onClick={()=>dispatch(lightMode())}><HiSun className='mr-2'  /> Light</span>
            </div>
            <div className='flex items-center m-4 my-6 text-red-600 cursor-pointer'>
              <HiOutlineLogout className='ml-2 mr-1 '/>
              <span>Logout</span>
            </div>
          </div>

      </div>

       <div className={` h-screen w-[80%] ml-[20%]  relative  `}>
          {/* header */}

                <header className={`${theme==='light-mode'?'bg-ci-bg':'bg-slate-900'} top-0 sticky left-0 right-0 z-5 shadow-sm  flex justify-end items-center p-4 gap-3 `}>

                  <div className='cursor-pointer'><HiBell /></div>
                  <div className='flex items-center gap-2'>
                      <div className=''>
                       {user.name}
                      </div>
                      {/* <div className='rounded-full overflow-hidden w-12 h-12'>
                        <img className='object-contain w-full h-full' src={user.profilePicture} alt='user-icon'/>
                      </div> */}

                  </div>
              </header>


              {/* main container */}
             <main className={`p-4`}>
              <Outlet />
             </main>
        </div>
  </div>

  )
}