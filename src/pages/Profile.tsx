
import React from "react";
import AppLayout from "@/components/layout/AppLayout";
import { toast } from "@/hooks/use-toast";

const Profile = () => {
  return (
    <AppLayout>
      <div className="container max-w-md mx-auto px-4 pt-4">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>
        <div className="tipme-card">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-bold mr-4">
              JS
            </div>
            <div>
              <h2 className="font-bold text-lg">John Smith</h2>
              <p className="text-muted-foreground">john.smith@example.com</p>
            </div>
          </div>
          
          <button 
            onClick={() => toast({ title: "Coming soon", description: "This feature is not yet available." })}
            className="tipme-button-secondary w-full"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </AppLayout>
  );
};

export default Profile;
