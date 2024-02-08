
export default function FutureResult(props: any) {
    const monthly = props.monthly;
    const total_savings = props.total_savings;

    return (
        <div>
            <h2>You will get {monthly.toLocaleString("en-US")}&#x20AA; (gross) monthly income on your retirment.</h2>
            <h2>You will have {total_savings.toLocaleString("en-US")}&#x20AA; in your saving by you get to your retiermnet.</h2>
        </div>
    )
}