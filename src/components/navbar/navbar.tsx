import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faBox, faUser } from '@fortawesome/free-solid-svg-icons'

import { CustomNavLink } from 'components/navbar/customNavLink'

import './index.scss'
export const Navbar: React.FC = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__square'></div>

      <ul className='navbar__list'>
        <li>
          <FontAwesomeIcon icon={faBuilding} className='navbar__list-icon' />
          <CustomNavLink text='Companies' path='companies' />
        </li>
        <li>
          <FontAwesomeIcon icon={faBox} className='navbar__list-icon' />
          <CustomNavLink text='Articles' path='articles' />
        </li>
        <li>
          <FontAwesomeIcon icon={faUser} className='navbar__list-icon' />
          <CustomNavLink text='Profile' path='profile' />
        </li>
      </ul>
    </nav>
  )
}

// function getIcon (stringIcon: string): IconDefinition {
//   const [type, name] = stringIcon
//     .split(/\s+/)
//     .map(name => name.replace(/^fa-/, ''))
//   console.log(name)

//   return icon({ prefix: 'fas' as IconPrefix, iconName: name as IconName })
// }
