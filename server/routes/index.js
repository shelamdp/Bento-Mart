const express = require('express')
const Controller = require('../controllers')
const ControllerClient = require('../controllers/client')
const { verifyToken } = require('../helpers/jwt')
const router = express.Router()
const {Category, Ingredient, Item, User} = require("../models")

// client
router.get("/client/menus", ControllerClient.fetchMenu)
router.get("/client/categories", ControllerClient.fetchCategory)
router.get("/client/menus/:id", ControllerClient.detailMenu)

//admin
router.post("/login", Controller.login)
// authentication
router.use(async (req, res, next) => {
    try {
        const {access_token} = req.headers
        if(!access_token) {
            throw {name: "INVALIDTOKEN"}
        }
        const payload = verifyToken(access_token)
        const user = await User.findByPk(payload.id)
        if(!user) {
            throw {name: "INVALIDTOKEN"}
        }
        req.user = {id: payload.id}
        next()
    } catch (error) {
        next(error)
    }
})
router.post("/users", Controller.regsiterNewAdmin)
router.get("/menus", Controller.fetchMenu)
router.get("/categories", Controller.fetchCategory)
router.post("/menus", Controller.addMenu)
router.post("/categories", Controller.addCategory)
router.get("/menus/:id", Controller.detailMenu)
router.get("/categories/:id", Controller.detailCategory)
router.put("/menus/:id", Controller.editMenu)
router.put("/categories/:id", Controller.editCategory)
router.delete("/menus/:id", Controller.deleteMenu)
router.delete("/categories/:id", Controller.deleteCategory)

module.exports = router