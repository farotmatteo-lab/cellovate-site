# Cellovate — site custom

Site de vente en ligne pour Cellovate Advanced Peptides, avec checkout crypto
(NOWPayments), en remplacement de Shopify.

## Contenu du projet

- `pages/index.js` — page d'accueil
- `pages/shop.js` — catalogue + panier + checkout
- `pages/api/create-payment.js` — crée un paiement NOWPayments (utilise ta clé API privée, côté serveur uniquement)
- `pages/api/payment-status.js` — vérifie le statut d'un paiement
- `components/CellovateStore.jsx` — toute la logique du catalogue/panier/checkout

## 1. Tester en local (optionnel mais recommandé)

Il te faut [Node.js](https://nodejs.org) installé (version 18 ou plus).

```bash
cd cellovate-site
npm install
cp .env.example .env.local
```

Ouvre `.env.local` et colle ta clé API **privée** NOWPayments
(celle qui commence par `1AFH...`, trouvable dans Payments Settings → API keys) :

```
NOWPAYMENTS_API_KEY=1AFH...ta_vraie_cle
```

Puis lance le site en local :

```bash
npm run dev
```

Va sur http://localhost:3000 — le site tourne chez toi. Teste le flow complet
sur `/shop` (ajoute un produit, clique "Pay with crypto") avant de déployer.

## 2. Mettre le code sur GitHub

Si tu n'as pas encore de compte, crée-en un sur [github.com](https://github.com).

```bash
cd cellovate-site
git init
git add .
git commit -m "Initial version du site Cellovate"
```

Crée un nouveau repo (vide, sans README) sur GitHub, puis :

```bash
git remote add origin <URL_DE_TON_REPO>
git branch -M main
git push -u origin main
```

⚠️ Le fichier `.env.local` n'est jamais poussé sur GitHub (il est dans
`.gitignore`) — c'est normal et voulu, ta clé API ne doit jamais apparaître
dans le code source.

## 3. Déployer sur Vercel

1. Va sur [vercel.com](https://vercel.com), connecte-toi avec ton compte GitHub
2. "Add New Project" → sélectionne le repo que tu viens de pousser
3. Vercel détecte automatiquement que c'est un projet Next.js — laisse les
   réglages par défaut
4. **Avant de cliquer "Deploy"**, ouvre "Environment Variables" et ajoute :
   - Name: `NOWPAYMENTS_API_KEY`
   - Value: ta clé API privée NOWPayments
5. Clique "Deploy"

En 1-2 minutes, ton site est en ligne sur une URL du type
`cellovate-site.vercel.app`.

## 4. Brancher ton vrai domaine

Une fois que le site fonctionne sur l'URL Vercel :

1. Dans Vercel → ton projet → Settings → Domains, ajoute
   `cellovateadvancedpeptides.com`
2. Vercel te donne des enregistrements DNS à mettre à jour
3. Va chez ton registrar de domaine (actuellement sur Shopify) et remplace
   les DNS existants par ceux donnés par Vercel

⚠️ Ce dernier point coupera le site Shopify actuel dès que le DNS bascule —
prévois de faire ça au moment où le nouveau site est testé et prêt.

## Ce qu'il reste à faire après le premier déploiement

- **Webhook de confirmation (IPN)** : pour l'instant le site vérifie le statut
  du paiement en interrogeant NOWPayments toutes les 6 secondes. C'est
  fonctionnel, mais un vrai webhook serait plus fiable pour déclencher l'envoi
  automatique d'un email de confirmation — à ajouter dans une prochaine passe.
- **Pages produit individuelles** : la version actuelle liste tout sur une
  seule page `/shop`. Des pages dédiées par produit (avec COA, description
  longue) peuvent être ajoutées ensuite.
- **Contenu à migrer depuis Shopify** : les 8 articles SEO déjà écrits, les
  pages À propos, et les COA ne sont pas encore recopiés dans ce projet — il
  faudra les rapatrier une fois le site de base validé.
- **Emails transactionnels** : brancher Zoho Mail ou un service comme Resend
  pour l'envoi automatique de la confirmation de commande.
