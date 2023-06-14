


const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark">
      <a class="navbar-brand" href="#">
        Soccer
      </a>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Login <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
            Register
            </a>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Header;
