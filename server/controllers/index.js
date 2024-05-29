const { signToken } = require("../helpers/jwt")
const {Category, Ingredient, Item, User, sequelize} = require("../models")
const bcrypt = require("bcryptjs")

class Controller {
    static async login(req, res, next) {
        try {
            const {email, password} = req.body
            if(!email) {
                throw {name:"BADREQUEST", message: "Email is required"}
            }
            if(!password) {
                throw {name:"BADREQUEST", message: "Password is required"}
            }

            const data = await User.findOne({where: {email}})
            if(!data) {
                throw {name: "FAILEDLOGIN"}
            }

            const isMatch = bcrypt.compareSync(password, data.password)
            if(!isMatch) {
                throw {name: "FAILEDLOGIN"}
            }

            const access_token = signToken({id: data.id})

            res.status(200).json({access_token})
        } catch (error) {
            next(error)
        }
    }

    static async regsiterNewAdmin(req, res, next) {
        try {
            const {name, email, password, phoneNumber, address} = req.body
            const data = await User.create({name, email, password, phoneNumber, address})
            res.status(201).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async fetchMenu(req, res, next) {
        try {
            const menus = await Item.findAll({include: ["Ingredients", "User", "Category"], order: [["id", "ASC"]]})
            res.status(200).json(menus)
        } catch (error) {
            next(error)
        }
    }

    static async fetchCategory(req, res, next) {
        try {
            const categories = await Category.findAll()
            res.status(200).json(categories)
        } catch (error) {
            next(error)
        }
    }

    static async addMenu(req, res, next) {
        const t = await sequelize.transaction()
        const { name, description, price, imgUrl, categoryId, ingredients } = req.body
        const authorId = req.user.id
      
      
        try {
          const newMenu = await Item.create(
            { name, description, price, imgUrl, authorId, categoryId },
            { transaction: t }
          )
      
          const dataIngredients = ingredients.map((name) => ({
            name,
            itemId: newMenu.id
          }))
      
          const newIngredients = await Ingredient.bulkCreate(dataIngredients, {
            transaction: t
          })
      
          await t.commit()
      
          res.status(201).json({ newMenu, newIngredients })
        } catch (error) {
          await t.rollback()
          next(error)
        }
      }
      

    static async editMenu(req, res, next) {
        try {
            // console.log(req.body)
            const {id} = req.params
            const {name, description, price, imgUrl, categoryId, ingredients} = req.body
            const authorId = req.user.id

            const menu =  await Item.findByPk(id)
            if(!menu) {
                throw {name: "NOTFOUND"}
            }
            const updateMenu = await menu.update({name, description, price, imgUrl, categoryId, authorId})

            await Ingredient.destroy({ where: { itemId: id } })

            const newIngredients = ingredients.map((name) => ({
              name,
              itemId: id
            }))
        
            const ingredientsUpdate = await Ingredient.bulkCreate(newIngredients)

            res.status(200).json({updateMenu, ingredientsUpdate})
        } catch (error) {
            next(error)
        }
    }

    static async deleteMenu(req, res, next) {
        try {
            const {id} = req.params
            const menu =  await Item.findByPk(id)
            if(!menu) {
                throw {name: "NOTFOUND"}
            }
            await menu.destroy()

            res.status(200).json({message: `success delete menu ${menu.name}`})
        } catch (error) {
            next(error)
        }
    }

    static async addCategory(req, res, next) {
        try {
            const {name} = req.body
            const category = await Category.create({name})
            res.status(201).json(category)
        } catch (error) {
            next(error)
        }
    }

    static async editCategory(req, res, next) {
        try {
            const {id} = req.params
            const {name} = req.body
            const category = await Category.findByPk(id)
            if(!category) {
                throw {name: "NOTFOUND"}
            }
            const updateCategory = await category.update({name})
            res.status(200).json(updateCategory)
        } catch (error) {
            next(error)
        }
    }

    static async deleteCategory(req, res, next) {
        try {
            const {id} = req.params
            const category = await Category.findByPk(id)
            if(!category) {
                throw {name: "NOTFOUND"}
            }
            await category.destroy()

            res.status(200).json({message: `success delete category ${category.name}`})
        } catch (error) {
            next(error)
        }
    }

    static async detailMenu(req, res, next) {
        try {
            const {id} = req.params
            const menu = await Item.findByPk(id, {include: "Ingredients"})
            if(!menu) {
                throw {name: "NOTFOUND"}
            }
            res.status(200).json(menu)
        } catch (error) {
            next(error)
        }
    }

    static async detailCategory(req, res, next) {
        try {
            const {id} = req.params
            const category = await Category.findByPk(id)
            if(!category) {
                throw {name: "NOTFOUND"}
            }
            res.status(200).json(category)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller