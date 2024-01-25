import { BudgetChart } from './components/charts';

interface RawDataRow {
  code: string;
  parent: string;
  func_cls_title_1: string[];
  func_cls_title_2: string[];
  net_allocated: number;
}

interface RawData {
  rows: RawDataRow[];
}

const dataQuery = encodeURIComponent("SELECT code, parent, func_cls_title_1, func_cls_title_2, net_allocated FROM raw_budget WHERE code LIKE 'C8%' AND length(code)=4 AND year=2023");
const dataEndpoint = `https://next.obudget.org/api/query?query=${dataQuery}`;

async function getRawData(): Promise<RawData> {
  const res = await fetch(dataEndpoint);
  return res.json();
}

async function getDataForChart() {
  const rawData = await getRawData();
  const data = rawData.rows.map(
    (item: RawDataRow) => {
      return {
        name: item.func_cls_title_2[0],
        code: item.code,
        amount: item.net_allocated,
      }
    }
  );
  return data;
}

export default async function Viz() {

  const data = await getDataForChart();

  return (
    <div className="content">
      <div className="demo-notes padding-1">
        <p>
          <strong>What is happening in this example?</strong>
        </p>
        <ul>
          <li>We are getting data from a publicly accessible API.</li>
          <li>When the data is loaded, we transform it into a shape our chart expects.</li>
          <li>We pass the transformed data into the chart so it can render to the UI.</li>
          <li>We created a reusable custom chart component instead of inlining all our chart code here</li>
          <li>The charting library we are using has lots of chart types, see https://recharts.org/en-US</li>
        </ul>
      </div>
      <h1>Israel&apos;s 2023 Budget - Income</h1>
      <div>
        <BudgetChart data={data} xKey="name" yKey="amount" />
      </div>
    </div>
  )
}
