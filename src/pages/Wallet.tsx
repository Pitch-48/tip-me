
import React, { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import WalletCard from "@/components/wallet/WalletCard";
import { toast } from "@/hooks/use-toast";

const Wallet = () => {
  const [walletBalance, setWalletBalance] = useState(250.75);

  const handleWithdraw = () => {
    toast({
      title: "Withdraw initiated",
      description: "Your withdrawal request has been submitted."
    });
  };

  const handleDeposit = () => {
    toast({
      title: "Deposit initiated",
      description: "Please complete the deposit process."
    });
  };
  
  return (
    <AppLayout>
      <div className="container max-w-md mx-auto px-4 pt-4">
        <h1 className="text-2xl font-bold mb-6">Wallet</h1>
        
        <WalletCard 
          balance={walletBalance}
          onWithdraw={handleWithdraw}
          onDeposit={handleDeposit}
        />
        
        <div className="tipme-card">
          <h2 className="font-bold mb-4">Transaction History</h2>
          <p className="text-muted-foreground text-center py-6">No recent transactions</p>
        </div>
      </div>
    </AppLayout>
  );
};

export default Wallet;
