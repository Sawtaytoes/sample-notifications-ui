import React from 'react'

import './App.css'
import FetchSubscriptions from './FetchSubscriptions'
import FetchUserSubscription from './FetchUserSubscription'
import InputListener from './InputListener'
import Toggler from './Toggler'
// import UserSubscriptions from './UserSubscriptions'

const App = () => (
	<div className="App">
		<header className="App-header">
			Enter UserID:
			<InputListener>
				{({ value }) => (
					value
					? (
						<FetchSubscriptions>
							{({ subscriptions }) => (
								subscriptions
								.map(({
									id,
									name,
								}) => (
									<FetchUserSubscription
										key={id}
										subscriptionId={id}
										userId={value}
									>
										{({
											hasSubscription,
											setSubscription,
										}) => (
											typeof hasSubscription === 'boolean'
											? (
												<div>
													<Toggler
														label={name}
														enabled={hasSubscription}
														onClick={setSubscription}
													/>
												</div>
											)
											: null
										)}
									</FetchUserSubscription>
								))
							)}
						</FetchSubscriptions>
					)
					: null
				)}
			</InputListener>
		</header>
	</div>
)

export default App
