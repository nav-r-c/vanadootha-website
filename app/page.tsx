import React from 'react'
import Banner from './Banner'
import Animals from './Animals'
import Conflict from './Conflict'
import Stats from './Stats'
import AboutUsHome from './AboutUsHome'

function page() {
	return (
		<>
			<div>
				<Banner />
				<div className='w-[80%] mx-auto'>
					<Animals />
					<div>
						<Conflict />
						<Stats />
					</div>
				</div>
				<AboutUsHome />
			</div>
		</>
	)
}

export default page