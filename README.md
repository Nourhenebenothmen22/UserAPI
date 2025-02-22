# Nom du projet (ex: API de gestion des utilisateurs)

## Description

Ce projet est une API backend robuste et évolutive, conçue pour [décrire l'objectif principal de votre application, ex: gérer les données d'une application de commerce électronique, d'un réseau social, etc.]. Il utilise une architecture basée sur Node.js, Express.js et MongoDB pour offrir des performances optimales et une grande flexibilité.

### Fonctionnalités principales

*   **CRUD (Create, Read, Update, Delete) pour chaque élément :** L'API fournit des opérations CRUD complètes pour chaque entité de votre application (par exemple : produits, utilisateurs, commandes, etc.). Cela permet de gérer facilement les données stockées dans la base de données.
*   **Héritage de classes (modèle parent/enfant) :** Le projet met en œuvre un système d'héritage de classes pour organiser et structurer les données. Une classe mère (`user`) contient les attributs communs à tous les utilisateurs, tandis que des classes filles (`provider`, `customer`, `admin`) héritent de ces attributs et ajoutent des champs spécifiques à chaque type d'utilisateur.
*   **Hachage de mot de passe sécurisé :** Les mots de passe des utilisateurs sont hachés à l'aide de l'algorithme bcrypt avant d'être stockés dans la base de données. Cela garantit la sécurité des informations d'identification des utilisateurs, même en cas de compromission de la base de données.
*   **Upload d'images avec Multer :** Le projet intègre Multer pour gérer l'upload d'images. Les utilisateurs peuvent télécharger des images qui sont ensuite stockées sur le serveur ou dans un service de stockage cloud (par exemple, AWS S3).
*   **Validation des données avec express-validator :** Les données envoyées par les utilisateurs sont validées à l'aide de `express-validator` pour garantir leur conformité et prévenir les erreurs ou les injections de code malveillant. Un fichier de validation spécifique (`validateFacture.js`) est utilisé pour les factures.

### Schéma de la base de données

Le projet utilise les tables suivantes :

*   **User (Table mère) :**
    *   fullname (String)
    *   email (String)
    *   password (String)
    *   phone (Number)
    *   auth (Boolean)
*   **Admin (Table fille) :**
    *   (Hérite de User)
*   **Customer (Table fille) :**
    *   (Hérite de User)
    *   picture (String)
    *   address (String)
    *   city (String)
    *   cin (Number)
*   **Provider (Table fille) :**
    *   (Hérite de User)
    *   matricule (String)
    *   company (String)
    *   service (String)
*   **Product :**
    *   ref (String)
    *   name (String)
    *   price (Number)
    *   description (String)
    *   galleries (Array de String)
    *   qte (Number)
*   **Category :**
    *   name (String)
    *   description (String)
*   **SubCategory :**
    *   name (String)
    *   description (String)
*   **Order Line :**
    *   qte (Number)
    *   price (Number)
*   **Commande :**
    *   date (String)
    *   etat (String)
    *   lieuLivraison (String)
    *   typeLivraison (String)
    *   deliveryPrice (Number)
*   **Facture :**
    *   ref (String)
    *   remise (Number)
    *   description (String)
    *   montantTotal (Number)

### Technologies utilisées

*   **Node.js :** Environnement d'exécution JavaScript côté serveur.
*   **Express.js :** Framework web pour Node.js, facilitant la création d'API robustes.
*   **MongoDB :** Base de données NoSQL flexible et performante.
*   **Mongoose :** ODM (Object Document Mapper) pour MongoDB, simplifiant l'interaction avec la base de données.
*   **Bcrypt :** Bibliothèque de hachage de mot de passe robuste.
*   **Multer :** Middleware pour gérer l'upload de fichiers.
*   **express-validator :** Middleware pour la validation des données.

### Architecture

Le projet suit une architecture MVC (Modèle-Vue-Contrôleur) pour séparer les responsabilités et faciliter la maintenance du code :

*   **Modèles :** Définissent la structure des données et les interactions avec la base de données (par exemple, `user.Module.js`, `customer.model.js`, etc.).
*   **Vues (non applicable ici) :** Dans le cas d'une API backend, il n'y a pas de vues au sens traditionnel (pages HTML). Les contrôleurs renvoient des données au format JSON.
*   **Contrôleurs :** Gèrent la logique métier et les interactions avec les modèles (par exemple, `factureController.js`, etc.).
*   **Routes :** Définissent les points d'accès de l'API et les middlewares associés (par exemple, les routes pour les factures, les utilisateurs, etc.).


    ```



### Remerciements

Remerciez les personnes ou les organisations qui ont contribué à ce projet (facultatif).
