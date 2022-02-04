const mongoose = require('mongoose');

const Cliente = mongoose.model('Cliente',
  new mongoose.Schema({ nombre: String, apellidos: String })
);

const Articulo = mongoose.model('Articulo',
  new mongoose.Schema({ nombre: String, precio: Number })
);

const Animal = mongoose.model('Animal',
  new mongoose.Schema({ nombre: String, tipo: String })
);

const Persona = mongoose.model('Persona',
  new mongoose.Schema({ nombre: String, apellidos: String })
);

module.exports = {
  Cliente: Cliente,
  Articulo: Articulo,
  Animal: Animal,
  Persona: Persona
}

// Otra forma más corta:
// module.exports = {
//     Cliente,
//     Articulo
// }
