import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

  return (
    <section className='App'>
    <TwitterFollowCard isFollowing userName='dacardonac'>
      Daniel Alejandro Cano
    </TwitterFollowCard>

    <TwitterFollowCard isFollowing={false} userName='midudev'>
      Miguel Ángel Durán
    </TwitterFollowCard>

    <TwitterFollowCard isFollowing userName='elonmusk'>
      Elon Musk
    </TwitterFollowCard>

    <TwitterFollowCard isFollowing userName='Google'>
      Google
    </TwitterFollowCard>
    </section>
  )
}