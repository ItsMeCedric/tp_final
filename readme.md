# NodeJS

## TP Final

---



## Présentation



## I - Installation

---

## /!\  Note importante  /!\

- ***Docker*** - Pour initialiser le projet, il est demandé d'avoir de quoi démarrer un conteneur Docker déjà présent sur votre macine

- ***Postman*** - Pour effectuer des requêtes, il est demandé d'avoir un utilitaire du type Postman déjà présent sur votre macine

  

## Récupération et installation du projet depuis GitHub

- Clonez le répertoire depuis GitHub

```sh
git clone git@github.com:ItsMeCedric/tp_final.git
```

- Naviguez dans le dossier backend

```sh
cd backend
```

- Installer npm et les dépendances

```sh
npm install
```



## Initialiser la base de données

- Entrez la commande suivante pour démarrer un conteneur dédié à la base de données

```sh
docker run --rm -e POSTGRES_DB=tp_final -e POSTGRES_PASSWORD=123456 -p 5432:5432 postgres:alpine
```

- Spécificités:

  - Distribution: alpine
  - Base de données: postegres
  - Nome de la BDD: tp_final
  - Utilisateur: postgres
  - Mot de passe : 123456

- /!\  Les identifiants sont en claire, il n'est pas recommandé de procédé de la sorte pour partager votre code. Ici c'est une version de test qui n'est pas destiné à la production. Vous avez néamoins la possibilité de modifier le mot de passe en remplaçant "132456" dans la ligne ci dessus

  

## Lancer le serveur

- Pour démarrer le serveur, entrez la commande suivante pour démarrer le serveur

```sh
node src/app.js
```



## Les routes requêtables

- Pour les utilisateurs :
  - auth/register/ - pour créer un utilisateur (s'inscrire)
  - auth/login/ - pour connecter un utilisateur (se connecter)
- Pour les films :
  - movies/ - pour l'intégralité des tâches possibles vis à vis des films (consulter (tout), consulter (spécifique), créer, modifier ou supprimer). A noter que les fonction d'écriture (créer, modifier, supprimer), nécéssitent d'être un utilisateur authentifié



## Tester la mise en ligne de l'API

- Pour tester si l'API répond positivement aux requêtes, vous pouvez entrer la requête suivante :

```sql
GET | http://localhost:5004/
```

- Ce qui devrait donner le résultat suivant :

![api_test](D:\git\tp_final\medias\api_test.png)



