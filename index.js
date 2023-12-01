import express from 'express';
const app = express();

const PORT = process.env.PORT || 8080;

const users = [
    {
        name: 'Mario',
        id: '1',
    },
    {
        name: 'Luigi',
        id: '2',
    },
    {
        name: 'Bowser',
        id: '3',
    },
];

app.get('/', (req, res) => {
    res.send('The server is running');
});

app.get('/users', (_, res) => {
    res.send(users);
});

app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === id);
    res.send(user);
});

app.listen(PORT, () => console.log(`Server running on: localhost:${PORT}`));
