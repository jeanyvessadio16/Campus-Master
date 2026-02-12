# Design System - Campus Master

## Principes IHM appliqués

### 1. **Conception Centrée sur l'Utilisateur**

- ✓ Hiérarchie visuelle claire et prévisible
- ✓ Actions principales bien visibles
- ✓ Microcopy descriptive et utile
- ✓ Feedback utilisateur immédiat

### 2. **Ergonomie**

- ✓ Espacements cohérents (4px grid)
- ✓ Tailles de texte lisibles
- ✓ Zones cliquables suffisantes (min 44x44px)
- ✓ Animations fluides et non-distractives
- ✓ Validations en temps réel

### 3. **Accessibilité (WCAG 2.1 AA)**

- ✓ Rapports de contraste suffisants
- ✓ Textes alternatifs sur les icônes
- ✓ Attributs ARIA corrects
- ✓ Navigation au clavier complète
- ✓ Focus states visibles

### 4. **Clarté**

- ✓ Messages d'erreur explicites
- ✓ Instructions claires
- ✓ Icônes cohérentes avec Lucide
- ✓ Langage simple et en français

### 5. **Homogénéité**

- ✓ Design system unifié
- ✓ Composants réutilisables
- ✓ Couleurs et typo consistantes
- ✓ Spacing uniforme

### 6. **Prototypage et Évaluation**

- ✓ Composants modulaires et testables
- ✓ Props bien documentées
- ✓ Variants prévisibles
- ✓ Hooks réutilisables

## Couleurs

| Rôle        | Classe             | Usage                      |
| ----------- | ------------------ | -------------------------- |
| Primary     | `from-blue-600`    | Actions principales, liens |
| Secondary   | `bg-secondary`     | Surfaces secondaires       |
| Destructive | `text-destructive` | Erreurs, suppressions      |
| Success     | `text-green-600`   | Confirmations, succès      |
| Warning     | `text-yellow-600`  | Avertissements             |
| Info        | `text-blue-600`    | Informations               |

## Espacements

```
xs: 2px
sm: 4px
md: 8px
lg: 16px
xl: 32px
2xl: 64px
```

## Typographie

```
h1: text-4xl md:text-5xl lg:text-6xl font-bold
h2: text-3xl font-bold
h3: text-xl font-semibold
body: text-base
small: text-sm
xs: text-xs
```

## Composants Clés

### Formulaires

- ✓ Labels explicites
- ✓ Placeholders utiles
- ✓ Icônes de contexte
- ✓ Messages d'erreur inline
- ✓ Validation en temps réel

### Feedback

- **Toast** : Notifications temporaires
- **FormError** : Erreurs inline
- **FormSuccess** : Confirmations
- **InfoBox** : Informations contextuelles

### Navigation

- **HeaderNavbar** : Navigation principale avec menu mobile
- **SectionHeader** : Titres de sections avec actions
- **Breadcrumb** : Chemin de navigation

### États

- **EmptyState** : Pas de contenu
- **LoadingSpinner** : Chargement
- **SkeletonLoader** : Placeholder
- **ConfirmDialog** : Confirmations critiques

## Directives de Codage

### Accessibilité

```tsx
// Toujours inclure aria labels
<button aria-label="Ouvrir le menu">
  <Menu />
</button>

// Erreurs avec ARIA invalid
<Input aria-invalid={!!error} aria-describedby="error-id" />
<p id="error-id">{error}</p>
```

### Responsive

```tsx
// Mobile first
<div className="text-sm md:text-base lg:text-lg">
```

### Icônes

```tsx
// Utiliser Lucide icons
import { BookOpen, AlertCircle } from "lucide-react";
```

## Liste de Contrôle de Développement

- [ ] Texte lisible (au moins 16px)
- [ ] Contraste suffisant (4.5:1 minimum)
- [ ] Focus visible au clavier
- [ ] Icônes avec texte ou aria-label
- [ ] Erreurs explicites et constructives
- [ ] États de chargement visibles
- [ ] Confirmations pour actions critiques
- [ ] Responsive et mobile-first
- [ ] Animations cohérentes
- [ ] Validations utiles (ne pas bloquer l'entrée incorrecte)
