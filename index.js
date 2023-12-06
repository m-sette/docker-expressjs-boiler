import express from 'express';
import userController from './controllers/usersController.js';
import homeController from "./controllers/homeController.js";
const app = express();

const PORT = process.env.PORT || 8080;

app.use(homeController);
app.use(userController);

app.listen(PORT, () => console.log(`Server running on: localhost:${PORT}`));
