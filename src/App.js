import React from 'react'

import './App.css'
import FetchSubscriptions from './FetchSubscriptions'
import FetchUserSubscription from './FetchUserSubscription'
import InputListener from './InputListener'
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
								.map(({ id }) => (
									<FetchUserSubscription
										key={id}
										subscriptionId={id}
										userId={value}
									>
										{({ hasSubscription }) => (
											JSON.stringify(hasSubscription)
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
