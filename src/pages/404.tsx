import React from "react"
import { Layout } from "../components"
import { Link } from "gatsby"

const NotFound = () => (
  <Layout>
    <div className="pt-12 text-center md:pt-p0">
      <h1 className="text-9xl">∄</h1>
      <p className="pb-6 text-2xl">Tato stránka neexistuje</p>
      <Link href="/">
        <button className="btn btn-primary">Domů</button>
      </Link>
    </div>
  </Layout>
)

export default NotFound
