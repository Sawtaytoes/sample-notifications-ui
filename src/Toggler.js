import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
	enabled: PropTypes.bool.isRequired,
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
}

const Toggler = ({
	enabled,
	label,
	onClick,
}) => (
	<span onClick={onClick}>
		{label}:
		{' '}
		{
			JSON
			.stringify(enabled)
		}
	</span>
)

Toggler
.propTypes = propTypes

export default Toggler
