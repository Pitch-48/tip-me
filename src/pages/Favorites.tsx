
import React from "react";
import AppLayout from "@/components/layout/AppLayout";

const Favorites = () => {
  return (
    <AppLayout>
      <div className="container max-w-md mx-auto px-4 pt-4">
        <h1 className="text-2xl font-bold mb-6">Favorites</h1>
        <p className="text-muted-foreground">Your favorite workers will appear here.</p>
      </div>
    </AppLayout>
  );
};

export default Favorites;
