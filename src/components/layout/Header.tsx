import React from "react"
import LogoIcon from "../../svg/LogoIcon"
import { Link } from "gatsby"

const Header = () => (
  <header className="sticky top-0 z-50 bg-white shadow">
    <div className="container flex flex-col items-center justify-between px-8 py-4 mx-auto sm:flex-row">
      <div className="flex items-center text-2xl">
        <Link to="/#domu">
          {
            //<LogoIcon />
            "Σ "
          }
          Maskot
        </Link>
      </div>
      <div className="flex mt-4 font-medium md:text-xl sm:mt-0">
        <Link className="px-4" to="/#info">
          Info
        </Link>
        <Link className="px-4" to="/#ocekavani">
          Co tě čeká
        </Link>
        <Link className="px-4" to="/#org">
          Orgové
        </Link>
        <Link className="px-4" to="/#galerie">
          Galerie
        </Link>
      </div>
      <div className="hidden md:block">
        <Link to="/SignUp/">
          <button className="font-medium btn btn-primary">Přihláška</button>
        </Link>
      </div>
    </div>
  </header>
)

export default Header
