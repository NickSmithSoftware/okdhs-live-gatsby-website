import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Index = () => {
  return (
    <Layout>
      <h1>Rendering Modes Starter</h1>
      <ul>
        <li>
          <Link to='/'>DSG page</Link>
        </li>
        <li>
          <Link to='/'>SSR page</Link>
        </li>
      </ul>
    </ Layout>
  )
}

export default Index;