import Type from './type'

export function SaveImage(payload)
{
	return {
		type: Type.ADD,
		payload
	}
}