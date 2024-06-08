import { useCurrentLocation } from "./useCurrentLocation";

export function LocationComponent() {
  const { location, loading, error, getLocation } = useCurrentLocation();

  return (
    <div>
      <button onClick={getLocation}>Ottieni posizione corrente</button>
      {loading && <p>Caricamento...</p>}
      {error && <p>Errore: {error.message}</p>}
      {location && (
        <div>
          <p>Latitudine: {location.latitude}</p>
          <p>Longitudine: {location.longitude}</p>
        </div>
      )}
    </div>
  );
}