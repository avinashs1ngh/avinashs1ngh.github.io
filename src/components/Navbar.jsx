import { NavLink } from 'react-router-dom';

function Navbar() {
  const navItems = ['About', 'Eductaion & Experince', 'Projects', 'Blog', 'Contact'];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-secondary-dark bg-opacity-75 backdrop-blur-md border border-primary-dark rounded-t-2xl p-4 lg:static lg:rounded-2xl lg:p-6 lg:shadow-card">
      <ul className="flex justify-center gap-6">
        {navItems.map((item) => {
const NavName=item=='Eductaion & Experince'?'Eductaion-Experince':item
return(
          <li key={NavName}>
            <NavLink
              to={NavName === 'About' ? '/' : `/${NavName.toLowerCase()}`}
              className={({ isActive }) =>
                `text-sm lg:text-base font-medium transition-colors ${
                  isActive ? 'text-accent-gold' : 'text-text-gray hover:text-accent-gold-light'
                }`
              }
            >
              {NavName}
            </NavLink>
          </li>
)
})}
      </ul>
    </nav>
  );
}

export default Navbar;