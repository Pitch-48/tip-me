
import React, { useState } from "react";
import { DollarSign, Send, X } from "lucide-react";

interface TipFormProps {
  recipientName: string;
  recipientOccupation?: string;
  recipientImage?: string;
  onTipComplete: (amount: number, message: string) => void;
  onClose: () => void;
}

const TipForm = ({
  recipientName,
  recipientOccupation,
  recipientImage,
  onTipComplete,
  onClose,
}: TipFormProps) => {
  const [amount, setAmount] = useState<number>(5);
  const [message, setMessage] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  
  const suggestedAmounts = [2, 5, 10, 15, 20];
  
  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setAmount(value);
    } else {
      setAmount(0);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount > 0) {
      setIsProcessing(true);
      
      // Simulate payment processing
      setTimeout(() => {
        setIsProcessing(false);
        onTipComplete(amount, message);
      }, 1500);
    }
  };

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Send Tip</h2>
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-secondary"
          disabled={isProcessing}
        >
          <X size={24} />
        </button>
      </div>

      <div className="flex-1 overflow-auto">
        <form onSubmit={handleSubmit}>
          {/* Recipient Info */}
          <div className="tipme-card mb-6 flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-muted mr-3">
              {recipientImage ? (
                <img
                  src={recipientImage}
                  alt={recipientName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-lg font-bold text-muted-foreground">
                  {recipientName.charAt(0)}
                </div>
              )}
            </div>
            <div>
              <h3 className="font-bold">{recipientName}</h3>
              {recipientOccupation && (
                <p className="text-sm text-muted-foreground">{recipientOccupation}</p>
              )}
            </div>
          </div>

          {/* Amount Selection */}
          <div className="tipme-card mb-6">
            <h3 className="font-medium mb-3">Select Amount</h3>
            <div className="grid grid-cols-5 gap-2 mb-4">
              {suggestedAmounts.map((suggestedAmount) => (
                <button
                  key={suggestedAmount}
                  type="button"
                  className={`p-2 rounded-lg font-medium ${
                    amount === suggestedAmount
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground"
                  }`}
                  onClick={() => setAmount(suggestedAmount)}
                >
                  ${suggestedAmount}
                </button>
              ))}
            </div>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <DollarSign size={18} className="text-muted-foreground" />
              </div>
              <input
                type="number"
                min="0.01"
                step="0.01"
                className="tipme-input pl-9 w-full"
                placeholder="Custom amount"
                value={amount || ""}
                onChange={handleCustomAmount}
              />
            </div>
          </div>

          {/* Optional Message */}
          <div className="tipme-card mb-6">
            <h3 className="font-medium mb-3">Add Message (Optional)</h3>
            <textarea
              className="tipme-input w-full resize-none"
              rows={3}
              placeholder="Thanks for your great service!"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="tipme-button-primary w-full mb-4"
            disabled={isProcessing || amount <= 0}
          >
            {isProcessing ? (
              <>
                <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                Processing...
              </>
            ) : (
              <>
                <Send size={18} />
                Send ${amount ? amount.toFixed(2) : "0.00"} Tip
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TipForm;
