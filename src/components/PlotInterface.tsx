
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
import { Plot } from "./PlotNavigation";

type PlotInterfaceProps = {
  plot: Plot;
};

export const PlotInterface = ({ plot }: PlotInterfaceProps) => {
  const [customName, setCustomName] = useState("");
  const [motorSectionName, setMotorSectionName] = useState(`Motor Status - ${plot.name}`);
  const [isMotorDialogOpen, setIsMotorDialogOpen] = useState(false);
  
  const [isValveDialogOpen, setIsValveDialogOpen] = useState(false);
  const [valveSectionName, setValveSectionName] = useState(`Valve Control - ${plot.name}`);
  const [showValveSection, setShowValveSection] = useState(false);

  const handleSetMotorName = () => {
    if (customName.trim()) {
      setMotorSectionName(`Motor Status - ${customName}`);
      toast.success("Motor section renamed", {
        description: `Motor section for ${plot.name} has been renamed.`,
      });
      setCustomName("");
      setIsMotorDialogOpen(false);
    } else {
      toast.error("Please enter a name");
    }
  };

  const handleCreateValveSection = () => {
    if (customName.trim()) {
      setValveSectionName(`Valve Control - ${customName}`);
      setShowValveSection(true);
      toast.success("Valve section created", {
        description: `Valve control section has been created for ${plot.name}.`,
      });
      setCustomName("");
      setIsValveDialogOpen(false);
    } else {
      toast.error("Please enter a name");
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader className="bg-sasya-green/10 pb-2 flex flex-row items-center justify-between">
              <CardTitle className="text-lg">{motorSectionName}</CardTitle>
              <Button 
                variant="outline" 
                size="sm"
                className="ml-2 bg-sasya-green/20 hover:bg-sasya-green/30 text-sasya-green"
                onClick={() => setIsMotorDialogOpen(true)}
              >
                Rename
              </Button>
            </CardHeader>
            <CardContent className="pt-4">
              <MotorStatus />
            </CardContent>
          </Card>
        </div>
        <div>
          {showValveSection ? (
            <GateValve />
          ) : (
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
        </div>
      </div>
      
      <div className="mb-6">
        <AlertSection />
      </div>
      
      {showValveSection && (
        <div className="mb-6">
          <Card>
            <CardHeader className="bg-sasya-green/10 pb-2">
              <CardTitle className="text-lg">{valveSectionName}</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div>
                <GateValve />
              </div>
              <div className="lg:col-span-2">
                <PlantDiagram />
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      
      <div>
        <PredictionTable />
      </div>

      {/* Motor Section Rename Dialog */}
      <Dialog open={isMotorDialogOpen} onOpenChange={setIsMotorDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Rename Motor Section</DialogTitle>
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
            <Button onClick={handleSetMotorName} className="bg-sasya-green hover:bg-sasya-green-dark">
              Save
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
