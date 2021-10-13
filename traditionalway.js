/*TRADIIONAL METHOD*/

class User{
	constructor(name){
		this.name = name
	}
}

class UserBuilder{
	constructor(name){
		this.user = new User(name)
	}

	setAge(age){
		this.user.age = age
		return this
	}

	setPhone(phone){
		this.user.phone = phone
		return this
	}

	setAddress(address){
		this.user.address = address
		return this
	}

	build(){
		return this
	}
}


// let user = new UserBuilder('Arjun').build()
let user = new UserBuilder('Arjun').setAge(10).setPhone('9811223344').build()


console.log(user, "Traditional ---$$$$");


let userBob = new UserBuilder('Bob').setAge(20).build()


console.log(userBob, "user bob ---- $$$$");
