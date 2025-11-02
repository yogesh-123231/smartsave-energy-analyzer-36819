import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Upload as UploadIcon, Plus, Trash2, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

interface Appliance {
  id: string;
  type: string;
  power: number;
  hoursPerDay: number;
  starRating: number;
  age: number;
}

const Upload = () => {
  const navigate = useNavigate();
  const [appliances, setAppliances] = useState<Appliance[]>([
    { id: "1", type: "", power: 100, hoursPerDay: 4, starRating: 3, age: 2 }
  ]);

  const addAppliance = () => {
    const newAppliance: Appliance = {
      id: Date.now().toString(),
      type: "",
      power: 100,
      hoursPerDay: 4,
      starRating: 3,
      age: 2
    };
    setAppliances([...appliances, newAppliance]);
  };

  const removeAppliance = (id: string) => {
    if (appliances.length > 1) {
      setAppliances(appliances.filter(a => a.id !== id));
    }
  };

  const updateAppliance = (id: string, field: keyof Appliance, value: any) => {
    setAppliances(appliances.map(a => 
      a.id === id ? { ...a, [field]: value } : a
    ));
  };

  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    toast.success("Analyzing your energy consumption...");
    setTimeout(() => {
      setIsAnalyzing(false);
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Analyze Your Energy</h1>
            <p className="text-muted-foreground text-lg">
              Upload your bill or enter details manually
            </p>
          </motion.div>

          {/* Upload Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            <Card className="p-8 hover:shadow-large transition-shadow cursor-pointer group">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <UploadIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Upload Bill</h3>
                <p className="text-muted-foreground mb-6">
                  Upload your electricity bill (PDF/Image)
                </p>
                <Button variant="outline" className="w-full">
                  Choose File
                </Button>
              </div>
            </Card>

            <Card className="p-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Manual Input</h3>
                
                <div>
                  <Label htmlFor="units">Units Consumed (kWh)</Label>
                  <Input id="units" type="number" placeholder="250" className="mt-1.5" />
                </div>
                
                <div>
                  <Label htmlFor="bill">Total Bill (₹)</Label>
                  <Input id="bill" type="number" placeholder="1500" className="mt-1.5" />
                </div>
                
                <div>
                  <Label htmlFor="load">Sanctioned Load (kW)</Label>
                  <Input id="load" type="number" placeholder="5" className="mt-1.5" />
                </div>
                
                <div>
                  <Label htmlFor="city">City</Label>
                  <Select>
                    <SelectTrigger id="city" className="mt-1.5">
                      <SelectValue placeholder="Select city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mumbai">Mumbai</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="bangalore">Bangalore</SelectItem>
                      <SelectItem value="chennai">Chennai</SelectItem>
                      <SelectItem value="kolkata">Kolkata</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Appliances Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-semibold">Add Your Appliances</h3>
                </div>
                <Button onClick={addAppliance} size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Appliance
                </Button>
              </div>

              <div className="space-y-6">
                {appliances.map((appliance, index) => (
                  <motion.div
                    key={appliance.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-muted/30 rounded-lg border"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="font-semibold">Appliance {index + 1}</h4>
                      {appliances.length > 1 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeAppliance(appliance.id)}
                        >
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </Button>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label>Appliance Type</Label>
                        <Select
                          value={appliance.type}
                          onValueChange={(value) => updateAppliance(appliance.id, "type", value)}
                        >
                          <SelectTrigger className="mt-1.5">
                            <SelectValue placeholder="Select appliance" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ac">Air Conditioner</SelectItem>
                            <SelectItem value="fridge">Refrigerator</SelectItem>
                            <SelectItem value="tv">Television</SelectItem>
                            <SelectItem value="washing">Washing Machine</SelectItem>
                            <SelectItem value="geyser">Water Heater</SelectItem>
                            <SelectItem value="fan">Fan</SelectItem>
                            <SelectItem value="light">Light</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>Power (Watts)</Label>
                        <Input
                          type="number"
                          value={appliance.power}
                          onChange={(e) => updateAppliance(appliance.id, "power", parseInt(e.target.value))}
                          className="mt-1.5"
                        />
                      </div>

                      <div>
                        <Label>Hours per day: {appliance.hoursPerDay}h</Label>
                        <Slider
                          value={[appliance.hoursPerDay]}
                          onValueChange={([value]) => updateAppliance(appliance.id, "hoursPerDay", value)}
                          max={24}
                          step={1}
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label>Star Rating: {appliance.starRating}★</Label>
                        <Slider
                          value={[appliance.starRating]}
                          onValueChange={([value]) => updateAppliance(appliance.id, "starRating", value)}
                          min={1}
                          max={5}
                          step={1}
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label>Age: {appliance.age} years</Label>
                        <Slider
                          value={[appliance.age]}
                          onValueChange={([value]) => updateAppliance(appliance.id, "age", value)}
                          max={20}
                          step={1}
                          className="mt-2"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button
                onClick={handleAnalyze}
                size="lg"
                className="w-full mt-8 text-base relative"
                disabled={isAnalyzing}
              >
                {isAnalyzing ? (
                  <>
                    <div className="w-5 h-5 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5 mr-2" />
                    Analyze My Energy
                  </>
                )}
              </Button>
            </Card>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Upload;
