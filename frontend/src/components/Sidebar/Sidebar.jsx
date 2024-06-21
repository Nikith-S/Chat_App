import React from 'react'
import SearchInput from './SearchInput'
import LogoutButton from './LogoutButton'
import Conversations from './Conversations'

function Sidebar() {
  return (
    <div>
      <SearchInput/>
      <div className='divider px-3'></div>
      <LogoutButton/>
      <Conversations/>
    </div>
  )
}

export default Sidebar
