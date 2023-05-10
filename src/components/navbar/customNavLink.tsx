import { NavLink } from 'react-router-dom'
type Props = { text: string; path: string }
export const CustomNavLink: React.FC<Props> = ({ text, path }) => {
  return (
    <NavLink
      to={`/${path}`}
      className={({ isActive, isPending }) =>
        isPending ? 'pending' : isActive ? 'active' : ''
      }
    >
      {text}
    </NavLink>
  )
}
