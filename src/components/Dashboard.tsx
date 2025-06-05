import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Sparkles, 
  Palette, 
  Layers, 
  Eye, 
  Cpu, 
  Recycle, 
  BarChart3,
  Upload,
  Download,
  Play,
  Pause,
  RotateCcw,
  Settings,
  User,
  LogOut,
  Plus,
  Save,
  Share2,
  Zap,
  TrendingUp,
  Globe,
  Camera,
  Scissors,
  Shirt,
  Atom,
  Leaf,
  Waves,
  Activity,
  Target
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const floatingAnimation = {
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Dashboard() {
  const { signOut, user } = useAuth();
  const [activeTab, setActiveTab] = useState("design");
  const [isGenerating, setIsGenerating] = useState(false);
  const [simulationProgress, setSimulationProgress] = useState(0);

  const handleGeneratePattern = () => {
    setIsGenerating(true);
    // Simulate AI pattern generation
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  const handleSimulation = () => {
    setSimulationProgress(0);
    const interval = setInterval(() => {
      setSimulationProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="flex min-h-screen bg-background organic-texture">
      {/* Biomorphic Sidebar */}
      <motion.aside 
        className="w-64 bg-card border-r border-border p-6 neo-glass relative overflow-hidden"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-10 right-4 w-16 h-16 bg-eco/5 biomorphic"
            variants={floatingAnimation}
            animate="animate"
          />
          <motion.div 
            className="absolute bottom-20 left-4 w-12 h-12 bg-amber/5 biomorphic-alt"
            variants={floatingAnimation}
            animate="animate"
            transition={{ delay: 1 }}
          />
        </div>

        <div className="relative z-10">
          <div className="flex items-center space-x-2 mb-8">
            <motion.div 
              className="relative"
              variants={floatingAnimation}
              animate="animate"
            >
              <Atom className="h-8 w-8 text-ocean" />
              <div className="absolute inset-0 h-8 w-8 text-eco opacity-30 animate-pulse">
                <Atom className="h-8 w-8" />
              </div>
            </motion.div>
            <span className="text-xl font-bold bg-sustainability-gradient bg-clip-text text-transparent">
              TextileAI
            </span>
          </div>

          <nav className="space-y-2">
            <Button 
              variant={activeTab === "design" ? "default" : "ghost"} 
              className={`w-full justify-start biomorphic ${activeTab === "design" ? "bg-sustainability-gradient" : ""}`}
              onClick={() => setActiveTab("design")}
            >
              <Palette className="mr-2 h-4 w-4" />
              Biomorphic Studio
            </Button>
            <Button 
              variant={activeTab === "simulation" ? "default" : "ghost"} 
              className={`w-full justify-start biomorphic-alt ${activeTab === "simulation" ? "bg-innovation-gradient" : ""}`}
              onClick={() => setActiveTab("simulation")}
            >
              <Layers className="mr-2 h-4 w-4" />
              Neo-Material Sim
            </Button>
            <Button 
              variant={activeTab === "ar" ? "default" : "ghost"} 
              className={`w-full justify-start biomorphic ${activeTab === "ar" ? "bg-sustainability-gradient" : ""}`}
              onClick={() => setActiveTab("ar")}
            >
              <Eye className="mr-2 h-4 w-4" />
              AR Visualization
            </Button>
            <Button 
              variant={activeTab === "sustainability" ? "default" : "ghost"} 
              className={`w-full justify-start biomorphic-alt ${activeTab === "sustainability" ? "bg-innovation-gradient" : ""}`}
              onClick={() => setActiveTab("sustainability")}
            >
              <Recycle className="mr-2 h-4 w-4" />
              Circular Analytics
            </Button>
            <Button 
              variant={activeTab === "analytics" ? "default" : "ghost"} 
              className={`w-full justify-start biomorphic ${activeTab === "analytics" ? "bg-sustainability-gradient" : ""}`}
              onClick={() => setActiveTab("analytics")}
            >
              <BarChart3 className="mr-2 h-4 w-4" />
              Ecosystem Insights
            </Button>
          </nav>

          <Separator className="my-6" />

          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start biomorphic">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start biomorphic-alt">
              <User className="mr-2 h-4 w-4" />
              Profile
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-destructive hover:text-destructive biomorphic"
              onClick={() => signOut()}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Welcome back, <span className="bg-sustainability-gradient bg-clip-text text-transparent">
                {user?.email?.split('@')[0] || 'Designer'}
              </span>!
            </h1>
            <p className="text-muted-foreground">
              Create revolutionary textile designs through biomorphic intelligence and sustainable innovation
            </p>
          </motion.div>

          {/* Enhanced Stats with Biomorphic Design */}
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="biomorphic neo-glass data-glow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Designs Created</p>
                    <p className="text-2xl font-bold text-eco">24</p>
                    <p className="text-xs text-eco">+12% this week</p>
                  </div>
                  <div className="w-12 h-12 bg-eco/10 biomorphic flex items-center justify-center">
                    <Palette className="h-6 w-6 text-eco" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="biomorphic-alt neo-glass data-glow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Waste Reduced</p>
                    <p className="text-2xl font-bold text-ocean">32%</p>
                    <p className="text-xs text-ocean">Circular impact</p>
                  </div>
                  <div className="w-12 h-12 bg-ocean/10 biomorphic-alt flex items-center justify-center">
                    <Recycle className="h-6 w-6 text-ocean" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
} 