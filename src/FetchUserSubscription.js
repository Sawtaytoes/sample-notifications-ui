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

	fetchData = () => {
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

	setSubscription = () => {
		const {
			subscriptionId,
			userId,
		} = this.props

		const { hasSubscription } = this.state

		const promise = (
			hasSubscription
			? (
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
						method: 'DELETE',
					}
				)
			)
			: (
				fetch(
					(
						'http://localhost:3001'
						.concat('/users')
						.concat('/subscriptions')
					),
					{
						body: (
							JSON
							.stringify({
								subscriptionId,
							})
						),
						headers: {
							'Content-Type': 'application/json',
							'user-id': userId,
						},
						method: 'POST',
					}
				)
			)
		)

		promise
		.then(this.fetchData)
	}

	render() {
		const { children } = this.props

		return (
			createElement(
				children,
				{
					...this.state,
					setSubscription: this.setSubscription,
				}
			)
		)
	}
}

FetchUserSubscription
.propTypes = propTypes

export default FetchUserSubscription
