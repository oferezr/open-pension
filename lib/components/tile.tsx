interface BoardCords {
  x: number,
  y: number
}

function convert_cordinated(row: number, column: number): BoardCords {
  // Base cordinates of the most right tile of each row
  const base_x = [0,1,1,2, 2, 3,3,4,4,5,5,6,6,7,7]
  const base_y = [0,0,-1,-1,-2,-2,-3,-3,-4,-4,-5,-5,-6,-6, -7,-7]
  // convertion function from tilted to aligned
  var x = base_x[row-1] + column-1;
  var y = base_y[row-1]+ column-1;
  // Normalizing the borad to the right starting tile
  x = x-4;
  y = y+2;
  return { x, y } as BoardCords;
}

function get_color(cords: BoardCords, borad: number[][]): string {
  const size = 3;
  if (cords.x >=0 && cords.x <= size && cords.y >=0 && cords.y <= size) {
    // Soil
    if (borad[cords.x][cords.y]==1){
    return "#CDA05D";
  }
  // Grouth
  if (borad[cords.x][cords.y]==2){
    return "#79A963";
  }
  }
  // Empty
  return "#9EDA82";
}

export function Tile(props: any) {
  const row = props.row;
  const column = props.column
  const borad = props.borad
  const b_cords = convert_cordinated(row, column);
  const color = get_color(b_cords, borad);
  return (
    <div className='tile' id={"("+row+","+column+")=>("+b_cords.x+","+b_cords.y+")"}>
      <svg width="141" height="72" viewBox="0 0 141 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M140.29 36.2005L70.1896 71.8505L0.0996094 36.2005L70.1896 0.560547L140.29 36.2005Z" fill={color} stroke="#b0f19173" />
      </svg>
    </div>

  )
}