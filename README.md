# Portfolio de Francesca Bushell - Marketing International

Ce projet est un site web portfolio professionnel pour Francesca Bushell, spécialiste en marketing international.

## Technologies utilisées

- **Frontend**: Next.js (React)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Déploiement**: Vercel

## Structure du site

1. **Header & Navigation**

   - Logo/Nom
   - Menu principal
   - Liens externes (LinkedIn, CV, Email)

2. **Section Hero**

   - Titre principal et sous-titre
   - Photo professionnelle
   - CTA Button

3. **Section Services**

   - 4 cards de services avec icônes

4. **Section Processus**

   - Timeline verticale avec 5 étapes

5. **Section À Propos**

   - Bio et photo
   - Valeurs
   - Formations et certifications

6. **Section Témoignages/Cas d'Étude**

   - Témoignages clients
   - Cas d'études avec résultats
   - Logos partenaires

7. **Footer**
   - Coordonnées
   - Liens réseaux sociaux
   - Mentions légales

## Installation et démarrage

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Lancer en mode production
npm start
```

## Personnalisation

Pour personnaliser ce site:

1. Remplacer les images placeholder dans le dossier `public/assets`
2. Mettre à jour le CV PDF dans `public/assets`
3. Modifier les textes dans les composants de la section `src/components/sections`
4. Ajuster les couleurs dans `tailwind.config.js` si nécessaire

## Notes

- Le design est entièrement responsive (mobile, tablette, desktop)
- Les animations sont optimisées pour les performances
- Les images doivent être optimisées avant d'être ajoutées au projet
