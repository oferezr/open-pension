interface BoardCords {
  x: number,
  y: number
}

function convert_cordinated(row: number, column: number): BoardCords {
  // Base cordinates of the most right tile of each row
  const base_x = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7,8,8,9,9,10,10]
  const base_y = [0, 0, -1, -1, -2, -2, -3, -3, -4, -4, -5, -5, -6, -6, -7, -7,-8,-8,-9,-9]
  // convertion function from tilted to aligned
  var x = base_x[row - 1] + column - 1;
  var y = base_y[row - 1] + column - 1;
  // Normalizing the borad to the right starting tile
  x = x - 7;
  y = y + 2;
  return { x, y } as BoardCords;
}

function get_color(cords: BoardCords, borad: number[][]): string {
  const size = 3;
  if (cords.x >= 0 && cords.x <= size && cords.y >= 0 && cords.y <= size) {
    // Soil
    if (borad[cords.x][cords.y] == 1) {
      return "#CDA05D";
    }
    // Grouth
    if (borad[cords.x][cords.y] == 2) {
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
  var inner = (<svg width="100" height="50" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 24.9965L49.9964 50L0 24.9965L49.9964 0L100 24.9965Z" fill={color} stroke="#b0f19173" />
  </svg>);
  if (color == "#CDA05D") {
    var inner = (<svg width="100" height="50" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 24.9965L49.9964 50L0 24.9965L49.9964 0L100 24.9965Z" fill="#9EDA82" />
      <path d="M93.3352 23.7205V26.7238C93.3352 26.9482 93.2131 27.1381 93.0212 27.2416C93.0212 27.2503 93.0125 27.2503 93.0125 27.2503L49.922 48.9384C49.922 48.9384 49.8958 48.947 49.8871 48.9556C49.7214 49.0247 49.5557 49.016 49.3987 48.9384H49.39L6.28203 27.2503C6.28203 27.2503 6.27331 27.2503 6.27331 27.2416C6.08144 27.1381 5.95935 26.9482 5.95935 26.7238V23.7205C5.95935 23.6255 6.0204 23.5824 6.05528 23.5565C6.07272 23.5392 6.11633 23.522 6.15993 23.522C6.17738 23.522 6.22098 23.5306 6.24714 23.5479L49.1196 45.1237C49.2068 45.1583 49.2853 45.2014 49.3813 45.2187C49.4685 45.2446 49.5557 45.2532 49.6516 45.2532C49.7388 45.2532 49.826 45.2446 49.922 45.2187C50.0092 45.2014 50.0964 45.1583 50.1836 45.1237L93.0561 23.5479C93.1433 23.4961 93.2131 23.5306 93.248 23.5565C93.2828 23.5737 93.3439 23.6255 93.3439 23.7205H93.3352Z" fill="#CDA05D" />
      <path d="M93.4398 21.9082L92.9601 21.6752L50.3493 0.220074L50.1487 0.11651C49.8347 -0.0388366 49.4597 -0.0388366 49.1545 0.11651L48.9626 0.211444C48.9626 0.211444 48.9539 0.220074 48.9452 0.220074L6.34304 21.6665L5.84594 21.9168C5.3314 22.1843 5 22.7108 5 23.289V26.9742C5 27.3971 5.23547 27.8027 5.63663 27.9926L5.77617 28.0703C5.77617 28.0703 5.81978 28.0961 5.84594 28.1048L48.9365 49.7929C48.9365 49.7929 48.9713 49.8101 48.9975 49.8101L49.1196 49.8792C49.2853 49.9655 49.4684 50 49.6429 50C49.8173 50 50.0004 49.9655 50.1661 49.8792L50.3318 49.8015H50.3405L93.4311 28.1048C93.4398 28.0961 93.4485 28.0961 93.4572 28.0875L93.6491 27.9926C94.0415 27.8027 94.2857 27.4057 94.2857 26.9742V23.289C94.2857 22.7108 93.963 22.1757 93.4311 21.9168L93.4398 21.9082ZM6.77037 22.5123L49.3812 1.07448C49.4597 1.03133 49.5556 1.00544 49.6516 1.00544C49.7475 1.00544 49.8347 1.0227 49.9219 1.07448L77.6635 15.0298L92.5241 22.5123C92.5938 22.5382 92.6026 22.5986 92.6026 22.6331C92.6026 22.6676 92.5938 22.7194 92.5241 22.7539L49.7475 44.2781C49.7475 44.2781 49.7301 44.2867 49.7213 44.2867C49.6865 44.304 49.6341 44.304 49.5993 44.2867C49.5905 44.2867 49.5818 44.2781 49.5731 44.2781L6.77037 22.7539C6.7006 22.7194 6.69188 22.6676 6.69188 22.6331C6.69188 22.5986 6.7006 22.5382 6.77037 22.5123ZM93.3351 26.7239C93.3351 26.9483 93.213 27.1382 93.0212 27.2417C93.0212 27.2504 93.0124 27.2504 93.0124 27.2504L49.9219 48.9385C49.9219 48.9385 49.8958 48.9471 49.887 48.9557C49.7213 49.0248 49.5556 49.0161 49.3987 48.9385H49.3899L6.28199 27.2504C6.28199 27.2504 6.27327 27.2504 6.27327 27.2417C6.08141 27.1382 5.95931 26.9483 5.95931 26.7239V23.7205C5.95931 23.6256 6.02036 23.5825 6.05524 23.5566C6.07268 23.5393 6.11629 23.522 6.15989 23.522C6.17734 23.522 6.22094 23.5307 6.2471 23.5479L49.1196 45.1238C49.2068 45.1584 49.2853 45.2015 49.3812 45.2188C49.4684 45.2447 49.5556 45.2533 49.6516 45.2533C49.7388 45.2533 49.826 45.2447 49.9219 45.2188C50.0091 45.2015 50.0964 45.1584 50.1836 45.1238L93.0561 23.5479C93.1433 23.4962 93.213 23.5307 93.2479 23.5566C93.2828 23.5738 93.3438 23.6256 93.3438 23.7205V26.7239H93.3351Z" fill="#7D0101" />
      <path d="M92.585 22.6331C92.585 22.6331 92.5763 22.7194 92.5065 22.7539L49.73 44.278C49.73 44.278 49.7125 44.2866 49.7038 44.2866C49.6689 44.3039 49.6166 44.3039 49.5817 44.2866C49.573 44.2866 49.5643 44.278 49.5556 44.278L6.77026 22.7539C6.70049 22.7194 6.69177 22.6676 6.69177 22.6331C6.69177 22.5985 6.70049 22.5381 6.77026 22.5122L49.3811 1.07441C49.4596 1.03126 49.5556 1.00537 49.6515 1.00537C49.7474 1.00537 49.8346 1.02263 49.9218 1.07441L77.6634 15.0297L92.524 22.5122C92.5938 22.5381 92.6025 22.5985 92.6025 22.6331H92.585Z" fill="#CDA05D" />
    </svg>
    );
  }
  if (color=="#79A963"){
    var inner = (<svg width="100" height="50" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 24.9965L49.9964 50L0 24.9965L49.9964 0L100 24.9965Z" fill="#9EDA82"/>
<path d="M93.3352 23.7205V26.7238C93.3352 26.9482 93.2131 27.1381 93.0212 27.2416C93.0212 27.2503 93.0125 27.2503 93.0125 27.2503L49.922 48.9384C49.922 48.9384 49.8958 48.947 49.8871 48.9556C49.7214 49.0247 49.5557 49.016 49.3987 48.9384H49.39L6.28203 27.2503C6.28203 27.2503 6.27331 27.2503 6.27331 27.2416C6.08144 27.1381 5.95935 26.9482 5.95935 26.7238V23.7205C5.95935 23.6255 6.0204 23.5824 6.05528 23.5565C6.07272 23.5392 6.11633 23.522 6.15993 23.522C6.17738 23.522 6.22098 23.5306 6.24714 23.5479L49.1196 45.1237C49.2068 45.1583 49.2853 45.2014 49.3813 45.2187C49.4685 45.2446 49.5557 45.2532 49.6516 45.2532C49.7388 45.2532 49.826 45.2446 49.922 45.2187C50.0092 45.2014 50.0964 45.1583 50.1836 45.1237L93.0561 23.5479C93.1433 23.4961 93.2131 23.5306 93.248 23.5565C93.2828 23.5737 93.3439 23.6255 93.3439 23.7205H93.3352Z" fill="#5DCD69"/>
<path d="M93.4398 21.9082L92.9601 21.6752L50.3493 0.220074L50.1487 0.11651C49.8347 -0.0388366 49.4597 -0.0388366 49.1545 0.11651L48.9626 0.211444C48.9626 0.211444 48.9539 0.220074 48.9452 0.220074L6.34304 21.6665L5.84594 21.9168C5.3314 22.1843 5 22.7108 5 23.289V26.9742C5 27.3971 5.23547 27.8027 5.63663 27.9926L5.77617 28.0703C5.77617 28.0703 5.81978 28.0961 5.84594 28.1048L48.9365 49.7929C48.9365 49.7929 48.9713 49.8101 48.9975 49.8101L49.1196 49.8792C49.2853 49.9655 49.4684 50 49.6429 50C49.8173 50 50.0004 49.9655 50.1661 49.8792L50.3318 49.8015H50.3405L93.4311 28.1048C93.4398 28.0961 93.4485 28.0961 93.4572 28.0875L93.6491 27.9926C94.0415 27.8027 94.2857 27.4057 94.2857 26.9742V23.289C94.2857 22.7108 93.963 22.1757 93.4311 21.9168L93.4398 21.9082ZM6.77037 22.5123L49.3812 1.07448C49.4597 1.03133 49.5556 1.00544 49.6516 1.00544C49.7475 1.00544 49.8347 1.0227 49.9219 1.07448L77.6635 15.0298L92.5241 22.5123C92.5938 22.5382 92.6026 22.5986 92.6026 22.6331C92.6026 22.6676 92.5938 22.7194 92.5241 22.7539L49.7475 44.2781C49.7475 44.2781 49.7301 44.2867 49.7213 44.2867C49.6865 44.304 49.6341 44.304 49.5993 44.2867C49.5905 44.2867 49.5818 44.2781 49.5731 44.2781L6.77037 22.7539C6.7006 22.7194 6.69188 22.6676 6.69188 22.6331C6.69188 22.5986 6.7006 22.5382 6.77037 22.5123ZM93.3351 26.7239C93.3351 26.9483 93.213 27.1382 93.0212 27.2417C93.0212 27.2504 93.0124 27.2504 93.0124 27.2504L49.9219 48.9385C49.9219 48.9385 49.8958 48.9471 49.887 48.9557C49.7213 49.0248 49.5556 49.0161 49.3987 48.9385H49.3899L6.28199 27.2504C6.28199 27.2504 6.27327 27.2504 6.27327 27.2417C6.08141 27.1382 5.95931 26.9483 5.95931 26.7239V23.7205C5.95931 23.6256 6.02036 23.5825 6.05524 23.5566C6.07268 23.5393 6.11629 23.522 6.15989 23.522C6.17734 23.522 6.22094 23.5307 6.2471 23.5479L49.1196 45.1238C49.2068 45.1584 49.2853 45.2015 49.3812 45.2188C49.4684 45.2447 49.5556 45.2533 49.6516 45.2533C49.7388 45.2533 49.826 45.2447 49.9219 45.2188C50.0091 45.2015 50.0964 45.1584 50.1836 45.1238L93.0561 23.5479C93.1433 23.4962 93.213 23.5307 93.2479 23.5566C93.2828 23.5738 93.3438 23.6256 93.3438 23.7205V26.7239H93.3351Z" fill="#7D0101"/>
<path d="M92.585 22.6331C92.585 22.6331 92.5763 22.7194 92.5065 22.7539L49.73 44.278C49.73 44.278 49.7125 44.2866 49.7038 44.2866C49.6689 44.3039 49.6166 44.3039 49.5817 44.2866C49.573 44.2866 49.5643 44.278 49.5556 44.278L6.77026 22.7539C6.70049 22.7194 6.69177 22.6676 6.69177 22.6331C6.69177 22.5985 6.70049 22.5381 6.77026 22.5122L49.3811 1.07441C49.4596 1.03126 49.5556 1.00537 49.6515 1.00537C49.7474 1.00537 49.8346 1.02263 49.9218 1.07441L77.6634 15.0297L92.524 22.5122C92.5938 22.5381 92.6025 22.5985 92.6025 22.6331H92.585Z" fill="#5DCD69"/>
</svg>);

  }
  return (
    <div className='tile' id={"(" + row + "," + column + ")=>(" + b_cords.x + "," + b_cords.y + ")"}>
      {inner}

    </div>

  )
}