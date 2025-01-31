// DataByRace.tsx
import { HomeIcon } from "@heroicons/react/24/outline";
import Divider from "../components/Divider";
import HeadedCard from "../components/HeadedCard";
import StackedBarChart from "../components/recharts/StackedBarChart";
import RechartsPie from "../components/recharts/RechartsPie";

export default function DataByRace() {
  const chartTabs = [
    <HomeIcon key="home-icon" className="size-6" />, "Educação e Trabalho", "Saúde e segurança",
  ];

  return (
    <div className="grid grid-cols-1 gap-8 pb-20 content">
      <ul className="inline-flex rounded-xl shadow">
        {chartTabs.map((tab, index) => (
          <button key={index} className="py-2 px-3 w-max text-sm font-medium border border-gray-200 bg-white shadow-sm hover:bg-gray-50">
            {tab}
          </button>
        ))}
      </ul>
      <Divider>
        <h2 className="w-max">Geral</h2>
      </Divider>
      <HeadedCard header="Responsável Familia" className="lg:col-span-2">
        <RechartsPie category="cor" />
      </HeadedCard>
    </div>
  );
}