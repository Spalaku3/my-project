import React, { useEffect, useState } from 'react';
import { FaXmark, FaBars } from 'react-icons/fa6';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu on item click
    }
  };

  const navItems = [
    { link: "Home", id: "home" },
    { link: "Service", id: "service" },
    { link: "About", id: "about" },
    { link: "Product", id: "product" },
    { link: "Testimonial", id: "testimonial" },
    { link: "FAQ", id: "faq" },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 right-0 z-50 ${isSticky ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <nav className='container mx-auto flex items-center justify-between p-4'>
        <a href='/' className='text-2xl font-semibold flex items-center space-x-3'>
          <img src="https://flowbite.com/docs/images/logo.svg" alt="Nexcent Logo" className='w-10 inline-block' />
          <span>NEXCENT</span>
        </a>

        <ul className='hidden md:flex space-x-12'>
          {navItems.map(({ link, id }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className='block text-base hover:text-brandPrimary font-medium'
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <div className='space-x-12 hidden lg:flex items-center'>
          <a href='/' className='hidden lg:flex items-center text-brandPrimary hover:text-grey900'>Login</a>
          <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey'>Sign up</button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaXmark className='h-6 w-6 text-neutralDGrey' />
            ) : (
              <FaBars className='h-6 w-6 text-neutralDGrey' />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden space-y-4 px-4 mt-4 py-7 bg-brandPrimary'>
          {navItems.map(({ link, id }) => (
            <li key={id} className='list-none'>
              <button
                onClick={() => scrollToSection(id)}
                className='block text-white hover:text-neutralDGrey font-medium'
              >
                {link}
              </button>
            </li>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
