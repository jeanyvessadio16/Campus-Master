export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Campus Master
          </h2>
          <p className="text-muted-foreground mb-8">
            Authentification en cours...
          </p>
        </div>

        <div className="relative w-12 h-12">
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-secondary border-t-primary"></div>
        </div>

        <p className="text-sm text-muted-foreground mt-4">
          Veuillez patienter...
        </p>
      </div>
    </div>
  );
}
