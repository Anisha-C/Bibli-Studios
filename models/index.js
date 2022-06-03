const User = require("./User")
const Movie = require("./Movie")
const MovieUser = require("./MovieUser")

User.belongsToMany(Movie, {
    through: MovieUser,
    as: "owned_movies",
    foreignKey: "user_id",
})

Movie.belongsToMany(User, {
    through: MovieUser,
    as: "owned_movies",
    foreignKey: "movie_id",
})

module.exports = { User, Movie }
