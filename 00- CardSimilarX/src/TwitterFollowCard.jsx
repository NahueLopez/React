import {useState} from 'react'

export function TwitterFollowCard ({children,userName,initialisFollowing}){
    
    const [isFollowing, setisFollowing] = useState(initialisFollowing)
   

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () => {
        setisFollowing(!isFollowing)
    }

    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    alt="El avatar oso" 
                   /* src={'https://unavatar.io/duckduckgo/${userName}'} /> */
                    src={'https://unavatar.io/duckduckgo/gummibeer.dev'} />
            <div className="tw-followCard-info">
                <strong>{children}</strong>
                <span className='tw-followCard-infoUser'>@{userName}</span>
            </div>
            </header>

            <aside>
                <button className= {buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopfollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}