
document.querySelector("header").innerHTML += `
<nav class="navbar navbar-expand-lg navbar-dark bg-black sticky-top shadow-sm border-bottom border-secondary">
        <div class="container-fluid">
          <a class="navbar-brand m-1">
            <img src="assets/images/logo.png" alt="logo" width="150px" height="50px">
        </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link px-2 text-white fw-semibold" aria-current="page" href="index.html">HOME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-2 text-white fw-semibold" href="about.html">ABOUT US</a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-2 text-white fw-semibold" href="todayInWorld.html">TODAY IN WORLD</a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-2 text-white fw-semibold" href="business.html">BUSINESS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-2 text-white fw-semibold" href="sports.html">SPORTS</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle px-2 text-white fw-semibold " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  TOP CITIES
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a  class="dropdown-item" href="tokyo.html">TOKYO</a></li>
                  <li><a class="dropdown-item" href="dehli.html">DELHI</a></li>
                  <li><a class="dropdown-item" href="shanghai.html">SHANGAI</a></li>
                  <li><a class="dropdown-item" href="dhaka.html">DHAKA</a></li>
                  <li><a class="dropdown-item" href="cairo.html">CAIRO</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link px-2 text-white fw-semibold" href="contact.html">CONTACT US</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      `