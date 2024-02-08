
export default function PastResult(props: any) {
    const fund = props.fund;

    return (
        <div>
            <h3>Fund information</h3>
                <ul>
                    <li>Parent company: {fund.PARENT_COMPANY_NAME}</li>
                    <li>Fund: {fund.FUND_NAME}</li>
                    <li>STD: {fund.STANDARD_DEVIATION}</li>
                    <li>Saving interest: {fund.AVG_ANNUAL_MANAGEMENT_FEE}%</li>
                    <li>Deposite interest: {fund.AVG_DEPOSIT_FEE}%</li>
                    <li>AVG Anual yield: {fund.AVG_ANNUAL_YIELD_TRAILING_5YRS}%</li>
                </ul>
        </div>
    )
}