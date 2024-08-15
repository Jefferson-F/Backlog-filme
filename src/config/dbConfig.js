    import { Sequelize } from "sequelize";
    
    const sequelize = new Sequelize('backlog', 'root', '', {
        host: 'localhost',
        dialect: 'mysql'
    });

    sequelize.authenticate().then(() =>{
        console.log("Conectado ao MySQL com Sequelize!!");
    }).catch(err => {
        console.error("Erro ao conectar ao banco de dados! :( MALDITO SEJA O XAMPP:", err);
    });

    export default sequelize;