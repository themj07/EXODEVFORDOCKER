# Image Node.js officielle légère
FROM node:18-alpine

# Dossier de travail
WORKDIR /app

# Copie des fichiers de dépendances
COPY package.json package-lock.json ./

# Installation des dépendances
RUN npm install

# Copie du code source
COPY . .

# Port par défaut de React
EXPOSE 3000

# Démarrage
CMD ["npm", "start"]

RUN npm install axios react-router-dom