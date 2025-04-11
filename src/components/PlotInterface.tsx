
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
import { ChevronDown, ChevronUp, Plus, Trash2 } from "lucide-react";
import { Plot } from "./PlotNavigation";

type ValveSection = {
  id: string;
  name: string;
  isExpanded: boolean;
};

type PlotInterfaceProps = {
  plot: Plot;
  onUpdatePlot?: (updatedPlot: any) => void;
};

export const PlotInterface = ({ plot, onUpdatePlot }: PlotInterfaceProps) => {
  const [customName, setCustomName] = useState("");
  const [motorSectionName, setMotorSectionName] = useState(plot.motorSectionName || "");
  const [isMotorDialogOpen, setIsMotorDialogOpen] = useState(false);
  const [hasMotorSection, setHasMotorSection] = useState(plot.hasMotorSection || false);
  
  const [isValveDialogOpen, setIsValveDialogOpen] = useState(false);
  const [valveSections, setValveSections] = useState<ValveSection[]>(plot.valveSections || []);
  
  const [isMotorExpanded, setIsMotorExpanded] = useState(true);
  
  // Delete confirmation dialogs
  const [isDeleteMotorDialogOpen, setIsDeleteMotorDialogOpen] = useState(false);
  const [deleteValveId, setDeleteValveId] = useState<string | null>(null);

  const handleCreateMotorSection = () => {
    if (customName.trim()) {
      const newMotorName = `Motor Status - ${customName}`;
      setMotorSectionName(newMotorName);
      setHasMotorSection(true);
      
      if (onUpdatePlot) {
        onUpdatePlot({
          ...plot,
          hasMotorSection: true,
          motorSectionName: newMotorName
        });
      }
      
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
      
      const updatedValveSections = [...valveSections, newValveSection];
      setValveSections(updatedValveSections);
      
      if (onUpdatePlot) {
        onUpdatePlot({
          ...plot,
          valveSections: updatedValveSections
        });
      }
      
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
    const updatedValveSections = valveSections.map(valve => 
      valve.id === valveId 
        ? { ...valve, isExpanded: !valve.isExpanded } 
        : valve
    );
    
    setValveSections(updatedValveSections);
    
    if (onUpdatePlot) {
      onUpdatePlot({
        ...plot,
        valveSections: updatedValveSections
      });
    }
  };
  
  const handleDeleteMotorSection = () => {
    setHasMotorSection(false);
    setMotorSectionName("");
    // When deleting motor section, also delete all valve sections
    setValveSections([]);
    
    if (onUpdatePlot) {
      onUpdatePlot({
        ...plot,
        hasMotorSection: false,
        motorSectionName: "",
        valveSections: []
      });
    }
    
    toast.success("Motor section deleted", {
      description: `Motor section and all valve sections for ${plot.name} have been deleted.`,
    });
    setIsDeleteMotorDialogOpen(false);
  };
  
  const handleDeleteValveSection = (valveId: string) => {
    const updatedValveSections = valveSections.filter(valve => valve.id !== valveId);
    setValveSections(updatedValveSections);
    
    if (onUpdatePlot) {
      onUpdatePlot({
        ...plot,
        valveSections: updatedValveSections
      });
    }
    
    toast.success("Valve section deleted", {
      description: `Valve section has been deleted from ${plot.name}.`,
    });
    setDeleteValveId(null);
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
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-500 hover:text-red-700 hover:bg-red-100"
                    onClick={() => setIsDeleteMotorDialogOpen(true)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
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
                </div>
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
          <Card className="mb-4">
            <CardHeader className="bg-sasya-green/10 pb-2 flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Valve Sections</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-1 text-sasya-green hover:text-sasya-green-dark"
                onClick={() => setIsValveDialogOpen(true)}
              >
                <Plus className="h-4 w-4" />
                <span>Add Valve</span>
              </Button>
            </CardHeader>
            <CardContent className="pt-4">
              {valveSections.length === 0 ? (
                <div className="text-center py-6 border border-dashed border-gray-300 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-4">
                    No valve sections yet. Create a valve control section to manage irrigation for this plot.
                  </p>
                  <Button
                    className="bg-sasya-green hover:bg-sasya-green-dark"
                    onClick={() => setIsValveDialogOpen(true)}
                  >
                    Create Valve Section
                  </Button>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  {valveSections.length} valve {valveSections.length === 1 ? 'section' : 'sections'} available. Each section can be expanded below.
                </p>
              )}
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
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-500 hover:text-red-700 hover:bg-red-100"
                    onClick={() => setDeleteValveId(valve.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
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
                </div>
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
      
      {/* Delete Motor Confirmation Dialog */}
      <AlertDialog open={isDeleteMotorDialogOpen} onOpenChange={setIsDeleteMotorDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Motor Section</AlertDialogTitle>
            <AlertDialogDescription>
              This will delete the motor section and all valve sections for this plot. 
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-500 hover:bg-red-600 text-white"
              onClick={handleDeleteMotorSection}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      
      {/* Delete Valve Confirmation Dialog */}
      <AlertDialog open={!!deleteValveId} onOpenChange={(open) => !open && setDeleteValveId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Valve Section</AlertDialogTitle>
            <AlertDialogDescription>
              This will delete the valve section from this plot. 
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-500 hover:bg-red-600 text-white"
              onClick={() => deleteValveId && handleDeleteValveSection(deleteValveId)}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
