# 😄 Application de Blagues – Projet de Sélection CDA (Simplon)

Ce projet consiste à créer une **application web de blagues carambar** connectée à une **API REST**, selon un cahier des charges fourni.

---

## 🎯 Objectif du projet

Créer une **landing page** avec un **bouton** permettant d’afficher une **blague aléatoire** issue d’une API.

---

## 🧱 Technologies utilisées

### 🔙 Backend
- Node.js
- Express
- Sequelize
- SQLite
- Swagger 

### 🔜 Frontend
- HTML
- CSS
- JavaScript 

---

## 🔗 Déploiements

- 🚀 **API (Render)** :  
  👉 [https://projet-de-selection-cda.onrender.com/api/v1/blagues](https://projet-de-selection-cda.onrender.com/api/v1/blagues)

- 📄 **Documentation Swagger** :  
  👉 [https://projet-de-selection-cda.onrender.com/api-docs](https://projet-de-selection-cda.onrender.com/api-docs)

- 🌐 **Frontend (GitHub Pages)** :  
  👉 [https://arnaud6216.github.io/projet-de-selection-simplon-front](https://arnaud6216.github.io/projet-de-selection-simplon-front)

---

## 📁 Repositories GitHub

- 📦 **Backend** : [https://github.com/arnaud6216/projet-de-selection-simplon-back](https://github.com/arnaud6216/projet-de-selection-simplon-back)
- 💻 **Frontend** : [https://github.com/arnaud6216/projet-de-selection-simplon-front](https://github.com/arnaud6216/projet-de-selection-simplon-front)

---

## 🔌 API REST – Fonctionnalités

L’API est **versionnée** (`/api/v1`) et suit une architecture **MVC**.  
Les endpoints :

| Méthode | Endpoint                     | Description                      |
|---------|------------------------------|----------------------------------|
| POST    | `/api/v1/blagues`            | Ajouter une blague (via Postman) |
| GET     | `/api/v1/blagues`            | Obtenir toutes les blagues       |
| GET     | `/api/v1/blagues/random`     | Obtenir une blague aléatoire     |
| GET     | `/api/v1/blagues/:id`        | Obtenir une blague par ID        |
| DELETE  | `/api/v1/blagues/:id`        | Supprimer une blague par ID      |

✅ L’API est **documentée avec Swagger**, et toutes les routes sont testables directement via l’interface.

---

## ⚙️ Installation

### Frontend

git clone https://github.com/arnaud6216/projet-de-selection-simplon-front.git

cd projet-de-selection-simplon-front

### Backend

git clone https://github.com/arnaud6216/projet-de-selection-simplon-back

cd projet-de-selection-simplon-back

npm install

npm start
