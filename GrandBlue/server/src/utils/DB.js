export const db = {
    server: 'localhost',
    port: 1433,
    user:'sa',
    password:'capeta',
    database:'grandblue', 
    options:{
        enableArithAbort: true,
        encrypt: false,
        trustServerCertificate: true
    },
    connectionTimeout: 15000,
    pool:{
        max:10,
        min:0,
        idleTimeoutMillis:30000
    },
}