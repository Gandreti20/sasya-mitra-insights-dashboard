
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
import { toast } from "sonner";

type Plot = {
  id: string;
  name: string;
  crop: string;
  area: string;
};

export const PlotNavigation = () => {
  const [plots, setPlots] = useState<Plot[]>([
    { id: "plot1", name: "North Field", crop: "Mango", area: "2.5 acres" },
    { id: "plot2", name: "South Field", crop: "Wheat", area: "3.2 acres" },
  ]);

  const [activePlot, setActivePlot] = useState<string>("plot1");

  const addNewPlot = () => {
    const newPlotId = `plot${plots.length + 1}`;
    const newPlot = {
      id: newPlotId,
      name: `Plot ${plots.length + 1}`,
      crop: "New Crop",
      area: "1.0 acres",
    };
    
    setPlots([...plots, newPlot]);
    toast.success("New plot added", {
      description: `${newPlot.name} has been added to your dashboard.`,
    });
  };

  return (
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
                {plots.map((plot) => (
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
                ))}
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
  );
};
