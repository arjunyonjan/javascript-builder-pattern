
/* Builder Pattern */

//way of dyanmically building of object with required properties, methods //way of generating

/*builder, complex object, many many moving parts*/
/*clean up complex constructor*/

class Address {
	constructor(zip,street){
		this.zip=zip
		this.street=street
	}
}

/*default values*/
class User{
	constructor(name, {age,phone='9800000000',address} ={}){
		this.name = name
		this.age = age
		this.phone = phone
		this.address = address
	}
}

/*build object*/
let user = new User('Arjun', {age:10,phone:'9800112233', address: new Address('44600','Mahankal-Tinchuli')})

console.log(user, "$$$$");


