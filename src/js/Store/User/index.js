import TYPE from './type'
import User from "Classes/User"

export default function(state = {}, action)
{
	switch (action.type)
	{
		case TYPE.LOGIN:
			return action.user;
		default : return state;
	}
}