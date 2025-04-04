import React from 'react'
import '../src/assets/styles/App.css'
import { TwitterFollowCard } from './assets/components/TwitterFollowCard'
import { TwitterNavbar } from './assets/components/TwitterNavbar'

export function App() {

  return (
    <>
    <header className='Header'>
      <TwitterNavbar />
      <h2 className='header-subtitle mb-4 fs-3'>Follow me on Twitter</h2>
    </header>
    <section className='App'>
    <TwitterFollowCard userName='dacardonac'>
      Daniel Alejandro Cano
    </TwitterFollowCard>

    <TwitterFollowCard userName='midudev'>
      Miguel Ángel Durán
    </TwitterFollowCard>

    <TwitterFollowCard userName='elonmusk'>
      Elon Musk
    </TwitterFollowCard>

    <TwitterFollowCard userName='Google'>
      Google
    </TwitterFollowCard>
    </section>
    </>
  )
}