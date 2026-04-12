import { Questions } from "./Questions";

export default function Flashcard({ step, isFlipped, flipCard }: { step: number, isFlipped: boolean, flipCard: () => void }) {

  const questionToMap = Questions.filter((question) => question.id === step);
  return questionToMap.map((question) => (
    <div
      id="flashcardContent"
      key={question.id}
      className="flex justify-center items-center h-100 border-2 border-solid border-black bg-neutral-50 dark:border-gray-700 dark:bg-gray-800 rounded-md mt-6 px-12"
      onClick={flipCard}
    >
      <p id="backText" className="text-3xl text-center">
        {!isFlipped ? question.front : question.back}
      </p>
    </div>
  ));
}
