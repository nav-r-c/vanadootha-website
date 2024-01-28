import React from 'react'
import Banner from './Banner'
import Animals from './Animals'
import Conflict from './Conflict'

function page() {
	return (
		<>
			<div>
				<Banner />
				<div className='w-[80%] mx-auto'>
					<Animals />
					<div>
						<Conflict />
					</div>
				</div>
			</div>
		</>
	)
}

export default page