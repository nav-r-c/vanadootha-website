import React from 'react'

interface Proptypes {
    statistic : string,
    desc : string
}

function StatsCard(props : Proptypes) {
    return (
        <>
            <div className='group transition-all ease-in-out hover:scale-105'>
                <div className='bg-accent-2 py-20 px-5 rounded-md shadow-lg'>
                    <h1 className='text-accent-4 font-bold text-5xl text-center'>{props.statistic}</h1>
                </div>
                <h2 className='text-center text-sm my-5 text-secondary-3 opacity-50 transition-all ease-in-out group-hover:opacity-100'>{props.desc}</h2>
            </div>
        </>
    )
}

StatsCard.defaultProps = {
    statistic : "400",
    desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}

export default StatsCard