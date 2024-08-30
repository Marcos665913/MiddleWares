// Middlewares
var mensaje = (req, res, next) => {
    var fecha = new Date().toLocaleDateString();
    var hora = new Date().toLocaleTimeString();
    console.log("La fecha del dia de hoy es " + fecha + ", y la hora es " + hora);
    next();
};
var saludo = (req, res, next) => {
    console.log("Buenos dias, ¿En que te podemos ayudar hoy?");
    next();
};

module.exports = { saludo, mensaje };