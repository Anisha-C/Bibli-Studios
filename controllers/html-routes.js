const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Movie } = require('../models');
const checkLoggedIn = require('../utils/checkLoggedIn');

router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    
    res.render('login');
});

router.get('/dashboard', checkLoggedIn, (req, res) => {
    Movie.findAll({
        attributes: [
            'name',
            'year',
            'genre'
            [sequelize.literal('SELECT COUNT(*) FROME movie_user WHERE movie.id = movie_user.movie_id'), 'like_count']
        ]
    }).then(movieQuery => {
        const movies = movieQuery.map(movie => movie.get({ plain: true }));
        res.render('dashboard', { movies, loggedIn: true });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/movie/:id', (req, res) => {
    Movie.findOne({
        where: {
            id: req.params.id
        },
        include: {
            model: User,
            attributes: { exclude: ['password'] }
        }
    }).then(movieData => {
        if (!movieData) {
            res.status(404).end();
            return;
        }

        const movie = movieData.get({ plain: true });
        res.render('single-movie', { movie, loggedIn: true });
    }).catch(err => {
        res.status(500).json(err);
    })
});

module.exports = router;
