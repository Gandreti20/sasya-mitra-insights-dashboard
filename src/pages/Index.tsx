
import { useState, useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { PlotNavigation, Plot } from "@/components/PlotNavigation";
import { PlotInterface } from "@/components/PlotInterface";
import { toast } from "sonner";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const Index = () => {
  const [plots, setPlots] = useState<Plot[]>([]);
  const [activePlot, setActivePlot] = useState<string>("");
  const [plotToDelete, setPlotToDelete] = useState<string | null>(null);
  const currentPlot = plots.find(plot => plot.id === activePlot);

  useEffect(() => {
    if (plots.length > 0 && !activePlot) {
      setActivePlot(plots[0].id);
    }
    
    if (plots.length > 0 && activePlot && !plots.find(p => p.id === activePlot)) {
      setActivePlot(plots[0].id);
    }
    
    if (plots.length === 0) {
      setActivePlot("");
    }
  }, [plots, activePlot]);

  const handleCreatePlot = (plot: Plot) => {
    // Initialize each new plot with empty data structures
    // but don't add any sections by default
    const newPlot: Plot = {
      ...plot,
      hasMotorSection: false,
      motorSectionName: "",
      valveSections: []
    };
    
    setPlots([...plots, newPlot]);
    setActivePlot(newPlot.id);
    toast.success("New plot added", {
      description: `${plot.name} has been added to your dashboard.`,
    });
  };
  
  const handleDeletePlot = (plotId: string) => {
    const plotToDelete = plots.find(p => p.id === plotId);
    if (!plotToDelete) return;
    
    const updatedPlots = plots.filter(p => p.id !== plotId);
    setPlots(updatedPlots);
    
    toast.success("Plot deleted", {
      description: `${plotToDelete.name} has been deleted from your dashboard.`,
    });
    setPlotToDelete(null);
  };
  
  const handleUpdatePlot = (updatedPlot: Plot) => {
    const updatedPlots = plots.map(plot => 
      plot.id === updatedPlot.id ? updatedPlot : plot
    );
    setPlots(updatedPlots);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />
      <main className="container py-6">
        <div className="mb-6 flex justify-between items-center">
          <PlotNavigation 
            plots={plots} 
            activePlot={activePlot} 
            setPlots={setPlots} 
            setActivePlot={setActivePlot}
            onCreatePlot={handleCreatePlot}
          />
          
          {activePlot && (
            <Button
              variant="outline"
              size="sm"
              className="text-red-500 hover:text-red-700 hover:bg-red-100 border-red-200"
              onClick={() => setPlotToDelete(activePlot)}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete Plot
            </Button>
          )}
        </div>
        
        {plots.length === 0 ? (
          <div className="text-center p-8 bg-white rounded-lg shadow-sm border">
            <h2 className="text-xl font-medium mb-2">Welcome to Sasya Mitra</h2>
            <p className="text-muted-foreground mb-4">
              Get started by adding a plot to monitor your farm.
            </p>
          </div>
        ) : (
          <PlotInterface 
            plot={currentPlot as Plot} 
            onUpdatePlot={handleUpdatePlot}
          />
        )}
      </main>
      
      <AlertDialog open={!!plotToDelete} onOpenChange={(open) => !open && setPlotToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Plot</AlertDialogTitle>
            <AlertDialogDescription>
              This will delete the plot and all its sections permanently.
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-500 hover:bg-red-600 text-white"
              onClick={() => plotToDelete && handleDeletePlot(plotToDelete)}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Index;
