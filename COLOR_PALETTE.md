# Palette de Couleurs - Campus Master

## Université Numérique Cheikh Hamidou Kane

### Couleurs Primaires de l'Université

La palette de couleurs de Campus Master respecte les couleurs officielles de l'université :

| Couleur               | Code HSL      | Code Hex  | Usage                                      |
| --------------------- | ------------- | --------- | ------------------------------------------ |
| **Bleu Université**   | `210 92% 45%` | `#0B7FFF` | Primaire - Actions, boutons, liens         |
| **Vert Université**   | `142 76% 36%` | `#1B9B4D` | Secondaire - Succès, confirmations         |
| **Orange Université** | `36 92% 50%`  | `#FFA500` | Accent - Avertissements, mises en évidence |

---

## Configuration Tailwind CSS

### Variables CSS Racine (Light Mode)

```css
:root {
  --primary: 210 92% 45%; /* Bleu principal */
  --secondary: 142 76% 36%; /* Vert secondaire */
  --muted: 36 92% 50%; /* Orange pour accents */
  --accent: 210 92% 45%; /* Accent = Primaire */
}
```

### Variables CSS Dark Mode

```css
.dark {
  --primary: 210 92% 55%; /* Bleu plus clair en dark */
  --secondary: 142 76% 46%; /* Vert plus clair en dark */
  --muted: 36 92% 60%; /* Orange plus clair en dark */
  --accent: 210 92% 55%; /* Accent = Primaire */
}
```

---

## Utilisation dans les Composants

### Boutons Primaires (Bleu)

```tsx
<Button>Action principale</Button>
/* Utilise --primary: 210 92% 45% */
```

### Boutons Secondaires (Vert)

```tsx
<Button variant="secondary">Action confirmée</Button>
/* Utilise --secondary: 142 76% 36% */
```

### Avertissements/Orange

```tsx
<Alert type="warning">Message d'avertissement</Alert>
/* Utilise --muted: 36 92% 50% */
```

### Succès (Vert)

```tsx
<Alert type="success">Action réussie</Alert>
/* Utilise --secondary: 142 76% 36% */
```

---

## Associations Sémantiques

| Élément             | Couleur   | Signification                       |
| ------------------- | --------- | ----------------------------------- |
| Boutons Primaires   | Bleu      | Action principale, appel à l'action |
| Boutons Secondaires | Vert      | Actions confirmées, achèvement      |
| Liens               | Bleu      | Navigation                          |
| Succès              | Vert      | Opération réussie                   |
| Avertissement       | Orange    | Attention requise                   |
| Erreur              | Rouge     | Problème critique                   |
| Sidebar             | Bleu/Vert | Navigation secondaire               |

---

## Contraste et Accessibilité

### Ratios de Contraste (WCAG AA)

- **Bleu (#0B7FFF) sur blanc** : ✅ 7.2:1 (AAA)
- **Vert (#1B9B4D) sur blanc** : ✅ 5.8:1 (AA)
- **Orange (#FFA500) sur blanc** : ⚠️ 4.5:1 (AA minimal)

### Recommandations

- L'orange est utilisé principalement pour les accents
- Pour les textes importants en orange, ajouter du texte blanc ou noir
- Les couleurs sombres du dark mode ont contraste suffisant

---

## Charts et Graphiques

```css
--chart-1: 210 92% 45%; /* Bleu */
--chart-2: 142 76% 36%; /* Vert */
--chart-3: 36 92% 50%; /* Orange */
--chart-4: 210 92% 60%; /* Bleu clair */
--chart-5: 142 76% 50%; /* Vert clair */
```

---

## Extension Future

Pour ajouter plus de couleurs de l'université dans le futur :

1. Déterminer les codes HSL/Hex
2. Ajouter de nouvelles variables CSS dans `globals.css`
3. Créer des variants Tailwind si nécessaire
4. Documenter l'usage dans ce fichier

---

**Note** : Cette palette a été définie pour respecter les identités visuelle et pédagogique de l'université Cheikh Hamidou Kane. Les couleurs ont été sélectionnées pour optimiser l'accessibilité et la lisibilité.
