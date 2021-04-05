# Carte AMAP - projet PPE

Projet de plateforme de visibilité pour les AMAP réalisée dans le cadre de notre PPE (Projet pluridisciplinaire en équipe).

## Usage

### Initialisation
Cloner le repository et installer les dépendances
```
git clone https://github.com/PaulFarault/ece-ppe.git amap
cd amap
```

### Base de données
Les actions suivantes concernent le dossier *db* (`cd db`)

* Uniquement la première fois : builder l'image en local à partir du `Dockerfile`
``` bash
docker build -t amapdb .
```

* Lancer une instance grace au `docker-compose.yaml`
``` bash
docker-compose up -d
```

* Accéder à pgAdmin pour suivre l'état de la bdd à l'adresse (localhost:8080)[http://localhost:8080/]

### Back-end
Les actions suivantes concernent le dossier *back-end* (`cd back-end`)

* Uniquement la première fois : installer les dépendances
``` bash
npm install
```

### Front-end
Les actions suivantes concernent le dossier *front-end* (`cd front-end`)

* Uniquement la première fois : installer les dépendances
``` bash
npm install
```

* Lancer le front
``` bash
npm run dev
```

## Auteurs
* Magalie Andorfer-hirsch
* Margaux Boscary
* Pierre-Loup Chardat
* Paul Farault
* Thibault Gaufres
* Mathilde Giraudon