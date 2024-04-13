import Pacientes from '../models/Pacientes.js';


/**
 * funcion que me permite obtener todas las Pacientes
 * @param {*} req 
 * @param {*} res 
 */

export const getAllPatients = async (req, res) => {
    
    try {

        const pacientes = await Pacientes.findAll();
        res.json(pacientes);
        
    } catch (error) {
        res.json({message: error.message})
    }
}


/**
 * Funcion que me permite obtener una Paciente por su id
 * @param {*} req recibe el id en la ruta
 * @param {*} res devuelve un objeto json con los datos del paciente
 */

export const getPatientById = async (req, res) => {

    try {
        const paciente = await Pacientes.findAll({
            where: {
                id: req.params.id
            }
        });
        if (paciente.length === 0) {
            return res.status(404).json({message: `El paciente con id ${req.params.id} no existe`})
        } else {
            res.json(paciente[0]);
        }
    } catch (error) {
        res.json({message: error.message})
    }
}

/**
 * funcion que me permite crear un nuevo paciente
 * @param {*} req 
 * @param {*} res 
 */
export const createPatient = async (req, res) => {

    try {
        let nombre = req.body.nombres;
        await Pacientes.create(req.body);
        res.json({message: `Se creo el registro del paciente ${nombre} exitosamente`})
    } catch (error) {
        res.json({message: error.message})
    }
}

/**
 * Actualizar un paciente por id
 * @param {*} req 
 * @param {*} res 
 */

export const updatePatient = async (req, res) => {
    try {
        await Pacientes.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({message: `Paciente con id ${req.params.id} actualizado exitosamente`})
    } catch (error) {
        res.json({message: error.message})
    }
}

/**
 * Funcion para eliminar un paciente por su id
 * @param {*} req  recibe el id en la ruta
 * @param {*} res 
 */

export const deletePatient = async (req, res) => {
    
    try {

        let pacienteExiste =await Pacientes.findAll({
            where: {
                id: req.params.id
            }});

        if (pacienteExiste.length === 0) {
            return res.status(404).json({message: `El paciente que intenta eliminar no existe`})
        } else {
            
            await Pacientes.destroy({
                where: {
                    id: req.params.id
                }
            })   
            res.json({message: `Paciente con id ${req.params.id} eliminado exitosamente`})  
        }    
    } catch (error) {
        res.json({message: error.message})
    }
}