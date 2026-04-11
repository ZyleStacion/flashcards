import { useState } from 'react'
import ProgressBar from './ProgressBar'
import Flashcard from './Flashcard'
import { Questions } from './Questions'

function App() {
    const [step, setStep] = useState<number>(0);
    const total = Questions.length;

    return (
        <>
            <h1>Flashcards</h1>
            <ProgressBar step={step + 1} total={total} />
            <Flashcard step={step}/>
        </>
    );
}

export default App