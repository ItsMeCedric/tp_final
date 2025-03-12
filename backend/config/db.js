import dotenv from "dotenv";
import { Sequelize } from "sequelize";

// variables d'environnement
dotenv.config();

// console.log(process.env)

// !! se placer dans le dossier contenant .env pour exécuter la commande
const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER,
    process.env.DB_PASSWORD, {
    host: "localhost",
    dialect: "postgres"
})

sequelize.authenticate() 
.then(() => { 
console.log("Connexion réussie à la base de données") 
}) 
.catch(err => { 
    console.error("Impossible de se connecter à la base de données :", err) 
}) 

sequelize.sync({force: false, alter: true}) 
.then(() => { 
    console.log('Les modèles ont été synchronisés avec la base de données.'); 
}) 
.catch(err => { 
    console.error('Erreur lors de la synchronisation des modèles :', err); 
}); 

export default sequelize





