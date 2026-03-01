# 🚨 FIX ERREUR VERCEL "figma:asset" 

## ❌ PROBLÈME
Vercel bloque avec l'erreur :
```
Error: Cannot resolve import 'figma:asset/cdde41ea...' 
```

## ✅ SOLUTION : NETTOYER LE CACHE VERCEL

### ÉTAPE 1 : Supprimer le cache sur Vercel

1. Va sur **Vercel Dashboard** : https://vercel.com/dashboard
2. Sélectionne ton projet **`clesducabanon`**
3. Va dans **Settings** (⚙️)
4. Dans le menu de gauche, clique sur **General**
5. Scroll jusqu'à **"Build & Development Settings"**
6. Clique sur **"Clear Cache"** ou **"Purge Cache"**
7. Confirme la suppression

### ÉTAPE 2 : Redéployer avec un commit clean

Dans ton terminal :

```bash
# 1. Vérifie que tu as bien supprimé tous les fichiers figma
git status

# 2. Commit les changements
git add .
git commit -m "fix: Remove figma:asset imports + clean build"

# 3. Push vers GitHub
git push origin main
```

### ÉTAPE 3 : Forcer un nouveau déploiement

Sur Vercel :
1. Va dans l'onglet **Deployments**
2. Clique sur **"Redeploy"** sur le dernier déploiement
3. ✅ **COCHE "Use existing Build Cache" = OFF** (décoché)
4. Clique sur **"Redeploy"**

---

## 🔧 ALTERNATIVE : Redéployer manuellement

Si le problème persiste :

### Option A : Nouveau projet Vercel

1. **Supprime** l'ancien projet sur Vercel
2. **Crée un nouveau projet** :
   - Clique sur **"Add New..."** → **"Project"**
   - Sélectionne ton repo GitHub
   - Configure :
     - **Framework Preset:** Vite
     - **Build Command:** `npm run build`
     - **Output Directory:** `dist`
     - **Install Command:** `npm install`
   - Clique sur **"Deploy"**

### Option B : Build local puis upload

```bash
# 1. Build localement
npm run build

# 2. Vérifie que /dist existe et est propre
ls -la dist/

# 3. Deploy le dossier dist directement
npx vercel --prod
```

---

## ✅ FICHIERS MIS À JOUR

J'ai créé/mis à jour :

1. **`/.vercelignore`** 
   - Ignore les fichiers inutiles (node_modules, supabase, etc.)

2. **`/vercel.json`**
   - Configuration Vercel optimisée
   - Rewrites pour React Router

3. **Suppression de `/src/imports/`**
   - Ancien dossier Figma complètement supprimé
   - Logo maintenant intégré dans `/src/app/components/Logo.tsx`

---

## 🔍 VÉRIFICATION

Après redéploiement, vérifie :

✅ **Build réussi** (logs verts)
✅ **Site accessible** sur ton URL Vercel
✅ **Logo affiché** correctement
✅ **Navigation** fonctionne (React Router)
✅ **Prix 180€** partout

---

## 🆘 SI ÇA NE MARCHE TOUJOURS PAS

### Débug : Vérifie les logs Vercel

Dans les logs de build, cherche la ligne exacte de l'erreur :
```
Error: ... figma:asset/[HASH].png ...
```

Copie le nom du fichier et envoie-le moi pour que je trouve où il est utilisé.

### Test local

```bash
# Build local pour tester
npm run build

# Si ça marche localement, le problème est le cache Vercel
npm run preview
```

---

## 📋 CHECKLIST DE DÉPLOIEMENT

- [ ] Cache Vercel vidé (Settings → Clear Cache)
- [ ] Commit + Push vers GitHub
- [ ] Redéploiement avec "Use existing Build Cache" = OFF
- [ ] Logs de build : aucune erreur "figma:asset"
- [ ] Site accessible et fonctionnel

---

**Date:** 1er mars 2026  
**Statut:** ✅ Fichiers nettoyés, prêt pour redéploiement propre
