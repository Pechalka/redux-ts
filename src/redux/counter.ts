import { action, getType, ActionType, createAction } from 'typesafe-actions';

interface TState {
	counter: number
}

const initState: TState = {
	counter: 1
}



const increamentAction = createAction('INCREMENT', (by: number = 1) => ({ by }))();


const decrimentAction = createAction('DECRIMENT', (by: number = 1) => ({ by }))();

const allActions = {
	increamentAction,
	decrimentAction,
}

type Actions = ActionType<typeof allActions>;

export const reducer = (state: TState = initState, action: Actions): TState => {
	switch(action.type) {
		case getType(increamentAction): {
			return { counter: state.counter + action.payload.by }
		}
		
		case getType(decrimentAction): {
			return { counter: state.counter - action.payload.by }
		}

		default:
			return state;
	}
	return state
}


export const increament = () => (dispatch: any) => {
	dispatch(increamentAction())
}

export const decriment = () => (dispatch: any) => {
	dispatch(decrimentAction(2))
}