
import React, { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import WalletCard from "@/components/wallet/WalletCard";
import { QrCode, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

// Mock data for the dashboard
const favoriteWorkers = [
  { id: "w1", name: "John Smith", occupation: "Bartender" },
  { id: "w2", name: "Emma Lee", occupation: "Server" },
];

const topWorkers = [
  { id: "w3", name: "Alex Johnson", occupation: "Bartender", earnings: 1240.50, position: 1 },
  { id: "w4", name: "Maria Garcia", occupation: "Server", earnings: 985.75, position: 2 },
];

const recentTransactions = [
  { id: "t1", amount: 10, recipient: "John Smith", date: new Date(Date.now() - 24 * 60 * 60 * 1000) },
  { id: "t2", amount: 5, recipient: "Emma Lee", date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) },
];

const Index = () => {
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

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(date);
  };

  return (
    <AppLayout>
      <div className="container max-w-md mx-auto px-4 pt-4 pb-20">
        <h1 className="text-2xl font-bold mb-6">Welcome to TipMe</h1>
        
        <WalletCard 
          balance={walletBalance}
          onWithdraw={handleWithdraw}
          onDeposit={handleDeposit}
        />
        
        <div className="bg-tipme-blue text-white rounded-lg p-4 mb-6 flex items-center justify-center shadow-md">
          <div className="text-center">
            <h2 className="font-bold mb-2">Quick Tip</h2>
            <p className="text-sm opacity-80 mb-4">
              Scan a QR code or enter a tip code to quickly send a tip
            </p>
            <Link to="/quick-tip" className="bg-white text-tipme-blue hover:bg-opacity-90 transition-colors rounded-full px-6 py-3 font-medium shadow-md flex items-center justify-center gap-2 pulse-button">
              <QrCode size={18} />
              <span>Scan to Tip</span>
            </Link>
          </div>
        </div>

        {/* Favorites Section */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-bold text-lg">Favorites</h2>
            <Link to="/favorites" className="text-sm text-tipme-blue">View All</Link>
          </div>
          
          {favoriteWorkers.length > 0 ? (
            <div className="grid grid-cols-2 gap-3">
              {favoriteWorkers.map(worker => (
                <div key={worker.id} className="tipme-card p-3 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-tipme-blue/20 flex items-center justify-center text-xl font-bold mb-2">
                    {worker.name.charAt(0)}
                  </div>
                  <div className="text-center">
                    <h3 className="font-medium text-sm">{worker.name}</h3>
                    <p className="text-xs text-muted-foreground">{worker.occupation}</p>
                  </div>
                  <Link 
                    to={`/quick-tip?worker=${worker.id}`} 
                    className="mt-2 text-xs bg-tipme-gold text-tipme-blue-dark px-3 py-1.5 rounded-full font-medium"
                  >
                    Tip Now
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="tipme-card text-center py-6">
              <p className="text-muted-foreground">Add favorite workers for quick tipping</p>
            </div>
          )}
        </div>

        {/* Leaderboard Preview */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-bold text-lg">Top Earners</h2>
            <Link to="/leaderboard" className="text-sm text-tipme-blue">Full Ranking</Link>
          </div>
          
          <div className="tipme-card">
            {topWorkers.map((worker, index) => (
              <div key={worker.id} className={`flex items-center justify-between py-2 ${index !== topWorkers.length - 1 ? 'border-b border-border' : ''}`}>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-tipme-gold flex items-center justify-center font-bold text-tipme-blue-dark mr-3">
                    {worker.position}
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">{worker.name}</h3>
                    <p className="text-xs text-muted-foreground">{worker.occupation}</p>
                  </div>
                </div>
                <div className="numeric font-medium">${worker.earnings.toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-bold text-lg">Recent Tips</h2>
            <Link to="/wallet" className="text-sm text-tipme-blue">View All</Link>
          </div>
          
          <div className="tipme-card">
            {recentTransactions.length > 0 ? (
              <>
                {recentTransactions.map((transaction, index) => (
                  <div key={transaction.id} className={`flex items-center justify-between py-2 ${index !== recentTransactions.length - 1 ? 'border-b border-border' : ''}`}>
                    <div>
                      <h3 className="font-medium text-sm">{transaction.recipient}</h3>
                      <p className="text-xs text-muted-foreground">{formatDate(transaction.date)}</p>
                    </div>
                    <div className="numeric font-medium text-tipme-green">${transaction.amount.toFixed(2)}</div>
                  </div>
                ))}
              </>
            ) : (
              <p className="text-muted-foreground text-center py-4">No recent transactions</p>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
