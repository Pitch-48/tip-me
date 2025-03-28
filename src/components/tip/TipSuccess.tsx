
import React from "react";
import { Check, ChevronRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface TipSuccessProps {
  amount: number;
  recipientName: string;
  recipientOccupation?: string;
  date: Date;
  message?: string;
  onClose: () => void;
  onRateService: () => void;
}

const TipSuccess = ({
  amount,
  recipientName,
  recipientOccupation,
  date,
  message,
  onClose,
  onRateService,
}: TipSuccessProps) => {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).format(date);

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col p-4">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
          <Check size={40} className="text-green-500" />
        </div>
        
        <h2 className="text-2xl font-bold mb-1">Tip Sent!</h2>
        <p className="text-muted-foreground mb-6">Your tip has been sent successfully</p>
        
        <div className="tipme-card w-full max-w-sm mb-6">
          <div className="border-b border-border pb-3 mb-3">
            <div className="text-3xl font-bold text-center mb-1">${amount.toFixed(2)}</div>
            <div className="text-center text-muted-foreground">to {recipientName}</div>
            {recipientOccupation && (
              <div className="text-center text-sm text-muted-foreground">{recipientOccupation}</div>
            )}
          </div>
          
          <div className="text-sm">
            <div className="flex justify-between mb-2">
              <span className="text-muted-foreground">Date:</span>
              <span>{formattedDate}</span>
            </div>
            
            {message && (
              <div className="bg-muted p-3 rounded-lg text-muted-foreground italic mb-3">
                "{message}"
              </div>
            )}
          </div>
        </div>
        
        <button 
          onClick={onRateService}
          className="tipme-button-secondary w-full max-w-sm mb-3"
        >
          <Star size={18} />
          <span>Rate Service</span>
        </button>
        
        <Link 
          to="/"
          className="w-full max-w-sm text-center py-2 text-primary"
          onClick={onClose}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default TipSuccess;
