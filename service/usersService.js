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

const getUsers = () => {
    return users;
};

const getUser = (id) => {
    const user = users.find((user) => user.id === id);
    return user || {};
};

export { getUser, getUsers };
