import express from 'express'; // creo se importa para poder usarlo	 y hacer la constante router

/**importamos el controlador de pacientes y cada uno de sus metodos
 * vamosa a usar
 */
import {getAllPatients, getPatientById, createPatient, updatePatient, deletePatient } from '../Controllers/PacientesController.js'; 

const router = express.Router(); //Se usa para crear las rutas imaginarlo como un router fisico


//Estas seran las rutas de pacientes
router.post('/', createPatient);
router.get('/getAllPatients', getAllPatients);
router.get('/:id', getPatientById);
router.put('/:id', updatePatient);
router.delete('/:id', deletePatient);

export default router
