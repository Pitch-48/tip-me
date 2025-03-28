
import React from "react";
import { DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react";

interface WalletCardProps {
  balance: number;
  onWithdraw: () => void;
  onDeposit: () => void;
}

const WalletCard = ({ balance, onWithdraw, onDeposit }: WalletCardProps) => {
  return (
    <div className="tipme-card mb-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">My Wallet</h2>
      </div>
      
      <div className="bg-primary/10 rounded-lg p-4 mb-4">
        <div className="text-sm text-muted-foreground mb-1">Current Balance</div>
        <div className="text-3xl font-bold flex items-center">
          <DollarSign size={24} className="text-primary" />
          {balance.toFixed(2)}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={onWithdraw}
          className="tipme-button-secondary py-2"
        >
          <ArrowUpRight size={18} />
          <span>Withdraw</span>
        </button>
        <button
          onClick={onDeposit} 
          className="tipme-button-primary py-2"
        >
          <ArrowDownRight size={18} />
          <span>Deposit</span>
        </button>
      </div>
    </div>
  );
};

export default WalletCard;
