
import React, { useState } from "react";
import { QrCode, Scan, X } from "lucide-react";

interface QrScannerProps {
  onScanComplete: (result: string) => void;
  onClose: () => void;
}

const QrScanner = ({ onScanComplete, onClose }: QrScannerProps) => {
  const [isScanning, setIsScanning] = useState(false);
  const [manualCode, setManualCode] = useState("");

  // Mock scanning functionality
  const startScanning = () => {
    setIsScanning(true);
    
    // In a real implementation, we would connect to a camera API
    // For now, we'll simulate scanning after a delay
    setTimeout(() => {
      setIsScanning(false);
      onScanComplete("WORKER12345");
    }, 3000);
  };
  
  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (manualCode.trim()) {
      onScanComplete(manualCode);
    }
  };

  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Scan QR Code</h2>
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-secondary"
        >
          <X size={24} />
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        {isScanning ? (
          <div className="relative w-64 h-64 bg-muted rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 border-2 border-primary rounded-lg relative">
                <div className="absolute top-0 left-0 w-full border-t-2 border-primary animate-pulse"></div>
              </div>
            </div>
            <div className="absolute bottom-4 left-0 right-0 text-center text-sm">
              Scanning...
            </div>
          </div>
        ) : (
          <div className="w-64 h-64 bg-muted rounded-lg flex flex-col items-center justify-center">
            <QrCode size={64} className="text-muted-foreground mb-4" />
            <button
              onClick={startScanning}
              className="tipme-button-primary mb-2"
            >
              <Scan size={18} />
              <span>Start Scanning</span>
            </button>
          </div>
        )}
      </div>

      <div className="mt-4">
        <div className="relative flex items-center">
          <div className="flex-grow border-t border-muted"></div>
          <span className="flex-shrink mx-4 text-muted-foreground">or</span>
          <div className="flex-grow border-t border-muted"></div>
        </div>
        
        <form onSubmit={handleManualSubmit} className="mt-4">
          <div className="mb-4">
            <label htmlFor="tip-code" className="tipme-label block mb-2">
              Enter Tip Code Manually
            </label>
            <input
              type="text"
              id="tip-code"
              placeholder="e.g., WORKER12345"
              className="tipme-input w-full"
              value={manualCode}
              onChange={(e) => setManualCode(e.target.value)}
            />
          </div>
          <button type="submit" className="tipme-button-secondary w-full">
            Submit Code
          </button>
        </form>
      </div>
    </div>
  );
};

export default QrScanner;
