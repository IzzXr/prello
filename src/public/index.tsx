import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../core/components'
import './style/styles.sass'

const PublicPage = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default PublicPage
