import React from 'react'
import { useNavigate } from 'react-router-dom'

function SideNav() {
  const navigate = useNavigate()
  const handleNavigate = (path) => {
    if (path === 'profile') {
      navigate('/profile')
    } else if (path === 'posts') {
      navigate('/posts')
    }
    else if (path === 'gallery') {
      navigate('/gallery')
    } else {
      navigate('/toDo')
    }
  }
  return (

    <div>
      <ul>
        <li onClick={() => handleNavigate('profile')}>Profile</li>
        <hr />
        <li onClick={() => handleNavigate('posts')}>Posts</li>
        <hr />
        <li onClick={() => handleNavigate('gallery')}>Gallery</li>
        <hr />
        <li onClick={() => handleNavigate('toDo')}>ToDo</li>
      </ul>
    </div>
  )
}

export default SideNav