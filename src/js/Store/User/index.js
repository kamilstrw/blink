import TYPE from './type'

export default function(state = {}, action)
{
	switch (action.type)
	{
		case TYPE.LOGIN:
			return action.user;
		default : return state;
	}
}