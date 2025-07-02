import { NavLink } from 'react-router-dom';

function Navbar() {
  const navItems = ['About', 'Resume', 'Projects', 'Contact'];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-secondary-dark bg-opacity-75 backdrop-blur-md border border-primary-dark rounded-t-2xl p-4 lg:static lg:rounded-2xl lg:p-6 lg:shadow-card bg-opacity-50 z-[101]">
      <ul className="flex justify-center gap-6">
        {navItems.map((item) => {

return(
          <li key={item}>
            <NavLink
              to={item === 'About' ? '/' : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `text-sm lg:text-base font-medium transition-colors ${
                  isActive ? 'text-accent-gold' : 'text-text-gray hover:text-accent-gold-light'
                }`
              }
            >
              {item}
            </NavLink>
          </li>
)
})}
      </ul>
    </nav>
  );
}

export default Navbar;