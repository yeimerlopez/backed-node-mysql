// importamos conexion a la base de datos
import conectarBD from "../configDB/db.js";

// importamos sequelize
import {DataTypes} from "sequelize";


const Pacientes = conectarBD.define('pacientes',{

    nombres: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false
    },
    edad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    diagnostico: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

export default Pacientes;
