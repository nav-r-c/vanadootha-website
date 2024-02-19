import React from 'react'

function Video() {
    return (
        <>
        <div>
            <iframe className='hidden lg:block mx-auto rounded-lg shadow-lg object-contain' width="900" height="500" src="https://www.youtube.com/embed/KJwYBJMSbPI" title="EARTH 4K - Relaxation Film - Peaceful Relaxing Music - Nature 4k Video UltraHD -  OUR PLANET" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            <iframe className='hidden md:block lg:hidden mx-auto object-contain rounded-lg shadow-lg' width="600" height="300" src="https://www.youtube.com/embed/KJwYBJMSbPI" title="EARTH 4K - Relaxation Film - Peaceful Relaxing Music - Nature 4k Video UltraHD -  OUR PLANET" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            <iframe className='block md:hidden mx-auto object-contain rounded-lg shadow-lg' width="250" height="150" src="https://www.youtube.com/embed/KJwYBJMSbPI" title="EARTH 4K - Relaxation Film - Peaceful Relaxing Music - Nature 4k Video UltraHD -  OUR PLANET" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
        </>
    )
}

export default Video