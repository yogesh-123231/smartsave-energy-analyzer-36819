import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingDown, Leaf, Zap, AlertCircle, Star, Lightbulb, Crown, Check, Info, Power, Sun, Droplets, TreePine, BarChart3, Upload, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip as RechartsTooltip, LineChart, Line, XAxis, YAxis, CartesianGrid, Bar, BarChart, ComposedChart, Area } from "recharts";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [isProUser, setIsProUser] = useState(false);
  const [showProDialog, setShowProDialog] = useState(false);
  
  // Mock data
  const energyScore = 6.8;
  const applianceData = [
    { name: "Air Conditioner", value: 35, color: "#10b981" },
    { name: "Refrigerator", value: 25, color: "#0ea5e9" },
    { name: "Water Heater", value: 20, color: "#8b5cf6" },
    { name: "Washing Machine", value: 10, color: "#f59e0b" },
    { name: "Others", value: 10, color: "#6b7280" },
  ];

  const inefficientAppliances = [
    { name: "Air Conditioner (2-Star, 8 years)", consumption: "450 kWh/month", suggestion: "Replace with 5-Star inverter AC", savings: "₹280/month" },
    { name: "Water Heater (Non-insulated)", consumption: "180 kWh/month", suggestion: "Upgrade to solar water heater", savings: "₹120/month" },
    { name: "Old Refrigerator (1-Star, 12 years)", consumption: "120 kWh/month", suggestion: "Replace with 5-Star refrigerator", savings: "₹80/month" },
  ];

  const behavioralTips = [
    { icon: Power, title: "Turn off standby power", description: "Save 5% energy by unplugging idle devices" },
    { icon: Sun, title: "Use natural daylight", description: "Keep curtains open during day to reduce lighting needs" },
    { icon: Droplets, title: "Full load washing", description: "Run washing machine and dishwasher on full load only" },
  ];

  const smartRecommendations = [
    { icon: Zap, title: "Set AC to 24°C", description: "Save up to ₹150/month by increasing AC temperature by 2°C" },
    { icon: Lightbulb, title: "Switch to LED Bulbs", description: "Replace all bulbs with LEDs to save ₹80/month" },
    { icon: Leaf, title: "Use Solar Water Heater", description: "Reduce water heating costs by 70% with solar" },
  ];

  const trendData = [
    { month: "Jan", consumption: 280, co2: 230 },
    { month: "Feb", consumption: 260, co2: 213 },
    { month: "Mar", consumption: 250, co2: 205 },
    { month: "Apr", consumption: 240, co2: 197 },
    { month: "May", consumption: 235, co2: 193 },
    { month: "Jun", consumption: 250, co2: 205 },
  ];

  const cityComparisonData = [
    { category: "Your Score", value: 7.8, fill: "hsl(var(--primary))" },
    { category: "City Average", value: 6.4, fill: "hsl(var(--muted-foreground))" },
  ];

  const carbonReductionData = [
    { month: "Jan", reduction: 0 },
    { month: "Feb", reduction: 17 },
    { month: "Mar", reduction: 25 },
    { month: "Apr", reduction: 33 },
    { month: "May", reduction: 37 },
    { month: "Jun", reduction: 25 },
  ];

  const handleUpgradeToPro = () => {
    setIsProUser(true);
    setShowProDialog(false);
    toast({
      title: "Welcome to SmartSave Pro! 🎉",
      description: "You're now a SmartSave Pro user with access to all premium features.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
              <div>
                {isProUser ? (
                  <h1 className="text-4xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">
                    Welcome back, SmartSave Pro Member 🌟
                  </h1>
                ) : (
                  <h1 className="text-4xl font-bold mb-2">Your Energy Dashboard</h1>
                )}
                <p className="text-muted-foreground flex items-center gap-2">
                  Based on your consumption of 250 kWh this month
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>SmartSave analyzes your power usage, appliance efficiency, and regional benchmarks to generate your energy score and personalized recommendations.</p>
                    </TooltipContent>
                  </Tooltip>
                </p>
              </div>
              {isProUser && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-2 bg-gradient-hero text-white px-4 py-2 rounded-full shadow-glow"
                >
                  <Crown className="w-5 h-5" />
                  <span className="font-semibold">Pro Member</span>
                </motion.div>
              )}
            </div>
            <p className="text-sm text-muted-foreground/80 bg-muted/30 p-4 rounded-lg border border-border/50">
              💡 <strong>How it works:</strong> Energy score is calculated based on your monthly bill units vs. ideal city average consumption for your household size and appliances. Each unit saved reduces 0.82 kg of CO₂ emissions.
            </p>
          </motion.div>

          {/* Energy Score */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <Card className={`p-8 glass-card glow-hover ${isProUser ? 'bg-gradient-to-br from-primary/10 to-accent/10' : 'bg-gradient-to-br from-primary/5 to-accent/5'}`}>
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-2xl font-bold">Energy Efficiency Score</h2>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p>Your score is calculated by comparing your energy consumption patterns, appliance efficiency ratings, and usage habits against optimal benchmarks for similar households in your city.</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Your home is performing above average!
                  </p>
                  <div className="flex items-end gap-2">
                    <span className={`text-6xl font-bold ${isProUser ? 'bg-gradient-hero bg-clip-text text-transparent' : 'text-primary'}`}>
                      {energyScore}
                    </span>
                    <span className="text-3xl text-muted-foreground mb-2">/10</span>
                  </div>
                </div>
                
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full -rotate-90">
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      stroke="hsl(var(--muted))"
                      strokeWidth="12"
                      fill="none"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      stroke="url(#gradient)"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${(energyScore / 10) * 502.4} 502.4`}
                      strokeLinecap="round"
                      className="transition-all duration-1000"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--accent))" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Zap className="w-16 h-16 text-primary animate-pulse" />
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Pro Features Section */}
          {isProUser && (
            <>
              {/* Historical Consumption Trends */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="mb-8"
              >
                <Card className="p-6 glass-card glow-hover">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Historical Consumption Trends</h3>
                      <p className="text-sm text-muted-foreground">Track your energy usage over the last 6 months</p>
                    </div>
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart data={trendData}>
                      <defs>
                        <linearGradient id="colorConsumption" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <RechartsTooltip />
                      <Legend />
                      <Area type="monotone" dataKey="consumption" stroke="hsl(var(--primary))" fill="url(#colorConsumption)" name="Consumption (kWh)" />
                      <Line type="monotone" dataKey="consumption" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ fill: "hsl(var(--primary))", r: 4 }} />
                    </ComposedChart>
                  </ResponsiveContainer>
                  <div className="mt-4 p-3 bg-muted/30 rounded-lg border border-border/50">
                    <div className="flex items-center gap-2 text-sm">
                      <Upload className="w-4 h-4 text-primary" />
                      <p className="text-muted-foreground">
                        <strong>Tip:</strong> Upload your last 6 months of electricity bills (PDFs/images) for more accurate trend analysis and predictions.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Predicted Bill & CO₂ Savings Row */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Predicted Bill */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Card className="p-6 glass-card glow-hover-strong bg-gradient-to-br from-secondary/10 to-secondary/5">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Predicted Next Month's Bill</h3>
                        <p className="text-4xl font-bold text-secondary mt-2">₹1,840</p>
                        <div className="flex items-center gap-1 mt-2">
                          <TrendingUp className="w-4 h-4 text-destructive" />
                          <span className="text-sm text-destructive font-medium">↑ 4% from last month</span>
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-secondary" />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Based on your average consumption pattern and seasonal trends
                    </p>
                  </Card>
                </motion.div>

                {/* CO₂ Savings Report */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <Card className="p-6 glass-card glow-hover-strong bg-gradient-to-br from-success/10 to-success/5">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-1">CO₂ Savings This Month</h3>
                        <p className="text-4xl font-bold text-success mt-2">42 kg</p>
                        <div className="flex items-center gap-1 mt-2">
                          <TreePine className="w-4 h-4 text-success" />
                          <span className="text-sm text-success font-medium">= Planting 2 trees</span>
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                        <Leaf className="w-6 h-6 text-success" />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      You've reduced carbon emissions compared to your previous consumption
                    </p>
                  </Card>
                </motion.div>
              </div>

              {/* City Comparison & Carbon Reduction Trend */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* City Comparison */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Card className="p-6 glass-card glow-hover">
                    <h3 className="text-xl font-semibold mb-4">City Comparison</h3>
                    <p className="text-sm text-muted-foreground mb-6">Your efficiency score vs. city average</p>
                    <ResponsiveContainer width="100%" height={250}>
                      <BarChart data={cityComparisonData} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                        <XAxis type="number" domain={[0, 10]} />
                        <YAxis type="category" dataKey="category" width={100} />
                        <RechartsTooltip />
                        <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                          {cityComparisonData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                    <p className="text-sm text-success font-medium mt-4 text-center">
                      🎉 You're performing 22% better than the city average!
                    </p>
                  </Card>
                </motion.div>

                {/* Carbon Reduction Trend */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <Card className="p-6 glass-card glow-hover">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">Carbon Reduction Trend</h3>
                        <p className="text-sm text-muted-foreground">Month-wise CO₂ savings (kg)</p>
                      </div>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p>Each unit saved reduces 0.82 kg of CO₂ emissions</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <ResponsiveContainer width="100%" height={250}>
                      <LineChart data={carbonReductionData}>
                        <defs>
                          <linearGradient id="colorReduction" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="hsl(var(--success))" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="hsl(var(--success))" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <RechartsTooltip />
                        <Area type="monotone" dataKey="reduction" stroke="hsl(var(--success))" fill="url(#colorReduction)" />
                        <Line type="monotone" dataKey="reduction" stroke="hsl(var(--success))" strokeWidth={2} dot={{ fill: "hsl(var(--success))", r: 4 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </Card>
                </motion.div>
              </div>
            </>
          )}

          {/* Appliance Breakdown & Savings */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Appliance Breakdown */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: isProUser ? 0.4 : 0.2 }}
            >
              <Card className="p-6 h-full glass-card">
                <h3 className="text-xl font-semibold mb-6">Appliance Breakdown</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={applianceData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {applianceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <RechartsTooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </Card>
            </motion.div>

            {/* Savings & CO2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: isProUser ? 0.45 : 0.25 }}
              className="space-y-6"
            >
              <Card className="p-6 glass-card bg-gradient-to-br from-success/10 to-success/5 glow-hover">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Potential Monthly Savings</h3>
                    <p className="text-3xl font-bold text-success">₹420</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                    <TrendingDown className="w-6 h-6 text-success" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  By upgrading to energy-efficient appliances
                </p>
              </Card>

              {!isProUser && (
                <Card className="p-6 glass-card bg-gradient-to-br from-accent/10 to-accent/5 glow-hover">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">CO₂ Reduction</h3>
                      <p className="text-3xl font-bold text-accent">35 kg</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <Leaf className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Monthly carbon footprint reduction potential
                  </p>
                </Card>
              )}
            </motion.div>
          </div>

          {/* Smart Feedback Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: isProUser ? 0.5 : 0.3 }}
            className="mb-8"
          >
            <Card className="p-6 glass-card bg-gradient-to-br from-success/10 to-success/5 glow-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Smart Feedback</h3>
                  <p className="text-muted-foreground mb-3">
                    Based on your usage patterns, your <strong>Air Conditioner</strong> and <strong>Refrigerator</strong> consume the most energy. 
                    Consider upgrading to energy-efficient models to reduce consumption by up to 40%.
                  </p>
                  <p className="text-sm text-success font-medium">
                    You're doing better than 65% of similar households in your area! 🎉
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Behavioral Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: isProUser ? 0.55 : 0.35 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-semibold mb-4">Behavioral Tips</h3>
            <p className="text-muted-foreground mb-6">Small changes in daily habits can lead to significant energy savings</p>
            <div className="grid md:grid-cols-3 gap-6">
              {behavioralTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (isProUser ? 0.6 : 0.4) + index * 0.1 }}
                >
                  <Card className="p-6 h-full glass-card bg-gradient-to-br from-primary/5 to-accent/5 glow-hover-strong cursor-pointer">
                    <div className="flex flex-col gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <tip.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{tip.title}</h4>
                        <p className="text-sm text-muted-foreground">{tip.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Smart Recommendations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: isProUser ? 0.65 : 0.45 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-semibold mb-4">Smart Recommendations</h3>
            <p className="text-muted-foreground mb-6">Appliance-specific upgrades for maximum energy savings</p>
            <div className="grid md:grid-cols-3 gap-6">
              {smartRecommendations.map((rec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (isProUser ? 0.7 : 0.5) + index * 0.1 }}
                >
                  <Card className="p-6 h-full glass-card bg-gradient-to-br from-success/5 to-success/10 glow-hover-strong cursor-pointer">
                    <div className="flex flex-col gap-4">
                      <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                        <rec.icon className="w-6 h-6 text-success" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{rec.title}</h4>
                        <p className="text-sm text-muted-foreground">{rec.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Inefficient Appliances */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: isProUser ? 0.75 : 0.55 }}
            className="mb-8"
          >
            <Card className="p-6 glass-card">
              <div className="flex items-center gap-2 mb-6">
                <AlertCircle className="w-6 h-6 text-destructive" />
                <h3 className="text-xl font-semibold">Top Inefficient Appliances</h3>
              </div>
              
              <div className="space-y-4">
                {inefficientAppliances.map((appliance, index) => (
                  <div
                    key={index}
                    className="p-4 bg-muted/30 rounded-lg border border-border/50 hover:border-primary/50 transition-colors glow-hover"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{appliance.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {appliance.consumption}
                        </p>
                        <div className="flex items-center gap-2 text-sm">
                          <Star className="w-4 h-4 text-primary" />
                          <span className="text-primary font-medium">{appliance.suggestion}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Potential Savings</p>
                          <p className="text-lg font-bold text-success">{appliance.savings}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Pro CTA - Only show if not Pro user */}
          {!isProUser && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="p-8 glass-card bg-gradient-hero text-white glow-hover-strong animate-gradient">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Unlock SmartSave Pro</h3>
                    <p className="text-white/90 mb-4">
                      Get detailed insights, trend analysis, and personalized recommendations
                    </p>
                    <ul className="space-y-2 text-sm text-white/90">
                      <li className="flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Monthly consumption trends & forecasts
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Detailed appliance-level analytics
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Ad-free experience
                      </li>
                    </ul>
                  </div>
                  <Button
                    size="lg"
                    variant="secondary"
                    onClick={() => setShowProDialog(true)}
                    className="whitespace-nowrap hover:scale-105 transition-transform"
                  >
                    Upgrade to Pro - ₹99/month
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Sponsored Ads Placeholder - Only show if not Pro user */}
          {!isProUser && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-8"
            >
              <Card className="p-6 border-dashed glass-card">
                <div className="text-center py-8">
                  <h4 className="text-lg font-semibold mb-2 text-muted-foreground">
                    Recommended Upgrades
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Sponsored by LG, Voltas, and more
                  </p>
                </div>
              </Card>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />

      {/* Pro Upgrade Dialog */}
      <Dialog open={showProDialog} onOpenChange={setShowProDialog}>
        <DialogContent className="sm:max-w-md glass-card">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <Crown className="w-6 h-6 text-primary" />
              SmartSave Pro Benefits
            </DialogTitle>
            <DialogDescription>
              Unlock all premium features for just ₹99/month
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold">Detailed Energy Trends</h4>
                <p className="text-sm text-muted-foreground">Track your consumption patterns over time</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold">Predictive Bill Forecast</h4>
                <p className="text-sm text-muted-foreground">Know your estimated bill in advance</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold">CO₂ Reduction Tracker</h4>
                <p className="text-sm text-muted-foreground">Monitor your environmental impact</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold">Ad-Free Dashboard</h4>
                <p className="text-sm text-muted-foreground">Enjoy a clean, distraction-free experience</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold">Smart City Comparison</h4>
                <p className="text-sm text-muted-foreground">See how you compare with others in your city</p>
              </div>
            </div>
          </div>
          
          <Button onClick={handleUpgradeToPro} className="w-full hover:scale-105 transition-transform" size="lg">
            Upgrade Now - ₹99/month
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;
