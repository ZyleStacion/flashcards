export default function ProgressBar({
    step,
    total = 10,
}: {
    step: number;
    total: number;
}) {

    const percentage: number = Math.round(100*(step/total));
    return (
        <div className="flex flex-row flex-wrap gap-2" id="progressBar">
            <p className="flex-auto">
                {percentage}% Complete
            </p>
            <p className="flex justify-self-end-safe">
                Completed {step.toString()} of {total.toString()}
            </p>
            <progress className="progress" value={step} max={total}></progress>
        </div>
    );
}
