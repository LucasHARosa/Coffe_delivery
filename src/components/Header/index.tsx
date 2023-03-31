import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import { ShoppingCart, MapPin} from 'phosphor-react'

import LogoCoffe from '../../assets/LogoCoffe.svg'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={LogoCoffe} alt="" />
      </span>
      <div>
        <span>
          < MapPin size={22} weight="fill"/>
          <p>Brasília, DF</p>
        </span>
        <nav>
          <NavLink to="/cart" title="Carrinho">
            < ShoppingCart size={22} weight="fill"/>
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  )
}