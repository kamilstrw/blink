import TYPE from './Type'

epxort function login(user)
{
	return {
	type: TYPE.LOGIN,
		user
	}
}

export function logout()
{
	return {
		type: TYPE.LOGOUT
	}
	
}