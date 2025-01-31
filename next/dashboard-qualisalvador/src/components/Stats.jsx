/** @format */

import PropTypes from "prop-types";

const AppStats = ({ icon, title, value, unit, date, className }) => {
	return (
		<div
			className={`grid md:col-span-2 xl:col-span-1 w-full h-[120px] grid-cols-4 p-4 items-center overflow-hidden border shadow-lg rounded-xl ${
				className || "bg-gradient-to-b from-primary-400 to-primary-500"
			}`}
		>
			<div className="grid col-span-1 justify-center items-center size-[46px] bg-primary-300 text-primary-50 rounded-full *:size-6">
				{icon}
			</div>
			<div className="grid col-span-3 grid-rows-3 h-[80%] *:text-primary-50 *:leading-none">
				<p>{title}</p>
				<div className="flex gap-2 items-baseline">
					<h3 className="text-4xl">{value}</h3>
					<p>{unit}</p>
				</div>
				<p>{date}</p>
			</div>
		</div>
	);
};

AppStats.propTypes = {
	icon: PropTypes.any,
	className: PropTypes.any,
	title: PropTypes.any,
	value: PropTypes.any,
	unit: PropTypes.any,
	date: PropTypes.any,
};

export default AppStats;
