
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

type Alert = {
  id: number;
  type: "warning" | "critical" | "info";
  message: string;
  timestamp: string;
};

export const AlertSection = () => {
  // Mock alerts data
  const alerts: Alert[] = [
    {
      id: 1,
      type: "warning",
      message: "Phase 2 voltage fluctuation detected",
      timestamp: "Today, 10:23 AM"
    },
    {
      id: 2,
      type: "info",
      message: "Gate valve automatically opened due to soil moisture levels",
      timestamp: "Today, 09:15 AM"
    },
    {
      id: 3,
      type: "critical",
      message: "High motor temperature detected - maintenance recommended",
      timestamp: "Yesterday, 06:45 PM"
    }
  ];

  const getAlertStyle = (type: Alert["type"]) => {
    switch (type) {
      case "warning":
        return "bg-amber-50 border-amber-200 text-amber-700";
      case "critical":
        return "bg-red-50 border-red-200 text-red-700";
      case "info":
        return "bg-blue-50 border-blue-200 text-blue-700";
      default:
        return "bg-gray-50 border-gray-200 text-gray-700";
    }
  };

  return (
    <Card>
      <CardHeader className="bg-sasya-green/10 pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          System Alerts
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        {alerts.length > 0 ? (
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={`p-3 rounded-md border ${getAlertStyle(alert.type)}`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 mt-0.5" />
                    <div>
                      <p className="font-medium">{alert.message}</p>
                      <p className="text-xs opacity-80">{alert.timestamp}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-6 text-center">
            <CheckCircle2 className="h-12 w-12 text-sasya-green mb-2" />
            <h3 className="font-medium text-lg">All Systems Normal</h3>
            <p className="text-muted-foreground text-sm">No alerts at this time</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
