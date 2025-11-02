import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Zap, TrendingDown, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-background py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Analyze your home's <br />
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  energy efficiency
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get personalized insights, track consumption, and save money on electricity bills
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex gap-3 justify-center items-center mb-8"
            >
              <div className="flex items-center gap-2 bg-background/80 backdrop-blur px-4 py-2 rounded-full shadow-soft">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Smart Analysis</span>
              </div>
              <div className="flex items-center gap-2 bg-background/80 backdrop-blur px-4 py-2 rounded-full shadow-soft">
                <TrendingDown className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Save Money</span>
              </div>
              <div className="flex items-center gap-2 bg-background/80 backdrop-blur px-4 py-2 rounded-full shadow-soft">
                <Leaf className="w-5 h-5 text-success" />
                <span className="text-sm font-medium">Reduce CO₂</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Choose Your Plan
              </h2>
              <p className="text-muted-foreground">
                Start free, upgrade for advanced insights
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-large transition-shadow">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">Free Plan</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">₹0</span>
                      <span className="text-muted-foreground">/forever</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Upload electricity bill</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Basic energy efficiency score</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>3 key insights</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Appliance breakdown</span>
                    </li>
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => navigate("/upload")}
                  >
                    Get Started Free
                  </Button>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="p-8 h-full relative overflow-hidden border-primary/50 shadow-large">
                  <div className="absolute top-0 right-0 bg-gradient-hero text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                    Popular
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">SmartSave Pro</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">₹99</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Everything in Free</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Detailed appliance breakdown</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Monthly consumption trends</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>CO₂ savings calculator</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Ad-free experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Priority support</span>
                    </li>
                  </ul>
                  
                  <Button 
                    className="w-full"
                    onClick={() => navigate("/upload")}
                  >
                    Upgrade to Pro
                  </Button>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
