
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { PlotNavigation, Plot } from "@/components/PlotNavigation";
import { PlotInterface } from "@/components/PlotInterface";

const Index = () => {
  const [plots, setPlots] = useState<Plot[]>([
    { id: "plot1", name: "North Field", crop: "Mango", area: "2.5 acres" },
    { id: "plot2", name: "South Field", crop: "Wheat", area: "3.2 acres" },
  ]);

  const [activePlot, setActivePlot] = useState<string>("plot1");

  const currentPlot = plots.find(plot => plot.id === activePlot) || plots[0];

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
          />
        </div>
        
        <PlotInterface plot={currentPlot} />
      </main>
    </div>
  );
};

export default Index;
