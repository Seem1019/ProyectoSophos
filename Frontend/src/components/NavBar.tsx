import { NavLink } from 'react-router-dom'
import { ReactComponent as MenuIcon } from '@/assets/menu.svg'

const LinksText = ['games', 'users', 'rentals', 'prices', 'info']
export const NavBar = () => {
  return (
    <header className="top-0 flex justify-between items-center py-2 w-full">
      <div className="relative flex -mr-3 xs:-mr-0">
        <label
          htmlFor="nav-menu"
          className="xs:hidden flex items-center px-2 py-1.5 rounded-full hover:bg-gray-600/50 cursor-pointer"
        >
          <MenuIcon width={30} />
        </label>
        <input
          id="nav-menu"
          type="checkbox"
          className="peer xs:hidden absolute top-1 left-1.5 w-8 h-8 opacity-0 -z-10"
        />
        <nav className="peer-checked:flex hidden absolute top-full left-0 flex-col items-stretch gap-2 mt-1 py-2 px-3 w-40 bg-dark border-2 z-10 xs:relative xs:flex xs:flex-row xs:items-center xs:mt-0 xs:py-0 xs:px-0 xs:w-fit xs:bg-transparent xs:border-none">
          {LinksText.map((item, index) => (
            <Link key={index} route={item} />
          ))}
        </nav>
      </div>
    </header>
  )
}

const Link = ({ route }: { route: string }) => {
  return (
    <NavLink
      to={`/${route}`}
      className={({ isActive }) =>
        `px-2 py-2 border-b-4 border-b-blue-500/0 hover:border-b-blue-500/100 text-lg capitalize ${
          isActive ? 'border-b-blue-500/100' : ''
        }`
      }
    >
      {route}
    </NavLink>
  )
}
