# UZTA – Site des commerçants d'Ustaritz

Site statique (HTML + CSS, sans build) : Accueil, À propos, Blog.

## Structure

```
index.html      Accueil : bannière photo, texte, bannière photo + 4 sections
a-propos.html   À propos
blog.html       Blog
css/style.css   Styles
images/         Mettre ici banniere.jpg (photo de la bannière)
```

## Déploiement Vercel

1. Pousser ce dossier sur un dépôt GitHub.
2. Sur vercel.com : **Add New → Project**, importer le dépôt.
3. Framework Preset : **Other**. Pas de commande de build, dossier de sortie : racine.
4. Deploy. Chaque `git push` sur `main` redéploie le site.
