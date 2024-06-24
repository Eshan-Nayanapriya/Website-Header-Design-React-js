import './Navbar.css';

const Navbar = () => {
  return (
    <div className='nav'>
       <div className="nav-logo">Future-Web</div>
       <ul className='nav-menu'>
        <li>Home</li>
        <li>Browse</li>
        <li>About Us</li>
        <li className='nav-contact'>Contact</li>
       </ul>
    </div>
  )
}

export default Navbar
