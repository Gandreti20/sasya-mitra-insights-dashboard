
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const MotorStatus = () => {
  // Mock data for motor status
  const motorData = {
    voltage: 230,
    current: 4.5,
    powerFactor: 0.92,
    totalPower: 950,
    status: "running",
  };

  return (
    <Card>
      <CardHeader className="bg-sasya-blue/10 pb-2">
        <CardTitle className="text-lg">Motor Status</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <div className="p-2 bg-white rounded-md shadow-sm">
            <p className="text-xs text-muted-foreground">Voltage</p>
            <p className="text-lg font-semibold">{motorData.voltage} <span className="text-xs font-normal">V</span></p>
          </div>
          <div className="p-2 bg-white rounded-md shadow-sm">
            <p className="text-xs text-muted-foreground">Current</p>
            <p className="text-lg font-semibold">{motorData.current} <span className="text-xs font-normal">A</span></p>
          </div>
          <div className="p-2 bg-white rounded-md shadow-sm">
            <p className="text-xs text-muted-foreground">Power Factor</p>
            <p className="text-lg font-semibold">{motorData.powerFactor}</p>
          </div>
          <div className="p-2 bg-white rounded-md shadow-sm">
            <p className="text-xs text-muted-foreground">Total Power</p>
            <p className="text-lg font-semibold">{motorData.totalPower} <span className="text-xs font-normal">W</span></p>
          </div>
        </div>
        <div className="mt-2 flex items-center">
          <div className={`w-3 h-3 rounded-full mr-2 ${motorData.status === "running" ? "bg-green-500 animate-pulse-slow" : "bg-red-500"}`}></div>
          <p className="text-sm capitalize">{motorData.status}</p>
        </div>
      </CardContent>
    </Card>
  );
};
