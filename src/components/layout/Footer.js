import React from 'react'

const Footer = () => (
  <footer className="container px-3 py-16 mx-auto mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">O nás</h2>
        <p className="mt-5">Ridiculus mus mauris vitae ultricies leo integer malesuada nunc.</p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Důležité odkazy</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="/">Odkaz</a>
          </li>
          <li>
            <a href="/">Odkaz</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Další</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="">Odkaz</a>
          </li>
          <li>
            <a href="/">Odkaz</a>
          </li>
          <li>
            <a href="/">Odkaz</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer
