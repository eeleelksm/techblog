const { User } = require('../models');

const userData = [
    {
        username: "eliza_thornberry",
        email: "eliza_t@gmail.com",
        password: "password1!"
    },
    {
        username: "keke_palmer",
        email: "keke_p@gmail.com",
        password: "password2!"
    },
    {
        username: "robyn_fenty",
        email: "robyn_f@gmail.com",
        password: "password3!"
    },
    {
        username: "viola_davis",
        email: "viola_d@gmail.com",
        password: "password4!"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;