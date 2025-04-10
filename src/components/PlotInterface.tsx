
import { useState } from "react";
import { MotorStatus } from "@/components/MotorStatus";
import { GateValve } from "@/components/GateValve";
import { PlantDiagram } from "@/components/PlantDiagram";
import { PredictionTable } from "@/components/PredictionTable";
import { AlertSection } from "@/components/AlertSection";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Plot } from "./PlotNavigation";

type ValveSection = {
  id: string;
  name: string;
  isExpanded: boolean;
};

type PlotInterfaceProps = {
  plot: Plot;
};

export const PlotInterface = ({ plot }: PlotInterfaceProps) => {
  const [customName, setCustomName] = useState("");
  const [motorSectionName, setMotorSectionName] = useState("");
  const [isMotorDialogOpen, setIsMotorDialogOpen] = useState(false);
  const [hasMotorSection, setHasMotorSection] = useState(false);
  
  const [isValveDialogOpen, setIsValveDialogOpen] = useState(false);
  const [valveSections, setValveSections] = useState<ValveSection[]>([]);
  
  const [isMotorExpanded, setIsMotorExpanded] = useState(true);

  const handleCreateMotorSection = () => {
    if (customName.trim()) {
      setMotorSectionName(`Motor Status - ${customName}`);
      setHasMotorSection(true);
      toast.success("Motor section created", {
        description: `Motor section for ${plot.name} has been created.`,
      });
      setCustomName("");
      setIsMotorDialogOpen(false);
    } else {
      toast.error("Please enter a name");
    }
  };

  const handleCreateValveSection = () => {
    if (!hasMotorSection) {
      toast.error("Please create motor section first");
      return;
    }
    
    if (customName.trim()) {
      const newValveId = `valve-${Date.now()}`;
      const newValveSection: ValveSection = {
        id: newValveId,
        name: `Valve Control - ${customName}`,
        isExpanded: true
      };
      
      setValveSections([...valveSections, newValveSection]);
      
      toast.success("Valve section created", {
        description: `Valve control section has been created for ${plot.name}.`,
      });
      setCustomName("");
      setIsValveDialogOpen(false);
    } else {
      toast.error("Please enter a name");
    }
  };

  const toggleValveExpansion = (valveId: string) => {
    setValveSections(valveSections.map(valve => 
      valve.id === valveId 
        ? { ...valve, isExpanded: !valve.isExpanded } 
        : valve
    ));
  };

  if (!plot) {
    return (
      <Card>
        <CardContent className="pt-6 pb-6 text-center">
          <p>Please select or create a plot to view details.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-6 mb-6">
        {!hasMotorSection && (
          <Card>
            <CardHeader className="bg-sasya-green/10 pb-2">
              <CardTitle className="text-lg">Create Motor Section</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground mb-4">
                Create a motor status section to monitor your equipment for this plot.
              </p>
              <Button
                className="w-full bg-sasya-green hover:bg-sasya-green-dark"
                onClick={() => setIsMotorDialogOpen(true)}
              >
                Create Motor Section
              </Button>
            </CardContent>
          </Card>
        )}

        {hasMotorSection && (
          <Collapsible 
            open={isMotorExpanded} 
            onOpenChange={setIsMotorExpanded}
            className="w-full"
          >
            <Card>
              <CardHeader className="bg-sasya-green/10 pb-2 flex flex-row items-center justify-between">
                <CardTitle className="text-lg">{motorSectionName}</CardTitle>
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-9 p-0"
                  >
                    {isMotorExpanded ? (
                      <ChevronUp className="h-4 w-4 text-sasya-green" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-sasya-green" />
                    )}
                  </Button>
                </CollapsibleTrigger>
              </CardHeader>
              <CollapsibleContent>
                <CardContent className="pt-4">
                  <MotorStatus />
                  <div className="mt-4">
                    <AlertSection />
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        )}
        
        {hasMotorSection && (
          <Card>
            <CardHeader className="bg-sasya-green/10 pb-2">
              <CardTitle className="text-lg">Create Valve Section</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground mb-4">
                Create a valve control section to manage irrigation for this plot.
              </p>
              <Button
                className="w-full bg-sasya-green hover:bg-sasya-green-dark"
                onClick={() => setIsValveDialogOpen(true)}
              >
                Create Valve Section
              </Button>
            </CardContent>
          </Card>
        )}
      
        {valveSections.map((valve) => (
          <Collapsible 
            key={valve.id}
            open={valve.isExpanded} 
            onOpenChange={() => toggleValveExpansion(valve.id)}
            className="w-full mb-6"
          >
            <Card>
              <CardHeader className="bg-sasya-green/10 pb-2 flex flex-row items-center justify-between">
                <CardTitle className="text-lg">{valve.name}</CardTitle>
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-9 p-0"
                  >
                    {valve.isExpanded ? (
                      <ChevronUp className="h-4 w-4 text-sasya-green" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-sasya-green" />
                    )}
                  </Button>
                </CollapsibleTrigger>
              </CardHeader>
              <CollapsibleContent>
                <CardContent className="pt-4">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                      <GateValve />
                    </div>
                    <div className="lg:col-span-2">
                      <PlantDiagram />
                    </div>
                  </div>
                  <div className="mt-6">
                    <PredictionTable />
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        ))}
      </div>

      {/* Motor Section Creation Dialog */}
      <Dialog open={isMotorDialogOpen} onOpenChange={setIsMotorDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Motor Status Section</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="motorName" className="text-right">
                Section Name
              </Label>
              <Input
                id="motorName"
                value={customName}
                onChange={(e) => setCustomName(e.target.value)}
                className="col-span-3"
                placeholder="Enter custom name"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsMotorDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleCreateMotorSection} className="bg-sasya-green hover:bg-sasya-green-dark">
              Create
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Valve Section Create Dialog */}
      <Dialog open={isValveDialogOpen} onOpenChange={setIsValveDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Valve Control Section</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="valveName" className="text-right">
                Section Name
              </Label>
              <Input
                id="valveName"
                value={customName}
                onChange={(e) => setCustomName(e.target.value)}
                className="col-span-3"
                placeholder="Enter custom name"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsValveDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleCreateValveSection} className="bg-sasya-green hover:bg-sasya-green-dark">
              Create
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
