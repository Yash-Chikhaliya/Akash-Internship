const router = require('express').Router();
const user = require('../models/user');

router.route('/').get( async (req, res) => {
    user.find()
        .then(users => { res.json (users) })
        .catch((err) => { res.status(400).json('Error: ' + err) });
});


router.route('/add').post( async (req, res) => {    

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new user({
        firstName,
        lastName,
        email, 
        password
    });

    newUser.save()
        .then(() => { res.json('user added!') })
        .catch(err => { res.status(400).json('Error: ' + err) });

        
});

router.route('/update/:id').post( async (req, res) => {
    user.findByIdAndUpdate(req.params.id)
        .then((user) => {
            user.firstName= req.body.firstName;
            user.lastName= req.body.lastName;
            user.email= req.body.email;
            user.password= req.body.password;

            user.save()
            .then(() => { res.json('user data updated ') })
            .catch((err) => { res.status(400).json('Error: ' + err)});
        });
});

router.route('/:id').delete( async (req, res) => {
    user.findByIdAndRemove(req.params.id)
        .then(user => { res.json (user) })
        .catch((err) => { res.status(400).json('Error: ' + err) });
});

module.exports = router;

