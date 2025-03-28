
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import QrScanner from "@/components/tip/QrScanner";
import TipForm from "@/components/tip/TipForm";
import TipSuccess from "@/components/tip/TipSuccess";
import { toast } from "@/hooks/use-toast";

enum QuickTipState {
  SCAN,
  FORM,
  SUCCESS
}

const QuickTip = () => {
  const navigate = useNavigate();
  const [tipState, setTipState] = useState<QuickTipState>(QuickTipState.SCAN);
  const [workerCode, setWorkerCode] = useState<string>("");
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [tipMessage, setTipMessage] = useState<string>("");
  
  // This would come from API in a real app
  const workerInfo = {
    name: "John Smith",
    occupation: "Bartender",
    image: undefined
  };
  
  const handleScanComplete = (code: string) => {
    setWorkerCode(code);
    setTipState(QuickTipState.FORM);
    toast({
      title: "Worker found",
      description: `Ready to tip ${workerInfo.name}`
    });
  };
  
  const handleTipComplete = (amount: number, message: string) => {
    setTipAmount(amount);
    setTipMessage(message);
    setTipState(QuickTipState.SUCCESS);
  };
  
  const handleClose = () => {
    navigate("/");
  };
  
  const handleRateService = () => {
    toast({
      title: "Thank you!",
      description: "Your rating has been submitted."
    });
    navigate("/");
  };
  
  return (
    <AppLayout>
      {tipState === QuickTipState.SCAN && (
        <QrScanner 
          onScanComplete={handleScanComplete} 
          onClose={handleClose}
        />
      )}
      
      {tipState === QuickTipState.FORM && (
        <TipForm
          recipientName={workerInfo.name}
          recipientOccupation={workerInfo.occupation}
          recipientImage={workerInfo.image}
          onTipComplete={handleTipComplete}
          onClose={handleClose}
        />
      )}
      
      {tipState === QuickTipState.SUCCESS && (
        <TipSuccess
          amount={tipAmount}
          recipientName={workerInfo.name}
          recipientOccupation={workerInfo.occupation}
          date={new Date()}
          message={tipMessage}
          onClose={handleClose}
          onRateService={handleRateService}
        />
      )}
    </AppLayout>
  );
};

export default QuickTip;
