const router = require("express").Router()
const { User, Movie } = require("../../models")
const bcrypt = require("bcrypt")

router.get("/", (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(userData => res.json(userData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

router.get("/:id", (req, res) => {
    User.findOne({
        attributes: { exclude: ["password"] },
        where: {
            id: req.params.id,
        },
        include: [
            {
                model: Movie,
            },
        ],
    })
        .then(userData => {
            if (!userData) {
                res.status(404).json({ message: "No user with this ID found." })
                return
            }

            res.json(userData)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

router.post("/login", (req, res) => {
    User.findOne({
        where: {
            email: req.body.email,
        },
    }).then(userData => {
        if (!userData) {
            res.status(400).json({ message: "No user with that username!" })
            return
        }
        

        const validPassword = bcrypt.compareSync(req.body.password, userData.password);

        if (!validPassword) {
            res.status(400).json({ message: "Incorrect password!" })
            return
        }

        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
        
            res.json({ user: userData, message: 'You are now logged in!' });
        });
    })
})

router.get("/logout", (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
          res.status(204).end();
        });
      }
      else {
        res.status(404).end();
      }
})

router.post("/signup", (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      })
        .then(userData => {
          req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.loggedIn = true;
      
            res.json(userData);
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
})

router.delete('/:id', (req, res) => {
    User.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(userData => {
        if (!userData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(userData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
module.exports = router
