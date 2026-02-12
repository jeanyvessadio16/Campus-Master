export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/5">
      <div className="flex flex-col items-center gap-4">
        {/* Logo ou titre de chargement */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">
            Campus Master
          </h1>
          <p className="text-muted-foreground mb-8">Chargement en cours...</p>
        </div>

        {/* Spinner animé */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-primary border-r-primary"></div>
          <div
            className="absolute inset-2 animate-spin rounded-full border-4 border-transparent border-b-secondary opacity-75"
            style={{ animationDirection: "reverse", animationDuration: "2s" }}
          ></div>
        </div>

        {/* Texte de support */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">Veuillez patienter...</p>
        </div>
      </div>
    </div>
  );
}
