export function HomeBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-linear-to-t from-blue-700/80 via-blue-800/60 to-gray-900 z-1/90" />

      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('/background/background-home.webp')" }}
      />
    </div>
  );
}

export function SobreBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-linear-to-t from-blue-700/80 via-blue-800/60 to-gray-900 z-1/90" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/background/background-about.webp')" }}
      />
    </div>
  );
}

export function ServicosBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-blue-900/70 to-black/80" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/background/background-services.webp')" }}
      />
    </div>
  );
}

export function AgendarBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-linear-to-t from-blue-700/80 via-blue-800/60 to-gray-900 z-1/90" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/background/background-schedulling.webp')" }}
      />
    </div>
  );
}

export function VideosBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-linear-to-t from-blue-700/80 via-blue-800/60 to-gray-900 z-1/90" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/background/background-videos.webp')" }}
      />
    </div>
  );
}
