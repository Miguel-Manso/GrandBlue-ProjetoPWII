import express from 'express'
import { UserController } from './src/controllers/usuarCtrl.js'

const routes = express.Router()

routes.get('/usuario/get', UserController.getUser)
routes.post('/usuario/insert', UserController.insertUser)
routes.put('/usuario/update/:id', UserController.updateUser)
routes.delete('/usuario/delete/:id', UserController.deleteUser)
routes.post('/usuario/login', UserController.loginUser)

export { routes }