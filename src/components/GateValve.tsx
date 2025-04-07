
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const GateValve = () => {
  const [isValveOpen, setIsValveOpen] = useState(false);

  const toggleValve = () => {
    setIsValveOpen(!isValveOpen);
    toast.success(`Valve is now ${!isValveOpen ? "open" : "closed"}`, {
      description: `Water flow has been ${!isValveOpen ? "started" : "stopped"}.`,
    });
  };

  return (
    <Card>
      <CardHeader className="bg-sasya-green/10 pb-2">
        <CardTitle className="text-lg">Gate Valve Control</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4 relative">
            <div className={`w-20 h-20 rounded-full border-4 ${isValveOpen ? "border-sasya-green animate-pulse-slow" : "border-red-500"} flex items-center justify-center`}>
              <div className={`w-12 h-12 rounded-full ${isValveOpen ? "bg-sasya-green/60" : "bg-red-500/60"}`}></div>
            </div>
            <p className="mt-2 text-center text-sm font-medium">Valve {isValveOpen ? "Open" : "Closed"}</p>
          </div>
          <Button
            onClick={toggleValve}
            className={`w-full ${isValveOpen ? "bg-red-500 hover:bg-red-600" : "bg-sasya-green hover:bg-sasya-green-dark"}`}
          >
            {isValveOpen ? "Close Valve" : "Open Valve"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
