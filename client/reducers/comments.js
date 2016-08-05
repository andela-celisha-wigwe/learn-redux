// A reducertakes in the action and
// also takes in a copy of current state.

function postComments(state =[], action) {
	switch (action.type) {
		case 'ADD_COMMENT' :
			// return the existing state with the new comment.
			return [...state, {
				user: action.author,
				text: action.comment
			}]
		case 'REMOVE_COMMENT' :
			return [
				// form the start to the one that we want to delete'
				...state.slice(0, action.i),
				// after the deleted one to the end
				...state.slice(action.i + 1)
			]
		default:
			return state;
	}
	return state;
}

export default function comments(state =[], action) {
	if (typeof action.postId !== 'undefined') {
		return {
			// take the comment state
			...state,
			// overwrite this post with a new one.
			[action.postId]: postComments(state[action.postId], action)
		}
	}
	return state;
}