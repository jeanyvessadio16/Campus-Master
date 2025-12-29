export default function Footer() {
  return (
    <footer className="w-full border-t py-10 bg-slate-900">
      <div className="max-w-7xl mx-auto py-6 px-4 text-center text-sm text-gray-500">
        <h3>Campus Master</h3>
        <p>Plateforme de gestion universitaire</p>
      </div>
      <div className="max-w-7xl mx-auto py-6 px-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Campus Master. Tous droits réservés.
      </div>
    </footer>
  );
}
