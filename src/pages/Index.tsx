
import { useState, useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { PlotNavigation, Plot } from "@/components/PlotNavigation";
import { PlotInterface } from "@/components/PlotInterface";
import { toast } from "sonner";

// Extended Plot type to include motor and valve section data
type ExtendedPlot = Plot & {
  hasMotorSection?: boolean;
  motorSectionName?: string;
  valveSections?: {
    id: string;
    name: string;
    isExpanded: boolean;
  }[];
};

const Index = () => {
  const [plots, setPlots] = useState<ExtendedPlot[]>([]);
  const [activePlot, setActivePlot] = useState<string>("");
  const currentPlot = plots.find(plot => plot.id === activePlot);

  // Add some initial state management
  useEffect(() => {
    if (plots.length > 0 && !activePlot) {
      setActivePlot(plots[0].id);
    }
  }, [plots, activePlot]);

  const handleCreatePlot = (plot: Plot) => {
    // Initialize the plot with empty motor and valve sections
    const extendedPlot: ExtendedPlot = {
      ...plot,
      hasMotorSection: false,
      valveSections: []
    };
    
    setPlots([...plots, extendedPlot]);
    setActivePlot(plot.id);
    toast.success("New plot added", {
      description: `${plot.name} has been added to your dashboard.`,
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />
      <main className="container py-6">
        <div className="mb-6">
          <PlotNavigation 
            plots={plots} 
            activePlot={activePlot} 
            setPlots={setPlots} 
            setActivePlot={setActivePlot}
            onCreatePlot={handleCreatePlot}
          />
        </div>
        
        {plots.length === 0 ? (
          <div className="text-center p-8 bg-white rounded-lg shadow-sm border">
            <h2 className="text-xl font-medium mb-2">Welcome to Sasya Mitra</h2>
            <p className="text-muted-foreground mb-4">
              Get started by adding a plot to monitor your farm.
            </p>
          </div>
        ) : (
          <PlotInterface plot={currentPlot as Plot} />
        )}
      </main>
    </div>
  );
};

export default Index;
