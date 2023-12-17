import React from 'react'
import '../styles/home.css'


export default function Home() {
    return (
        <div className='content-home' style={{ backgroundImage: `url('./assets/home//background-home-desktop.jpg')` }}>
                <main>
                    <div>
                        <p className='txt-1'>So, you want to travel to</p>
                        <h1>SPACE</h1>
                        <span>
                            <p> Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                            <h1>EXPLORE</h1>
                        </span>
                    </div>
                </main>
        </div>        
    )
}
