// GeneralData.tsx
import Stats from "../components/Stats";
import { MapIcon, HomeIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/outline";
import HeadedCard from "../components/HeadedCard";
import RechartsPie from "../components/recharts/RechartsPie";
import { genderPie } from "../data/general";

export default function GeneralData() {
  return (
    <div>
      <div className="grid container md:grid-cols-2 lg:grid-cols-4">
        <Stats icon={<UsersIcon />} title="População" value="4.986" unit="hab" date={2022} />
        <Stats icon={<HomeIcon />} title="Domícilios" value="2.433" unit="hab" date={2022} className="bg-gradient-to-b from-primary-300 to-primary-400" />
        <Stats icon={<MapIcon />} title="Área" value="133.992,33" unit="m2" date={2022} className="bg-gradient-to-b from-amber-200 to-amber-300" />
        <Stats icon={<MapPinIcon />} title="Densidade" value="372,11" unit="hab/ha" date={2022} className="bg-gradient-to-b from-yellow-200 to-yellow-100" />
      </div>
      <HeadedCard>
        <RechartsPie data={genderPie} />
      </HeadedCard>
    </div>
  );
}
