import React from 'react'
import '../src/assets/styles/App.css'
import { TwitterFollowCard } from './assets/components/TwitterFollowCard'
import { TwitterNavbar } from './assets/components/TwitterNavbar'

const users = [
  { userName: 'dacardonac', name: 'Daniel Alejandro Cano', isFollowing: true },
  { userName: 'midudev', name: 'Miguel Ángel Durán', isFollowing: true},
  { userName: 'elonmusk', name: 'Elon Musk', isFollowing: false },
  { userName: 'Google', name: 'Google', isFollowing: false },
  { userName: 'git', name: 'Git', isFollowing: false },
  { userName: 'Oracle', name: 'Oracle', isFollowing: false }
]

export function App() {

  return (
    <>
    <header className='Header'>
      <TwitterNavbar />
      <h2 className='header-subtitle mb-4 fs-3'>Follow me on Twitter</h2>
    </header>
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => {
          return (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}>
              {name}
            </TwitterFollowCard>
          )
        })
      }
    </section>
    </>
  )
}