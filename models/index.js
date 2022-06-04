const User = require("./User")
const Movie = require("./Movie")
const MovieUser = require("./MovieUser")

User.belongsToMany(Movie, {
    through: MovieUser,

    foreignKey: 'user_id'
});

Movie.belongsToMany(User, {
    through: MovieUser,
    foreignKey: 'movie_id'
})

MovieUser.belongsTo(User, {
    foreignKey: 'user_id'
})

MovieUser.belongsTo(Movie, {
    foreignKey: 'movie_id'
})

module.exports = { User, Movie, MovieUser };

