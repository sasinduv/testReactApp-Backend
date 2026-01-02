// const users = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 3, name: 'Charlie' }
// ];
const { response } = require('./app');
const User = require('./model');


const getAllUsers = (req, res, next) => {
    User.find()
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ message: error })
        });
};

const addUser = (req, res, next) => {
    const user = new User({
        id: req.body.id,
        name: req.body.name,
    });
    user.save()
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ message: error })
        });
}


const updateUser = (req, res, next) => {
    const { id, name } = req.body;
    User.updateOne({ id: id }, { $set: { name: name } })
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ message: error })
        });
}

const deleteUser = (req, res, next) => {
    const id = req.body.id;
    User.deleteOne({ id: id })
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ message: error })
        });

}
// const getUserById = (id, cb) => {
//     const user = users.find(user => user.id === id);
//     cb(user);
// };

exports.getAllUsers = getAllUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;


// exports.getUserById = getUserById;