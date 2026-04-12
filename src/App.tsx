import { useState } from 'react'
import ProgressBar from './ProgressBar'
import Flashcard from './Flashcard'
import { Questions } from './Questions'
import NavigationButtons from './Buttons'

export default function App() {
    const [step, setStep] = useState<number>(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const total = Questions.length;

    function flipCard() {
      setIsFlipped(!isFlipped);
    }

    function incrementStep() {
      setStep(step + 1);
    }

    function decrementStep() {
      setStep(step - 1);
    }

    return (
        <>
            <h1>Flashcards</h1>
            <ProgressBar step={step + 1} total={total} />
            <Flashcard step={step} isFlipped={isFlipped} flipCard={flipCard} />
            <NavigationButtons step={step} total={total} flipCard={flipCard} incrementStep={incrementStep} decrementStep={decrementStep}/>
        </>
    );
};