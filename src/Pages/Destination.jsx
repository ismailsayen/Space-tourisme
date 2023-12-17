import React from 'react'
import '../styles/des.css'
function Destination({ palnete,handleClick,fil}) {
  return (
    <div className='content-desti' style={{ backgroundImage: `url('./assets/destination/background-destination-desktop.jpg')` }}>
        <h1 className='title'><span>01</span> PICK YOUR DESTINATION</h1>
        {palnete.filter(ele => ele.name === fil).map((ele, ind) =>
          <div className="info-des">
            <img src={`${ele.images.webp}`} />
            <div className='plan-info'>
              <ul>
                <li onClick={()=>handleClick("Moon")} >Moon</li>
                <li onClick={()=>handleClick("Mars")} >Mars</li>
                <li onClick={()=>handleClick("Europa")} >Europa</li>
                <li onClick={()=>handleClick("Titan")} >Titan</li>
                </ul>
              <h1>{ele.name}</h1>
              <p className='p'>{ele.description}</p>
              <hr />
            <div className='details'>
              <div>
                <p>AVG.DISTANCE</p>
                <p>{ele.distance}</p>
              </div>
              <div>
                <p>EST. TRAVEL TIME</p>
                <p>{ele.travel}</p>
              </div>
            </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default Destination