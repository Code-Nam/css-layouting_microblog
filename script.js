const navbar = document.querySelector('nav')
const body = document.querySelector('body')

const display = () =>{
  if (navbar.style.transform == "translateX(0%)"){
      navbar.style.transform = "translateX(-100%)"
      body.style.overflow = "visible"
  } else{
      body.style.overflow = "hidden"
      navbar.style.transform = "translateX(0%)"
  }
}