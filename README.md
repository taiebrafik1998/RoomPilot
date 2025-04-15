# 🏠 SpendingTrace

**SpendingTrace** est une application web complète de gestion locative, construite avec :
- 🐍 **Django** pour le backend
- ⚛️ **React** pour le frontend

Elle permet de :
- Gérer les **locataires**
- Gérer les **chambres**, studios et appartements
- Relier les locataires à leurs chambres
- Ajouter, supprimer, modifier des informations
- Voir l’état d’occupation des chambres
- 📸 Ajouter plusieurs **photos** pour chaque chambre
- 🗂️ Gérer les **images** côté backend et frontend

---

## 🗂️ Structure du projet

```
app01/
├── spendingTrace/           # Projet Django principal
│   ├── chambres/            # App Django pour la gestion des chambres
│   ├── locataires/          # App Django pour la gestion des locataires
│   └── ...
├── spending_frontend/       # Frontend React
├── media/                   # 📁 Contient les images uploadées (via ImageField)
├── db.sqlite3               # Base de données SQLite (développement)
└── manage.py
```

---

## 🚀 Installation

### 🔧 Prérequis

- Python 3.10+
- pip
- Node.js + npm (ou yarn)
- (optionnel) un environnement virtuel comme `venv` ou `virtualenv`

---

### 📦 Backend (Django)

```bash
# 1. Crée et active ton environnement virtuel
python -m venv myenv
myenv\Scripts\activate   # Windows
# source myenv/bin/activate   # Linux/macOS

# 2. Installe les dépendances
pip install -r requirements.txt

# 3. Applique les migrations
python manage.py migrate

# 4. Lance le serveur
python manage.py runserver
```

---

### 🎨 Frontend (React)

```bash
cd spending_frontend

# Installe les dépendances
npm install

# Lance le serveur React
npm start
```

---

## 🌐 Utilisation

- Accédez à l'interface via : `http://localhost:3000`
- L’API backend est accessible sur : `http://localhost:8000/api/`

---

## 📌 Fonctionnalités actuelles

- 🔹 Création de locataires liés à des chambres
- 🔹 Gestion des chambres (type, disponibilité, loyer, description)
- 🔹 Upload de plusieurs photos par chambre (ImageField Django + React)
- 🔹 Supprimer un locataire avec un bouton contextuel
- 🔹 Composants React modulaires avec logique séparée (hooks)

---

## 🔒 Sécurité

Pense à créer un fichier `.env` (non versionné) pour stocker :
- Ta `SECRET_KEY`
- L’URL du backend (utilisable dans `urlServer` côté frontend)

---

## 🤝 Contribuer

Pull requests bienvenues ! N’hésite pas à forker le projet, créer une branche et proposer des améliorations.

---

## 👨‍💻 Auteur

**Taieb Rafik**  
📧 mtaieb.rafik@gmail.com

---

## 📜 Licence

Ce projet est libre d'utilisation pour des fins éducatives et personnelles.
