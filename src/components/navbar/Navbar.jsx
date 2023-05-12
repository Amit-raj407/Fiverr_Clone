import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import "./Navbar.scss";
const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const {pathname} = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  }

  useEffect(()=> {
    window.addEventListener("scroll", isActive);
    return () => {
        window.removeEventListener("scroll", isActive);
    }
  },[]);

  const currentUser = {
    id: 1,
    username: "ZeroX241",
    isSeller: true
  }

  return (
    <div className={active || pathname!=="/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className='link'>
            <span className="text">fiverr</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign In</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
                <img src="https://th.bing.com/th?id=OIP.9y1a3MaRyCsMZVE8DOdZiQHaJz&w=217&h=287&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
                <span>{currentUser?.username}</span>
                { open && (<div className="options">
                    {
                        currentUser?.isSeller && (
                            <>
                                <Link className='link' to="/gigs"><span>Gigs</span></Link>
                                <Link className='link' to="/add"><span>Add New Gigs</span></Link>
                            </>
                        )
                    }
                    <Link className='link' to="/orders"><span>Orders</span></Link>
                    <Link className='link' to="/messages"><span>Messages</span></Link>
                    <Link className='link' to="/"><span>Logout</span></Link>
                </div>)}
            </div>
          )}
        </div>
      </div>
      {(active || pathname!=="/") && (
        <>
          <hr />
          <div className="menu">
            <Link className='link menuLink' to='/'>
                Graphics
            </Link>
            <Link className='link menuLink' to='/'>
                Design
            </Link>
            <Link className='link menuLink' to='/'>
                Writing
            </Link>
            <Link className='link menuLink' to='/'>
                AI Services
            </Link>
            <Link className='link menuLink' to='/'>
                Digital Marketing
            </Link>
            <Link className='link menuLink' to='/'>
                Music
            </Link>
            <Link className='link menuLink' to='/'>
                LifeStyle
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
