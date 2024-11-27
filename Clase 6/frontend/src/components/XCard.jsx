import { useState } from 'react'; // Import useState from react

export default function XCard( children, userName, initialIsFollowing ) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing); // Creamos el estado isFollowing y la función setIsFollowing con el valor de initialIsFollowing
    const follow = isFollowing ? 'Siguiendo' : 'Seguir'; // Creamos la constante follow que depende del valor de isFollowing
    const buttonClassname = isFollowing ? 'button-card-twitter is following' : 'button-card-twitter'; // Creamos la constante buttonClassname que depende del valor de isFollowing
    const handleClick = () => setIsFollowing(!isFollowing); // Creamos la función handleClick que cambia el valor de isFollowing
    
    return (
        <article className='card-twitter'>
            <header className='header-card-twitter'>
                <img
                className='avatar-twitter'
                src={`https://api.adorable.io/avatars/285/${userName}.png`}
                />
            </header>
            <div className='info-card-twitter'>
                <strong>
                    {children}
                </strong>
                <span className='username-card-twitter'>
                    @{userName}
                </span>
            </div>
            <header>
                <aside>
                    <button className={buttonClassname} onClick={handleClick}>
                        <span className='follow-card-twitter'>
                            {follow}
                        </span>
                        <span className='unfollow-card-twitter'>
                            Dejar de Seguir
                        </span>
                    </button>
                </aside>
            </header>
        </article>
    )
}