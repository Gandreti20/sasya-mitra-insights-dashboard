
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const PredictionTable = () => {
  // Mock data for prediction table
  const tableData = [
    {
      crop: "Rice",
      organicYield: "4.2 tons/ha",
      commercialYield: "5.1 tons/ha",
      organicCost: "₹48,000/ha",
      commercialCost: "₹62,000/ha",
      organicProfit: "₹84,000/ha",
      commercialProfit: "₹92,000/ha",
      sustainability: "High",
    },
    {
      crop: "Wheat",
      organicYield: "3.8 tons/ha",
      commercialYield: "4.6 tons/ha",
      organicCost: "₹42,000/ha",
      commercialCost: "₹58,000/ha",
      organicProfit: "₹76,000/ha",
      commercialProfit: "₹86,000/ha",
      sustainability: "High",
    },
    {
      crop: "Cotton",
      organicYield: "1.8 tons/ha",
      commercialYield: "2.4 tons/ha",
      organicCost: "₹52,000/ha",
      commercialCost: "₹72,000/ha",
      organicProfit: "₹90,000/ha",
      commercialProfit: "₹108,000/ha",
      sustainability: "Medium",
    },
    {
      crop: "Sugarcane",
      organicYield: "68 tons/ha",
      commercialYield: "82 tons/ha",
      organicCost: "₹85,000/ha",
      commercialCost: "₹105,000/ha",
      organicProfit: "₹136,000/ha",
      commercialProfit: "₹164,000/ha",
      sustainability: "Low",
    },
  ];

  return (
    <Card>
      <CardHeader className="bg-sasya-brown/10 pb-2">
        <CardTitle className="text-lg">Farming Method Comparison</CardTitle>
      </CardHeader>
      <CardContent className="pt-4 overflow-x-auto">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow>
              <TableHead>Crop</TableHead>
              <TableHead>Organic Yield</TableHead>
              <TableHead>Commercial Yield</TableHead>
              <TableHead>Organic Cost</TableHead>
              <TableHead>Commercial Cost</TableHead>
              <TableHead>Organic Profit</TableHead>
              <TableHead>Commercial Profit</TableHead>
              <TableHead>Sustainability</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{row.crop}</TableCell>
                <TableCell>{row.organicYield}</TableCell>
                <TableCell>{row.commercialYield}</TableCell>
                <TableCell>{row.organicCost}</TableCell>
                <TableCell>{row.commercialCost}</TableCell>
                <TableCell className="text-green-600">{row.organicProfit}</TableCell>
                <TableCell className="text-green-600">{row.commercialProfit}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    row.sustainability === "High" 
                      ? "bg-green-100 text-green-800" 
                      : row.sustainability === "Medium"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}>
                    {row.sustainability}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
