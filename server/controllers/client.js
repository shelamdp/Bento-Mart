const {Category, Ingredient, Item, User} = require("../models")

class ControllerClient {
    static async fetchMenu (req, res, next) {
        try {
            let limit = req.query.limit
            const menus = await Item.findAll({
              include: "Ingredients",
              order: [["id", "ASC"]],
              limit: limit
            })
            res.status(200).json(menus)
        } catch (error) {
            next(error)
        }
    }

    static async fetchCategory (req, res, next) {
        try {
            const categories = await Category.findAll()
            res.status(200).json(categories)
        } catch (error) {
            next(error)
        }
    }

    static async detailMenu (req, res, next) {
        try {
            const {id} = req.params
            const menu = await Item.findByPk(id, {include: ["Ingredients", "User"]})
            if(!menu) {
                throw {name: "NOTFOUND"}
            }
            res.status(200).json(menu)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ControllerClient