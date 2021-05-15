import React from 'react'
import Layout from '../components/layout/Layout'
import Button from '../components/Button'
import { Link } from 'gatsby'

const NotFound = () => (
  <Layout>
    <div className="pt-12 text-center md:pt-p0">
      <h1 className="text-9xl">∄</h1>
      <p className="pb-6 text-2xl">Tato stránka neexistuje</p>
      <Link href="/">
        <Button>Domů</Button>
      </Link>
    </div>
  </Layout>
)

export default NotFound
