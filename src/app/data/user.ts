// Utilisateurs par défaut pour la connexion
export const defaultUsers = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@campus.com",
    password: "password123",
    role: "admin",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=admin",
  },
  {
    id: "2",
    name: "Teacher User",
    email: "teacher@campus.com",
    password: "password123",
    role: "teacher",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=teacher",
  },
  {
    id: "3",
    name: "Student User",
    email: "student@campus.com",
    password: "password123",
    role: "student",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=student",
  },
];

// Fonction helper pour trouver un utilisateur par email
export function getUserByEmail(email: string) {
  return defaultUsers.find((user) => user.email === email);
}

// Fonction helper pour vérifier les identifiants
export function verifyUserCredentials(email: string, password: string) {
  const user = getUserByEmail(email);
  if (user && user.password === password) {
    // Ne pas retourner le mot de passe
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
    };
  }
  return null;
}
