import { Tile } from "../../tile";

export default function SimulatorOutput(props: any) {
    const income = props.monthly;
    const total = props.savings;
    const borad = props.borad
    console.log(props)
    const grid_columns = [1, 2, 3, 4, 5,6,7,8];
  const grid_rows = [1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15]
    return (
        <div>
            <div className="output-tiles">
            <div className='backgound-tilt-grid'>
        {grid_rows.map(r =>
          <div className={"div" + r + " row"} key={"r" + r}>
            {grid_columns.map(n =>
              <Tile row={r} column= {n} borad={borad} key={r + "_" + n} />
            )}
          </div>
        )}
      </div>
            </div>
            <div className="pred-elements">
                <div className="inner">
                    <div className="elm">
                        <div>
                            <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.1771 2.74741C16.2105 2.85126 16.2658 2.95328 16.3418 3.05308L20.5213 10.81L20.9602 10.9289H20.5185L1.51114 36.8604C0.633953 37.9487 0.157715 39.1165 0.157715 40.3319C0.157715 46.2237 11.3506 51 25.1577 51C38.9648 51 50.1577 46.2237 50.1577 40.3319C50.1577 39.1049 49.6723 37.9263 48.779 36.8292L29.2814 10.9289H28.8731C29.0106 10.8913 29.1476 10.8517 29.2842 10.81L33.4636 3.05308C33.5396 2.95328 33.595 2.85126 33.6283 2.74741L33.6656 2.67821H33.6472C33.6594 2.62391 33.6656 2.56914 33.6656 2.51396C33.6656 1.12554 29.7423 0 24.9027 0C20.0631 0 16.1398 1.12554 16.1398 2.51396C16.1398 2.56914 16.146 2.62391 16.1582 2.67821H16.1398L16.1771 2.74741Z" fill="#376720" />
                            </svg>

                        </div>
                        <div>
                            <h4>קצבה חודשית</h4>
                            {income.toLocaleString("en-US")}&#x20AA;
                        </div>
                    </div>
                    <div className="elm">
                        <div>
                            <svg width="95" height="54" viewBox="0 0 95 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.3335 12.9272L47.3664 25.6258L69.1385 12.9272L46.9752 0.228516L25.3335 12.9272Z" fill="#376720" />
                                <path d="M50.8301 27.1039L72.8629 39.8026L94.6351 27.1039L72.4718 14.4053L50.8301 27.1039Z" fill="#376720" />
                                <path d="M0.672852 27.1342L22.7057 39.8329L44.4778 27.1342L22.3146 14.4355L0.672852 27.1342Z" fill="#376720" />
                                <path d="M26.168 41.311L48.2008 54.0096L69.973 41.311L47.8097 28.6123L26.168 41.311Z" fill="#376720" />
                            </svg>

                        </div>
                        <div>
                            <h4>חיסכון כללי</h4>
                            {total.toLocaleString("en-US")}&#x20AA;
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}