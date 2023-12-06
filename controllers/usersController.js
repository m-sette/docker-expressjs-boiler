import express from 'express';
import { getUser, getUsers } from '../service/usersService.js';
const router = express.Router();

router.get('/users/', (_, res) => {
    const users = getUsers();
    res.send(users);
});

router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const user = getUser(id);
    res.send(user);
});

export default router;
