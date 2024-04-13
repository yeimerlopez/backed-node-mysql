
import { Sequelize } from "sequelize";

/**
 * Funcion que me permite conectarme a la base de datos
 * https://sequelize.org/docs/v6/getting-started/
 * Segun creo se crea una instancia de sequelize y se conecta
 * En este caso lleva 5 parametros 
 * 1. Nombre de la base de datos
 * 2. Nombre de usuario
 * 3. Contraseña
 * 4. Host
 * 5. Dialect (mysql)  que  es el tipo de base de datos
 */

const conectarBD = new Sequelize('database_citas','root','',{
    host: 'localhost',
    dialect: 'mysql'
})

// exportamos para que pueda usarlo en otro archivo
export default conectarBD;

