import express from 'express';   //1er paso importamos express
import cors from 'cors';
import conectarBD from './configDB/db.js';
import citasRoutes from './routes/Routers_citas.js';
import pacientesRoutes from './routes/Routers_pacientes.js'; // importamos las rutas para los pacientes

const app = express();

app.use(express.json());  //2do paso configuramos express
app.use(cors());
app.use('/citas', citasRoutes);
app.use('/pacientes', pacientesRoutes );


/**Aca se conecta a la base de datos mysql en sequelize */

try {
    await conectarBD.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


app.get('/', (req, res) => {
    res.send('Hello World! Citas');
})


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Server running on port 3000 , http://localhost:3000');
})

