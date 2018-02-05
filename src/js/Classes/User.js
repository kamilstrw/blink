export default class User
{
	constructor()
	{
		this.name = '';
		this.avatar = null;
		this.age = null;
		this.info = '';
		this.images = [];
	}

	set(key, value)
	{
		this[key] = value;
	}
	get(key)
	{
		return this[key];
	}
	validate(key)
	{
		switch (key)
		{
			case 'name':
			let regexp = /^[a-zA-Z ]{2,30}$/;
				return regexp.test(this.name);
			case 'age':
				return (typeof(parseInt(this.age)) == 'number' && parseInt(this.age) > 0);
			default: return false;
		}
	}

}