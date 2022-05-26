const Producto = require('../models/Producto');
const { Op } = require('sequelize');

function crearProducto(req, res) {
	var body = req.body;
	Producto.create(body)
	.then( producto => res.status(200).send(producto))
}

function obtenerProductos(req, res) {
	Producto.findAll()
	.then( productos => res.status(200).send(productos))
}

function modificarProducto(req, res) {
	var body = req.body;
	var idP = req.params.id;
	Producto.update( body, {
		where : {
			id: idP
		}
	})
	.then( producto => res.status(200).send(producto))
}

function eliminarProducto(req, res) {
	var idP = req.params.id;
	Producto.destroy({
		where : {
			id : idP
		}
	})
	.then(r => res.status(200).send("Se elimino el producto", idP))
}

module.exports = {
	crearProducto,
	obtenerProductos,
	modificarProducto,
	eliminarProducto
}
