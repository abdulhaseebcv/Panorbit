import React from 'react'
import { Link } from 'react-router-dom'
import { List } from './SideNavStyle'

function SideNav() {

  return (
    <List>
      <div>
        <Link to='/profile' style={{ textDecoration: 'none', color: 'white' }}>Profile</Link>
      </div>
      <hr />
      <div>
        <Link to='/posts' style={{ textDecoration: 'none', color: 'white' }}>Posts</Link>
      </div>
      <hr />
      <div>
        <Link to='/gallery' style={{ textDecoration: 'none', color: 'white' }}>Gallery</Link>
      </div>
      <hr />
      <div>
        <Link to='/todo' style={{ textDecoration: 'none', color: 'white' }}>ToDO</Link>
      </div>
      <hr />
    </List>

  )
}

export default SideNav