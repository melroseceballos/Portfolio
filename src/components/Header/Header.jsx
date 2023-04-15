import './styles.css'


function Header() {
  function myFunction(x) {
    x.classList.toggle("change");
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
  }

  return (
    <>
      <header>
        <nav className='navigation'>
        <li><a href="#">HOME</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">PROJECT</a></li>
        <li><a href="#">CONTACT ME</a></li>
      </nav>
      </header>
      
    </>
  )
}

export default Header

{/* <nav>
<div className='container'>
            <div class="container" onClick={(event) => myFunction(event.target)}>
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
            </div>
            <div class="nav-links">
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact Me</a></li>
              </ul>
            </div>
          </div>
        </nav> */}