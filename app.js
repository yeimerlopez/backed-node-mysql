import express from 'express';
import cors from 'cors';
import conectarBD from './configDB/db.js';
import citasRoutes from './routes/Routers_citas.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/citas', citasRoutes);



try {
    await conectarBD.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


app.get('/', (req, res) => {
    res.send('Hello World!');
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Server running on port 3000 , http://localhost:3000');
})

