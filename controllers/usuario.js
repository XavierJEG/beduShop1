const User = require('../models/Usuario');
const { Op } = require('sequelize');

function crearUsuario(req, res) {
	var body = req.body;
	User.create(body)
	.then( user => res.status(200).send(user))
}

function obtenerUsuarios(req, res) {
	User.findAll()
	.then( users => res.status(200).send(users))
}

function modificarUsuario(req, res) {
	var body = req.body;
	var idP = req.params.id;
	Usuario.update( body, {
		where : {
			id: idP
		}
	})
	.then( usuario => res.status(200).send(usuario))
}

function eliminarUsuario(req, res) {
	var idP = req.params.id;
	Usuario.destroy({
		where : {
			id : idP
		}
	})
	.then(r => res.status(200).send("Se elimino el producto", idP))
}

module.exports = {
	crearUsuario,
	obtenerUsuarios,
	modificarUsuario,
	eliminarUsuario
}
