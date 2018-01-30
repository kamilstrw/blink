import Type from './type'

export default function(state= [], action)
{
	let _state = state;
	switch(action.type)
	{
		case Type.ADD:
			_state.push(action.payload);
			return _state;
		default: return state;
	}
}
