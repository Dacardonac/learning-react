import { useState } from "react";

export function TwitterFollowCard({children, userName, initialIsFollowing}) {

  // const state = useState(false) // El useSate devuelve un array de dos posiciones / siempre se pasa el estado inicial por asi decirlo en este caso false
  // const isFollowing = state[0] // La primera posicion es el valor del estado
  // const setIsFollowing = state[1] // La segunda posicion es una funcion que nos permite actualizar el estado segun el valor
  // =
  // Simplificado
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Following' : 'Follow'
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
    <header className='tw-followCard-header'>
      <img
        className='tw-followCard-avatar'
        src={`https://unavatar.io/${userName}`}
        alt={`${userName} Avatar`} />
      <div className='tw-followCard-info'>
        <strong>{children}</strong>
        <span className='tw-followCard-infoUsername'>@{userName}</span>
      </div>
    </header>
    <aside>
      <button className={buttonClassName} onClick={handleClick}>
        <span className="tw-followCard-text">{text}</span>
        <span className="tw-followCard-stopFollow">Unfollow</span>
      </button>
    </aside>
  </article>
  )
}