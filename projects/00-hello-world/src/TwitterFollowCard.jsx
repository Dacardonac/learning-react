export function TwitterFollowCard({userName, children, isFollowing}) {
  console.log(isFollowing);

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
      <button className='tw-followCard-button'>
        Follow
      </button>
    </aside>
  </article>
  )
}