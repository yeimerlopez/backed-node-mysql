
//importamos el modelo
import Citas from "../models/Citas.js";

// Metodos o funciones CRUD

// Obtener todas las Citas

export const getAllCitas = async (req, res) => {
    
    try {

        const cita = await Citas.findAll();
        res.json(citas);
        
    } catch (error) {
        res.json({message: error.message})
    }
}

// Mostrar una Cita

export const getCita = async (req, res) => {

    try {
        const citas = await Citas.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(citas[0]);
    } catch (error) {
        res.json({message: error.message})
    }
}

// Crear una Cita
export const agregarCita = async (req, res) => {

    try {
        await Citas.create(req.body);
        res.json({message: "Cita Agregada"})
    } catch (error) {
        res.json({message: error.message})
    }
}

// Actualizar una Cita

export const modificarCita = async (req, res) => {
    try {
        await Citas.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({message: "Cita Actualizada"})
    } catch (error) {
        res.json({message: error.message})
    }
}

// Eliminar una Cita

export const eliminarCita = async (req, res) => {
    
    try {
        await Citas.destroy({
            where: {
                id: req.params.id
            }
        })   
        res.json({message: "Cita Eliminada"})     
    } catch (error) {
        res.json({message: error.message})
    }
}