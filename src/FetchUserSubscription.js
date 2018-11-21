import PropTypes from 'prop-types'
import { Component, createElement } from 'react'

const propTypes = {
	children: PropTypes.func.isRequired,
	subscriptionId: PropTypes.string.isRequired,
	userId: PropTypes.string.isRequired,
}

class FetchUserSubscription extends Component {
	state = { hasSubscription: [] }

	componentDidMount() {
		this.fetchData()
	}

	fetchData() {
		const {
			subscriptionId,
			userId,
		} = this.props

		fetch(
			(
				'http://localhost:3001'
				.concat('/users')
				.concat('/subscriptions')
				.concat(`/${subscriptionId}`)
			),
			{
				headers: {
					'user-id': userId,
				},
			}
		)
		.then(response => (
			response
			.json()
		))
		.then(subscription => (
			subscription
			.length > 0
		))
		.then(hasSubscription => (
			this.setState(() => ({
				hasSubscription,
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

FetchUserSubscription
.propTypes = propTypes

export default FetchUserSubscription
