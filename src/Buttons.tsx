import { useState } from 'react'

export default function NavigationButtons() {
    return (
        <>
            <div id="navigationButtons" className='pt-3 flex flex-row gap-x-3 min-w-max'>
                <button className='btn flex-1/3'>&#8592; Previous</button>
                <button className='btn flex-1/3'>Show Answer</button>
                <button className='btn flex-1/3'>Next &#8594;</button>
            </div>
        </>
    )
}