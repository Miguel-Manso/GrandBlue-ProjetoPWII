export const db = {
    server: 'DESKTOP-7C99J2K',
    port: 1433,
    user:'sa',
    password:'0192',
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