/** @format */

import PropTypes from 'prop-types'

const HeadedCard = ({ className, icon, header, children }) => {
	return (
		<div className={`grid bg-white border shadow rounded-lg ' ${className}`}>
			<div className='flex flex-row gap-4 bg-gradient-to-br from-accent-100 to-accent-100 border-b  border-accent-400 rounded-t-xl py-3 px-4 md:py-4 md:px-5 '>
				{icon}
				<h3 className='text-base font-sans text-primary-600 dark:text-primary-500'>
					{header}
				</h3>
			</div>
			<div className='p-4 md:p-5 min-h-[400px]'>{children}</div>
		</div>
	)
}

HeadedCard.propTypes = {
	icon: PropTypes.any,
	header: PropTypes.any,
	className: PropTypes.any,
	children: PropTypes.node,
}

export default HeadedCard
