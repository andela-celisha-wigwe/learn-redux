// A reducertakes in the action and
// also takes in a copy of current state.

export default function comments(state =[], action) {
	console.log(state, action);
	return state;
}