import { Tile } from "../../tile";

export default function SimulatorOutput(props: any) {
    const income = props.monthly;
    const total = props.savings;
    const borad = props.borad
    const grid_columns = [1, 2, 3, 4, 5, 6, 7, 8];
    const grid_rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    return (
        <div>
            <div className="output-tiles">
                <div className='backgound-tilt-grid'>
                    {grid_rows.map(r =>
                        <div className={"div" + r + " row"} key={"r" + r}>
                            {grid_columns.map(n =>
                                <Tile row={r} column={n} borad={borad} key={r + "_" + n} />
                            )}
                        </div>
                    )}
                </div>
            </div>
            <div className="pred-elements">
                <div className="elm">
                    <h4>{income.toLocaleString("en-US")}&#x20AA;</h4>
                    <p>קצבה חודשית</p>
                </div>
                <div className="elm">
                    <div>
                        <svg width="40" height="30" viewBox="0 0 95 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.3335 12.9272L47.3664 25.6258L69.1385 12.9272L46.9752 0.228516L25.3335 12.9272Z" fill="#376720" />
                            <path d="M50.8301 27.1039L72.8629 39.8026L94.6351 27.1039L72.4718 14.4053L50.8301 27.1039Z" fill="#376720" />
                            <path d="M0.672852 27.1342L22.7057 39.8329L44.4778 27.1342L22.3146 14.4355L0.672852 27.1342Z" fill="#376720" />
                            <path d="M26.168 41.311L48.2008 54.0096L69.973 41.311L47.8097 28.6123L26.168 41.311Z" fill="#376720" />
                        </svg>

                    </div>
                    <div>
                        <h4>{total.toLocaleString("en-US")}&#x20AA;</h4>
                        <p>חיסכון כללי</p>

                    </div>
                </div>

            </div>
        </div>
    )
}