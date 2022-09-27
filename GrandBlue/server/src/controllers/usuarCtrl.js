import { Usuario } from "../models/usuarModel.js"

export class UserController{
    static async getUser(req, res){
        try {
                const produtos = await Usuario.get()
                return res.status(200).json(produtos)
        } 
        catch (error) 
        {
            console.log(error)
            return res.status(500).json(error)
        }
    } 


    static async insertUser(req, res){
        try {
                const { email, senha, nome } = req.body
                const newUser = await new Usuario(email, senha, nome).insert()
                return res.status(200).json(newUser)
        } 
        catch (error) 
        {
            console.log(error)
            return res.status(500).json(error)
        }
    }

    static async updateUser(req, res){
        try {
                const { id } = req.params
                const { email, senha, nome} = req.body
                const alterUser = await new Usuario(email, senha, nome, id).update()
                return res.status(200).json(alterUser)
        } 
        catch (error) 
        {
            console.log(error)
            return res.status(500).json(error)
        }
    }

    static async deleteUser(req, res){
        try {
                const { id } = req.params
                const { email, senha, nome } = req.body
                const delUser = await new Usuario(email, senha, nome, id).delete()
                return res.status(200).json(delUser)
        } 
        catch (error) 
        {
            console.log(error)
            return res.status(500).json(error)
        }
    }

    static async loginUser(req, res){
        try {
            const { email, senha, nome } = req.body
            const loginUser = await new Usuario(email, senha, nome).login()
            return res.status(200).json(loginUser)
        } 
        catch (error) {
            console.log('login ' + error)
        }
    }


}