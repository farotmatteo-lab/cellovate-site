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

## Ce qui reste à faire après le premier déploiement

- **Pages produit individuelles** : la version actuelle liste tout sur une
  seule page `/shop`. Des pages dédiées par produit (avec COA, description
  longue) peuvent être ajoutées ensuite.
- **Webhook + notification email** : maintenant en place (voir ci-dessous) —
  reste à configurer les variables d'environnement pour l'activer.

## Activer le webhook de confirmation + l'email automatique

1. Sur NOWPayments : **Payments Settings → Instant payment notifications**,
   copie le **IPN secret key**
2. Sur Vercel, ajoute ces variables d'environnement en plus de
   `NOWPAYMENTS_API_KEY` :
   - `NOWPAYMENTS_IPN_SECRET` → le secret copié à l'étape 1
   - `NOWPAYMENTS_IPN_URL` → `https://cellovateadvancedpeptides.com/api/nowpayments-webhook`
   - `ZOHO_SMTP_USER` → ton adresse Zoho Mail complète
   - `ZOHO_SMTP_PASS` → un **mot de passe d'application** Zoho (Settings →
     Security → App Passwords — pas ton mot de passe habituel)
   - `OWNER_NOTIFICATION_EMAIL` → l'adresse où tu veux recevoir les
     notifications de vente (peut être la même que `ZOHO_SMTP_USER`)
3. Redéploie (Vercel redéploie automatiquement dès que tu changes une
   variable d'environnement, ou clique "Redeploy" dans l'onglet
   Deployments)

Une fois en place, tu reçois un email à chaque paiement confirmé, avec le
montant et l'ID de commande — plus besoin de surveiller le dashboard
NOWPayments en continu.

