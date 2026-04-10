import { useState } from 'react'
import ProgressBar from './ProgressBar'

function App() {

    const [step, setStep] = useState<number>(1);
    const total = 10;

    return (
        <>
            <h1>Flashcards</h1>
            <ProgressBar step={step} />
        </>
    );
}

export default App