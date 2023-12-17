import React from 'react'
import '../styles/crew.css'
export default function Crew({ crew, index, handlChange }) {
    const names = ["Anousheh Ansari", "Douglas Hurley", "Mark Shuttleworth", "Victor Glover"]
    return (
        <div className='crew-content' style={{ backgroundImage: `url('./assets/crew/background-crew-desktop.jpg')` }}>
            <div className='content'>
                <h1><span>02</span> MEET YOUR CREW</h1>
                {crew.filter(ele => ele.name === names[index])
                    .map((ele) =>
                        <div className='info-crew'>
                            <div className='info-member'>
                                <span>
                                <h2>{ele.role}</h2>
                                <h1>{ele.name}</h1>
                                <p>{ele.bio}</p>
                                </span>
                                <ul>
                                    <li onClick={() => handlChange(0)}>{ele.name === names[0] ? <i className="fa-solid fa-circle"></i> : <i className="fa-regular fa-circle"></i>}</li>
                                    <li onClick={() => handlChange(1)}>{ele.name === names[1] ? <i className="fa-solid fa-circle"></i> : <i className="fa-regular fa-circle"></i>}</li>
                                    <li onClick={() => handlChange(2)}>{ele.name === names[2] ? <i className="fa-solid fa-circle"></i> : <i className="fa-regular fa-circle"></i>}</li>
                                    <li onClick={() => handlChange(3)}>{ele.name === names[3] ? <i className="fa-solid fa-circle"></i> : <i className="fa-regular fa-circle"></i>}</li>
                                </ul>
                            </div>
                            <img src={ele.images.webp} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}
