// A reducertakes in the action and
// also takes in a copy of current state.

export default function posts(state =[], action) {
	// state[action.i].likes++; // this is not the best because redux and react encourages the use of pure functions.
	switch (action.type) {
		case 'INCREMENT_LIKES' :
			// RETURN THE updated state.
			const i = action.index
			return [
				...state.slice(0, i), // before the one that we are updating.
				{...state[i], likes:state[i].likes + 1},
				...state.slice(i + 1 ), // after the one that we are updating.
			]
		default :
			return state;
	}
	return state;
}