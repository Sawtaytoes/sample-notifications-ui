import PropTypes from 'prop-types'
import { Component, createElement } from 'react'

const propTypes = {
	children: PropTypes.func.isRequired,
}

class FetchSubscriptions extends Component {
	state = { subscriptions: [] }

	componentDidMount() {
		this.fetchData()
	}

	fetchData() {
		fetch(
			'http://localhost:3001'
			.concat('/subscriptions')
		)
		.then(response => (
			response
			.json()
		))
		.then(subscriptions => (
			this.setState(() => ({
				subscriptions,
			}))
		))
	}

	render() {
		const { children } = this.props

		return (
			createElement(
				children,
				this.state,
			)
		)
	}
}

FetchSubscriptions
.propTypes = propTypes

export default FetchSubscriptions
