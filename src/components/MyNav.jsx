function MyNav(props) {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light sticky-top my-nav">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-center order-2"
          id="navbarNavAltMarkup"
        >
          <ul class="navbar-nav  ">
            <li class="nav-item ">
              <a class="nav-link" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-item nav-link " href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#experience">
                Expirence
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#skills">
                skills
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#projects">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default MyNav;
