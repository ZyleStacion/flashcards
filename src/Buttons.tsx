export default function NavigationButtons({ step, total, flipCard, incrementStep, decrementStep }: {step: number, total: number, flipCard: () => void, incrementStep: () => void, decrementStep: () => void }) {
    
    // Check if step is greater than 0
    let renderPrevButton = false;
    if (step === 0) {
        renderPrevButton = true;
    }

    // Check if step is greater than questionLength
    let renderNextButton = false;
    if (step +1 >= total) {
        renderNextButton = true;
    }

    return (
        <>
            <div id="navigationButtons" className='pt-3 flex flex-row gap-x-3 min-w-max'>
                <button className='btn flex-1/3' disabled={renderPrevButton} onClick={decrementStep}>&#8592; Previous</button>
                <button className='btn flex-1/3' onClick={flipCard}>Show Answer</button>
                <button className='btn flex-1/3' disabled={renderNextButton} onClick={incrementStep}>Next &#8594;</button>
            </div>
        </>
    )
}