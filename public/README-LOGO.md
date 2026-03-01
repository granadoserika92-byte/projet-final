# 🎨 Logo Les Clés du Cabanon

## Pour le déploiement Vercel via GitHub

### Option 1 : Télécharger le logo depuis Make (RECOMMANDÉ)

1. **Ouvre ton application Make** dans le navigateur
2. **Clique droit sur le logo** visible dans le Header ou Footer
3. **"Enregistrer l'image sous..."** → Nomme-la `logo.png`
4. **Place le fichier** dans le dossier `/public/` de ton projet local
5. **Commit et push** :
   ```bash
   git add public/logo.png
   git commit -m "feat: Ajout logo officiel Les Clés du Cabanon"
   git push origin main
   ```

### Option 2 : Créer le fichier manuellement

Si tu as déjà le logo en fichier PNG :

1. **Renomme ton fichier** en `logo.png` (exactement)
2. **Place-le dans** `/public/logo.png`
3. **Commit et push** (commandes ci-dessus)

## 📋 Checklist de vérification

✅ Le fichier s'appelle exactement `logo.png` (pas Logo.png, pas logo.PNG)
✅ Le fichier est dans `/public/logo.png`
✅ Le logo utilise les couleurs officielles (teal + jaune/soleil)
✅ Le logo est au format PNG avec fond transparent

## 🚀 Après le push

Vercel déploiera automatiquement :
- Header : Logo visible en haut à gauche (12x12 sur desktop)
- Footer : Logo visible en bas (10x10)
- SEO : Logo référencé dans les métadonnées Schema.org

## 🎯 URLs du logo après déploiement

- Production : `https://www.clesducabanon.fr/logo.png`
- Preview : `https://[branch]-clesducabanon.vercel.app/logo.png`

---

**Ton logo est prêt à briller sur ton site ! 🌴☀️**
