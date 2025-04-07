
import { Leaf } from "lucide-react";

export const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-sasya-green" />
          <h1 className="text-xl font-bold">
            Sasya Mitra <span className="text-sm font-normal text-muted-foreground">A Modern Way of Farming</span>
          </h1>
        </div>
        <nav className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">Farmer: Ravi Kumar</span>
        </nav>
      </div>
    </header>
  );
};
