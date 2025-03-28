
import React, { useState, useEffect } from "react";
import { MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

// Mock nearby workers data - in a real app, this would come from geolocation + API
const mockNearbyWorkers = [
  { id: "w1", name: "John Smith", occupation: "Bartender", distance: 0.2, rating: "A" },
  { id: "w2", name: "Emma Lee", occupation: "Server", distance: 0.3, rating: "S" },
  { id: "w3", name: "Alex Johnson", occupation: "Barista", distance: 0.5, rating: "B" },
  { id: "w4", name: "Maria Garcia", occupation: "Cashier", distance: 0.7, rating: "A" },
];

const NearbyWorkers = () => {
  const [nearbyWorkers, setNearbyWorkers] = useState(mockNearbyWorkers);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate loading data
    setIsLoading(true);
    setTimeout(() => {
      setNearbyWorkers(mockNearbyWorkers);
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="tipme-card">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Nearby Workers</h2>
        <button className="text-sm text-tipme-blue">Refresh</button>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-tipme-blue"></div>
        </div>
      ) : nearbyWorkers.length > 0 ? (
        <div className="space-y-3">
          {nearbyWorkers.map((worker) => (
            <div key={worker.id} className="flex items-center justify-between p-3 bg-background rounded-lg border border-border">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-tipme-blue/20 flex items-center justify-center text-lg font-bold mr-3">
                  {worker.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-medium text-sm flex items-center">
                    {worker.name} 
                    <span className="ml-2 px-1.5 py-0.5 bg-secondary text-secondary-foreground text-xs rounded font-bold">
                      {worker.rating}
                    </span>
                  </h3>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <MapPin size={12} className="mr-1" /> 
                    {worker.distance} miles • {worker.occupation}
                  </p>
                </div>
              </div>
              <Link
                to={`/quick-tip?worker=${worker.id}`}
                className="bg-secondary px-3 py-1.5 rounded-full text-xs font-medium text-secondary-foreground"
              >
                Tip
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No workers found nearby</p>
          <p className="text-sm text-muted-foreground mt-1">Try refreshing or expanding your search radius</p>
        </div>
      )}
    </div>
  );
};

export default NearbyWorkers;
