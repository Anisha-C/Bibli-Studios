const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/connection")

class MovieUser extends Model {}

MovieUser.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            },
        },
        movie_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "movie",
                key: "id",
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "movie_user",
    }
)

module.exports = MovieUser
