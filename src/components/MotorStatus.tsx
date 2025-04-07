
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Power, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

export const MotorStatus = () => {
  const [isMotorOn, setIsMotorOn] = useState(false);
  
  // Mock data for three-phase motor status
  const motorData = {
    phases: [
      {
        id: 1,
        voltage: 230,
        current: 4.5,
        powerFactor: 0.92,
        totalPower: 950,
      },
      {
        id: 2,
        voltage: 228,
        current: 4.3,
        powerFactor: 0.91,
        totalPower: 900,
      },
      {
        id: 3,
        voltage: 232,
        current: 4.6,
        powerFactor: 0.93,
        totalPower: 980,
      }
    ],
    status: isMotorOn ? "running" : "stopped",
    faults: [
      { id: 1, severity: "warning", message: "Phase 2 voltage fluctuation detected" }
    ]
  };

  const toggleMotor = () => {
    setIsMotorOn(!isMotorOn);
    toast.success(`Motor is now ${!isMotorOn ? "ON" : "OFF"}`, {
      description: `Water pump motor has been ${!isMotorOn ? "started" : "stopped"}.`,
    });
  };

  return (
    <Card>
      <CardHeader className="bg-sasya-green/10 pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-lg">Motor Status</CardTitle>
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${isMotorOn ? "bg-green-500 animate-pulse-slow" : "bg-red-500"}`}></div>
          <p className="text-sm capitalize">{motorData.status}</p>
          <Button 
            onClick={toggleMotor} 
            variant="outline" 
            size="sm"
            className={`ml-2 ${isMotorOn ? "bg-red-100 hover:bg-red-200 text-red-700" : "bg-sasya-green/20 hover:bg-sasya-green/30 text-sasya-green"}`}
          >
            <Power className="mr-1 h-4 w-4" />
            {isMotorOn ? "Turn OFF" : "Turn ON"}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        {motorData.faults.length > 0 && (
          <Alert variant="destructive" className="mb-4">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Motor Faults Detected</AlertTitle>
            <AlertDescription>
              {motorData.faults.map(fault => (
                <div key={fault.id} className="text-sm">
                  {fault.message}
                </div>
              ))}
            </AlertDescription>
          </Alert>
        )}
        
        <div className="grid grid-cols-1 gap-4">
          {motorData.phases.map(phase => (
            <div key={phase.id} className="border border-muted rounded-lg p-3">
              <h3 className="font-medium mb-2 text-sasya-green">Phase {phase.id}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <div className="p-2 bg-white rounded-md shadow-sm">
                  <p className="text-xs text-muted-foreground">Voltage</p>
                  <p className="text-lg font-semibold">{phase.voltage} <span className="text-xs font-normal">V</span></p>
                </div>
                <div className="p-2 bg-white rounded-md shadow-sm">
                  <p className="text-xs text-muted-foreground">Current</p>
                  <p className="text-lg font-semibold">{phase.current} <span className="text-xs font-normal">A</span></p>
                </div>
                <div className="p-2 bg-white rounded-md shadow-sm">
                  <p className="text-xs text-muted-foreground">Power Factor</p>
                  <p className="text-lg font-semibold">{phase.powerFactor}</p>
                </div>
                <div className="p-2 bg-white rounded-md shadow-sm">
                  <p className="text-xs text-muted-foreground">Total Power</p>
                  <p className="text-lg font-semibold">{phase.totalPower} <span className="text-xs font-normal">W</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
