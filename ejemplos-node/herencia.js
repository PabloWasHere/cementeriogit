var usuario = function(obj){
	return{nombre: obj.nombre || 'seba'
			, apellido: obj.apellido || 'lopez'
			, email:obj.email || 'test@test.com'
			, name: function(){return this.nombre+' '+this.apellido}
			}
}

var agencia = function(obj){
	obj = obj || {}
	var agencia = usuario(obj)
	agencia.customers = obj.customers || 0
	agencia.esAgencia = true
	return agencia
}

var a = {nombre: "seba"
		, apellido: "lopez"
		, email: "sarasa@gmail.com"
	}

var u = new usuario(a);

console.log(u.name());


console.log(agencia(u));