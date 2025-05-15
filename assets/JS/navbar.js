document.querySelector("header").innerHTML += `<nav class="navbar navbar-expand-lg navbar-dark bg-black sticky-top shadow-sm border-bottom border-secondary">
  <div class="container-fluid">
    <!-- Logo / Brand -->
    <a class="navbar-brand m-1">
            <img src="assets/images/logo.png" alt="logo" width="150px" height="50px">
        </a>

    <!-- Toggler for mobile -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#dnbcNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Collapsible nav links -->
    <div class="collapse navbar-collapse" id="dnbcNavbar">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
        <li class="nav-item">
          <a class="nav-link px-3 text-white fw-semibold" href="index.html">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-3 text-white fw-semibold" href="about.html">ABOUT US</a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-3 text-white fw-semibold" href="todaysworld.html">TODAY'S WORLD</a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-3 text-white fw-semibold" href="business.html">BUSINESS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-3 text-white fw-semibold" href="sports.html">SPORTS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-3 text-white fw-bold" href="contact.html">CONTACT US</a>
        </li>
      </ul>
    </div>
  </div>
</nav>`