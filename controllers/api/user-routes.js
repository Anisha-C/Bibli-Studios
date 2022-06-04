const router = require('express').Router();
const { User } = require('../../models');


router.get('/', (req, res) => {

});

router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Movie
            }
        ]
    }).then(userData => {
        if (!userData) {
            res.status(404).json({ message: 'No user with this ID found.'});
            return;
        }

        res.json(userData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {

});

router.post('/login', (req, res) => {

});

router.post('/logout', (req, res) => {

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;
