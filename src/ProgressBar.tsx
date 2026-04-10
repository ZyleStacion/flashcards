export default function ProgressBar({
    step,
    total = 10,
}: {
    step: number;
    total: number;
}) {

    let percentage: number = 100*(step/total);
    return (
        <div className="flex flex-row flex-wrap">
            <p className="flex-auto">
                {percentage}%
            </p>
            <p className="flex justify-self-end-safe">
                Completed {step.toString()} of {total.toString()}
            </p>
            <br/>
            <progress className="progress" value={step} max={total}></progress>
        </div>
    );
}
