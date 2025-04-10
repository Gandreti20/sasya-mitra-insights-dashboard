
import { useState } from "react";
import { Plus, Sprout, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export type Plot = {
  id: string;
  name: string;
  crop: string;
  area: string;
};

type PlotNavigationProps = {
  plots: Plot[];
  activePlot: string;
  setPlots: (plots: Plot[]) => void;
  setActivePlot: (id: string) => void;
  onCreatePlot?: (plot: Plot) => void;
};

export const PlotNavigation = ({ plots, activePlot, setPlots, setActivePlot, onCreatePlot }: PlotNavigationProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newPlotName, setNewPlotName] = useState("");
  const [newPlotCrop, setNewPlotCrop] = useState("");
  const [newPlotArea, setNewPlotArea] = useState("");

  const addNewPlot = () => {
    setIsDialogOpen(true);
  };

  const handleCreatePlot = () => {
    if (!newPlotName.trim()) {
      toast.error("Please enter a plot name");
      return;
    }

    const newPlotId = `plot${Date.now()}`;
    const newPlot = {
      id: newPlotId,
      name: newPlotName,
      crop: newPlotCrop || "New Crop",
      area: newPlotArea || "1.0 acres",
    };
    
    if (onCreatePlot) {
      onCreatePlot(newPlot);
    } else {
      setPlots([...plots, newPlot]);
      setActivePlot(newPlotId);
    }

    setIsDialogOpen(false);
    setNewPlotName("");
    setNewPlotCrop("");
    setNewPlotArea("");
  };

  return (
    <>
      <div className="flex items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-sasya-green/10 text-sasya-green">
                <Sprout className="mr-2 h-4 w-4" />
                <span>Plots</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-1 p-2">
                  {plots.length > 0 ? plots.map((plot) => (
                    <li key={plot.id}>
                      <NavigationMenuLink asChild>
                        <Button
                          variant="ghost"
                          className={`w-full justify-start ${activePlot === plot.id ? "bg-sasya-green/10 text-sasya-green" : ""}`}
                          onClick={() => setActivePlot(plot.id)}
                        >
                          {plot.name}
                          <span className="ml-2 text-xs text-muted-foreground">
                            {plot.crop}
                          </span>
                        </Button>
                      </NavigationMenuLink>
                    </li>
                  )) : (
                    <li>
                      <p className="px-2 py-1.5 text-sm text-muted-foreground">
                        No plots added yet
                      </p>
                    </li>
                  )}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="ml-3 bg-sasya-green/10 text-sasya-green hover:bg-sasya-green/20 hover:text-sasya-green-dark"
          onClick={addNewPlot}
        >
          <Plus className="mr-1 h-4 w-4" />
          Add Plot
        </Button>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Plot</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="plotName" className="text-right">
                Plot Name
              </Label>
              <Input
                id="plotName"
                value={newPlotName}
                onChange={(e) => setNewPlotName(e.target.value)}
                className="col-span-3"
                placeholder="Enter plot name"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="cropType" className="text-right">
                Crop Type
              </Label>
              <Input
                id="cropType"
                value={newPlotCrop}
                onChange={(e) => setNewPlotCrop(e.target.value)}
                className="col-span-3"
                placeholder="Enter crop type (optional)"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="area" className="text-right">
                Area
              </Label>
              <Input
                id="area"
                value={newPlotArea}
                onChange={(e) => setNewPlotArea(e.target.value)}
                className="col-span-3"
                placeholder="Enter area (optional)"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleCreatePlot} className="bg-sasya-green hover:bg-sasya-green-dark">
              Create Plot
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
