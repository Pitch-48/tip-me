
import React from "react";
import { Star, Gift, Share2 } from "lucide-react";

interface WorkerCardProps {
  id: string;
  name: string;
  occupation: string;
  business?: string;
  rating: number;
  image?: string;
  earnings?: string;
  position?: number;
}

const WorkerCard = ({
  id,
  name,
  occupation,
  business,
  rating,
  image,
  earnings,
  position,
}: WorkerCardProps) => {
  return (
    <div className="tipme-card flex mb-3">
      {/* Profile Image */}
      <div className="relative">
        {position && (
          <div className="absolute -top-2 -left-2 bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
            {position}
          </div>
        )}
        <div className="w-16 h-16 rounded-full overflow-hidden bg-muted mr-4 flex-shrink-0">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-lg font-bold text-muted-foreground">
              {name.charAt(0)}
            </div>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-card-foreground">{name}</h3>
            <p className="text-sm text-muted-foreground">
              {occupation}
              {business && ` at ${business}`}
            </p>
          </div>
          <div className="flex items-center">
            <Star size={14} className="text-yellow-400 mr-1" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Stats or Actions */}
        <div className="flex justify-between mt-2">
          {earnings && (
            <div className="text-xs text-muted-foreground">
              Earned: <span className="text-primary font-medium">{earnings}</span>
            </div>
          )}
          <div className="flex gap-2">
            <button className="tipme-icon-button p-1.5">
              <Gift size={16} />
            </button>
            <button className="tipme-icon-button p-1.5">
              <Share2 size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerCard;
