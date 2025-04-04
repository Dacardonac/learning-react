import React, { useState } from 'react'

const tabs = ['For You', 'Trending', 'News', 'Sports', 'Entertainment']

export function TwitterNavbar() {
  const [activeTab, setActiveTab] = useState('For You')

  return (
    <nav className='twitter-navbar'>
      <ul className='twitter-navbar-list'>
        {tabs.map(tab => (
          <li
            key={tab}
            className={`twitter-navbar-item ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
            {activeTab === tab && <span className='underline' />}
          </li>
        ))}
      </ul>
    </nav>
  )
}
