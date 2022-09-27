import { poolConnect } from "../../poolConnect.js"

const con = await poolConnect()

export class Usuario{
    constructor(email, senha, nome, cpf, id){
        if(email == '' || email == null || email == undefined){
            this.email = ''
        }else{
            this.email = email
        }

        if(senha == '' || senha == null || senha == undefined){
            this.senha = ''
        }else{
            this.senha = senha
        }

        if(nome == '' || nome == null || nome == undefined){
            this.nome = ''
        }else{
            this.nome = nome
        }
        if( cpf == '' || cpf == null || cpf == undefined){
            this.cpf = ''
        }else{
            this.cpf = cpf
        }
        if(id == '' || id == null || id == undefined){
            this.id = ''
        }else{
            this.id = id
        }
    }

    static async get(){
        try {
            const { recordset } = await con.query('select * from usuario')
            return recordset
        } 
        catch (error)
        {
            console.log('error model ' + error)
            return error(error)
        }
    }

    async insert(){
        try {
            const { rowsAffected } = con.query(` insert into usuario values ('${this.nome}', '${this.email}', '${this.senha}', '${this.cpf}')`)
            return rowsAffected
        } 
        catch (error) 
        {
            console.log('error model ' + error)
            return (error)
        }
    }

    async update(){
        try {
            const { rowsAffected } = await con.query(`update usuario set nome = '${this.nome}' , email = '${this.email}',
            senha = '${this.senha}', cpf = '${this.cpf}' where id = ${this.id}`)
            return rowsAffected
        } 
        catch (error) 
        {
            console.log('error model ' + error)
            return (error)
        }
    }

    async delete(){
        try {
            const { rowsAffected } = await con.query(`delete from usuario where id = ${this.id}`)
            return rowsAffected
        } 
        catch (error) 
        {
            console.log('error model ' + error)
            return (error)
        }
    }






}