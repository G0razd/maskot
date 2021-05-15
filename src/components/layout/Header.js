import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import LogoIcon from '../../svg/LogoIcon'
import Button from '../Button'

const Header = () => (
  <header className="sticky top-0 z-50 bg-white shadow">
    <div className="container flex flex-col items-center justify-between px-8 py-4 mx-auto sm:flex-row">
      <div className="flex items-center text-2xl">
        <AnchorLink href="#domu">
          {
            //<LogoIcon />
            'Σ '
          }
          Maskot
        </AnchorLink>
      </div>
      <div className="flex mt-4 font-medium md:text-xl sm:mt-0">
        <AnchorLink className="px-4" href="#info">
          Info
        </AnchorLink>
        <AnchorLink className="px-4" href="#ocekavani">
          Co tě čeká
        </AnchorLink>
        <AnchorLink className="px-4" href="#tym">
          Tým
        </AnchorLink>
        <AnchorLink className="px-4" href="#galerie">
          Galerie
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <Button className="text-md">Přihláška</Button>
      </div>
    </div>
  </header>
)

export default Header
