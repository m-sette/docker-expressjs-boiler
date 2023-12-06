import express from 'express';
import userController from './controllers/usersController.js';
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('The server is running');
});

app.use(userController);

app.listen(PORT, () => console.log(`Server running on: localhost:${PORT}`));
