import { NavLink } from 'react-router-dom';
import Logout from './Logout';
import Search from './Search'

function NavBar() {



    return(
    <div className="w-full h-32 bg-black flex items-center"> 
        <span className= "flex items-right text-3xl text-pinky" >
            <img src="https://i.ibb.co/3rs81jf/logo.png" alt="logo" title="Kbeauty" className='w-1/4 ml-12' />
            <div className='ml-auto'>
                <span className="rounded px-6 py-4 mt-6 hover:bg-zinc-700"><NavLink to="/">Home</NavLink></span>
                <span className="rounded px-6 py-4 mt-6 hover:bg-zinc-700"><NavLink to="/cart">Cart</NavLink></span>
                {/* <span className="rounded px-6 py-4 mt-6 hover:bg-zinc-700"><NavLink to="/login">Login</NavLink></span>
                <span className="rounded px-6 py-4 mt-6 hover:bg-zinc-700"><NavLink to="/register">Register</NavLink></span> */}
                <span className="rounded px-6 py-4 mt-6 hover:bg-zinc-700"><NavLink to="/profile">Profile</NavLink></span>
                {/* <Logout /> */}
                <Search />
            </div>
        </span>
    </div>
    )
}

export default NavBar;