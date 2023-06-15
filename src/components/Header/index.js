
import {useEffect, useRef} from 'react';

const Header = () => {

  const navRef = useRef();
  
  useEffect(() => {
    console.log('navRef ', navRef);
    console.log('navRef ', navRef.current);
  }, [])

  return (
    <nav className="navbar navbar-expand-lg bg-dark" ref={navRef}>
      <a className="navbar-brand" href="#">
        Soccer
      </a>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Login <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            Register
            </a>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Header;
