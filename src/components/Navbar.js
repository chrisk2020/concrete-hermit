import React from 'react'
import styled from '@emotion/styled'
import { css } from 'emotion';
import { Link } from 'gatsby'
import logo from '../img/logo.png'

const Container = styled.div`
  ${tw`font-title text-sm flex items-center pt-4 mx-auto w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl`};`
const navbarMenu = css(tw`ml-auto`);
const navItem = css(tw`px-2 no-underline text-black hover:text-green`);


const Navbar = class extends React.Component {

  componentDidMount() {
    // Get all "navbar-burger" elements
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
   if ($navbarBurgers.length > 0) {
 
     // Add a click event on each of them
     $navbarBurgers.forEach( el => {
       el.addEventListener('click', () => {
 
         // Get the target from the "data-target" attribute
         const target = el.dataset.target;
         const $target = document.getElementById(target);
 
         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
         el.classList.toggle('is-active');
         $target.classList.toggle('is-active');
 
       });
     });
   }
 }
 
 render() {
   return (
  
  <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
    <Container className="container">
      <div className="navbar-brand">
        <Link to="/" title="Logo">
          <img src={logo} alt="Concrete Hermit" style={{ width: '75px' }} />
        </Link>
        {/* Hamburger menu */}
        <div className="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" className={navbarMenu}>
        <Link className={navItem} to="/about">
          Studio
        </Link>
        <Link className={navItem} to="/products">
          Workshop
        </Link>
        <Link className={navItem} to="/contact">
          Archive
        </Link>
        <Link className={navItem} to="/contact/examples">
          Form Examples
        </Link>
      </div>
    </Container>
  </nav>
  )}
}

export default Navbar
