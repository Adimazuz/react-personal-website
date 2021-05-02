function MyNav(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light sticky-top navbar-center my-nav">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ml-auto ">
            <li class="nav-item ">
              <a class="nav-link" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link " href="#about">
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
            </li>{" "}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MyNav;
