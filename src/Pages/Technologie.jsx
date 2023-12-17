import React, { useState , useEffect} from 'react'
import '../styles/tech.css'
export default function Technologie({ technologie,handlechangetTech,ind }) {
    const names=["Launch vehicle","Spaceport","Space capsule"]
    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        const updateImage = () => {
            const selectedTech = technologie.find(ele => ele.name === names[ind]);
            if (selectedTech) {
                const newImageSrc =
                    window.innerWidth >= 519 ? selectedTech.images.portrait : selectedTech.images.landscape;
                setImageSrc(newImageSrc);
            }
        };

        updateImage();
        window.addEventListener('resize', updateImage);

        return () => {
            window.removeEventListener('resize', updateImage);
        };
    }, [technologie, ind]);
    return (
        <div className='tech-content' style={{ backgroundImage: `url('./assets/technology/background-technology-desktop.jpg')` }}>
            <div>
                <h1><span>03</span> SPACE LAUNCH 101</h1>
                <div className='tech-info'>
                    {
                        technologie.filter(ele => ele.name === names[ind])
                            .map((ele, ind) =>
                                <>
                                    <ul>
                                        <li onClick={()=>handlechangetTech(0)}>{ele.name===names[0]?<div className='tech1'>1</div>:<div className='tech1-1'>1</div>}</li>
                                        <li onClick={()=>handlechangetTech(1)}>{ele.name===names[1]?<div className='tech2'>2</div>:<div className='tech2-2'>2</div>}</li>
                                        <li onClick={()=>handlechangetTech(2)}>{ele.name===names[2]?<div className='tech3'>3</div>:<div className='tech3-3'>3</div>}</li>
                                    </ul>
                                    <div className="information" key={ind}>
                                        <p>THE TEMINOLOGY...</p>
                                        <h1>{ele.name}</h1>
                                        <p>{ele.description}</p>
                                    </div>
                                    <img src={imageSrc} alt="" />
                                </>
                            )
                    }

                </div>
            </div>
        </div>
    )
}
