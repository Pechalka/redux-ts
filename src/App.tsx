import React, { useCallback } from 'react';
import { connect } from 'react-redux'
import { increament, decriment } from './redux/counter'

interface TProps {
	counter: number
	increament: Function
	decriment: Function
}

const App: React.FC<TProps> = ({ counter, ...props }) => {
	const incClick = useCallback(() => {
		props.increament();
	}, [])

	const decClick = useCallback(() => {
		props.decriment();
	}, [])

  	return (
	    <div >
	      <div>
	      	counter: {counter}
	      </div>
	      <div>
	      	<button onClick={incClick}>+</button>
	      	<button onClick={decClick}>-</button>
	      </div>
	    </div>
  	);
}

export default connect(
	(state: any) => ({
		counter: state.counterReducer.counter
	}),
	{
		increament,
		decriment
	}
)(App);
