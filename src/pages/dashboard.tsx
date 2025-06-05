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
    <div className="flex min-h-screen bg-background">
      {/* Biomorphic Sidebar */}
      <motion.aside 
        className="w-64 bg-card border-r border-border p-6 relative overflow-hidden"
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
              ThreadCrafts
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
            
            <Card className="biomorphic neo-glass data-glow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Time Saved</p>
                    <p className="text-2xl font-bold text-amber">156h</p>
                    <p className="text-xs text-amber">AI acceleration</p>
                  </div>
                  <div className="w-12 h-12 bg-amber/10 biomorphic flex items-center justify-center">
                    <Zap className="h-6 w-6 text-amber" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="biomorphic-alt neo-glass data-glow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Bio-Accuracy</p>
                    <p className="text-2xl font-bold text-violet">94.2%</p>
                    <p className="text-xs text-violet">Neural precision</p>
                  </div>
                  <div className="w-12 h-12 bg-violet/10 biomorphic-alt flex items-center justify-center">
                    <Activity className="h-6 w-6 text-violet" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Content Area */}
          <motion.div variants={fadeInUp}>
            {activeTab === "design" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Biomorphic Design Controls */}
                <div className="lg:col-span-1 space-y-6">
                  <Card className="biomorphic neo-glass">
                    <CardHeader>
                      <CardTitle className="flex items-center text-ocean">
                        <div className="w-8 h-8 bg-sustainability-gradient biomorphic flex items-center justify-center mr-3">
                          <Cpu className="h-4 w-4 text-white" />
                        </div>
                        Biomorphic Pattern AI
                      </CardTitle>
                      <CardDescription>
                        Generate organic patterns using nature-inspired neural networks
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="style" className="text-foreground">Organic Style</Label>
                        <Select>
                          <SelectTrigger className="biomorphic">
                            <SelectValue placeholder="Select bio-style" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cellular">Cellular Forms</SelectItem>
                            <SelectItem value="botanical">Botanical Patterns</SelectItem>
                            <SelectItem value="fluid">Fluid Dynamics</SelectItem>
                            <SelectItem value="crystalline">Crystalline Structures</SelectItem>
                            <SelectItem value="neural">Neural Networks</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="colors" className="text-foreground">Eco Palette</Label>
                        <Select>
                          <SelectTrigger className="biomorphic-alt">
                            <SelectValue placeholder="Select eco-palette" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ocean">Deep Ocean Tones</SelectItem>
                            <SelectItem value="forest">Forest Canopy</SelectItem>
                            <SelectItem value="mineral">Mineral Spectrum</SelectItem>
                            <SelectItem value="aurora">Aurora Borealis</SelectItem>
                            <SelectItem value="coral">Coral Reef</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="complexity" className="text-foreground">Organic Complexity</Label>
                        <div className="mt-2">
                          <Input type="range" min="0" max="100" defaultValue="60" className="biomorphic" />
                          <div className="flex justify-between text-xs text-muted-foreground mt-1">
                            <span>Simple</span>
                            <span>Intricate</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="inspiration" className="text-foreground">Nature Inspiration</Label>
                        <Textarea 
                          placeholder="Describe natural forms (e.g., 'Coral reef structures with flowing water patterns')"
                          className="min-h-[80px] biomorphic"
                        />
                      </div>
                      
                      <Button 
                        onClick={handleGeneratePattern}
                        disabled={isGenerating}
                        className="w-full biomorphic-alt bg-sustainability-gradient hover:opacity-90 data-glow"
                      >
                        {isGenerating ? (
                          <>
                            <Cpu className="mr-2 h-4 w-4 animate-spin" />
                            Generating Bio-Pattern...
                          </>
                        ) : (
                          <>
                            <Leaf className="mr-2 h-4 w-4" />
                            Generate Organic Pattern
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="biomorphic-alt neo-glass">
                    <CardHeader>
                      <CardTitle className="text-eco">Recent Bio-Designs</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          { name: "Coral Reef Pattern", type: "Cellular", sustainability: 94 },
                          { name: "Forest Canopy", type: "Botanical", sustainability: 87 },
                          { name: "Ocean Waves", type: "Fluid", sustainability: 91 }
                        ].map((design, i) => (
                          <div key={i} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer biomorphic">
                            <div className="w-12 h-12 bg-sustainability-gradient biomorphic" />
                            <div className="flex-1">
                              <p className="text-sm font-medium text-foreground">{design.name}</p>
                              <p className="text-xs text-muted-foreground">{design.type} • {design.sustainability}% sustainable</p>
                            </div>
                            <Badge variant="secondary" className="biomorphic text-eco">
                              {design.sustainability}%
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Enhanced Design Canvas */}
                <div className="lg:col-span-2">
                  <Card className="h-[600px] biomorphic neo-glass">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-ocean">Biomorphic Design Canvas</CardTitle>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm" className="biomorphic">
                            <Upload className="mr-2 h-4 w-4" />
                            Import
                          </Button>
                          <Button variant="outline" size="sm" className="biomorphic-alt">
                            <Download className="mr-2 h-4 w-4" />
                            Export
                          </Button>
                          <Button variant="outline" size="sm" className="biomorphic bg-eco text-white">
                            <Save className="mr-2 h-4 w-4" />
                            Save
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="h-full">
                      <div className="w-full h-full bg-muted/20 biomorphic border-2 border-dashed border-border flex items-center justify-center ar-overlay">
                        <div className="text-center">
                          <img 
                            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="AI Generated Bio-Pattern"
                            className="w-full max-w-md h-64 object-cover biomorphic mb-4"
                          />
                          <p className="text-muted-foreground mb-4">
                            AI-generated coral reef pattern with ocean-inspired color harmony
                          </p>
                          <div className="flex justify-center space-x-2">
                            <Badge variant="secondary" className="biomorphic text-eco">Cellular</Badge>
                            <Badge variant="secondary" className="biomorphic-alt text-ocean">Ocean Tones</Badge>
                            <Badge variant="secondary" className="biomorphic text-amber">94% Sustainable</Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "simulation" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 space-y-6">
                  <Card className="biomorphic neo-glass">
                    <CardHeader>
                      <CardTitle className="flex items-center text-amber">
                        <div className="w-8 h-8 bg-innovation-gradient biomorphic-alt flex items-center justify-center mr-3">
                          <Layers className="h-4 w-4 text-white" />
                        </div>
                        Neo-Material Properties
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label className="text-foreground">Bio-Fabric Type</Label>
                        <Select>
                          <SelectTrigger className="biomorphic">
                            <SelectValue placeholder="Select bio-fabric" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="organic-cotton">Organic Cotton</SelectItem>
                            <SelectItem value="hemp-silk">Hemp-Silk Blend</SelectItem>
                            <SelectItem value="bamboo">Bamboo Fiber</SelectItem>
                            <SelectItem value="recycled-poly">Recycled Polyester</SelectItem>
                            <SelectItem value="bio-leather">Bio-Leather</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label className="text-foreground">Organic Drape Flow</Label>
                        <Input type="range" min="0" max="100" defaultValue="65" className="biomorphic-alt mt-2" />
                        <div className="flex justify-between text-xs text-muted-foreground mt-1">
                          <span>Rigid</span>
                          <span>Fluid</span>
                        </div>
                      </div>
                      
                      <div>
                        <Label className="text-foreground">Elasticity Factor</Label>
                        <Input type="range" min="0" max="100" defaultValue="40" className="biomorphic mt-2" />
                      </div>
                      
                      <div>
                        <Label className="text-foreground">Surface Texture</Label>
                        <Input type="range" min="0" max="100" defaultValue="55" className="biomorphic-alt mt-2" />
                      </div>
                      
                      <Button onClick={handleSimulation} className="w-full biomorphic bg-innovation-gradient hover:opacity-90 data-glow">
                        <Play className="mr-2 h-4 w-4" />
                        Run Bio-Simulation
                      </Button>
                      
                      {simulationProgress > 0 && (
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-foreground">Neural Processing</span>
                            <span className="text-amber">{simulationProgress}%</span>
                          </div>
                          <Progress value={simulationProgress} className="biomorphic" />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>

                <div className="lg:col-span-2">
                  <Card className="h-[600px] biomorphic-alt neo-glass">
                    <CardHeader>
                      <CardTitle className="text-violet">Neo-Material Simulation</CardTitle>
                      <CardDescription>
                        Biomorphic physics rendering with 94.2% organic accuracy
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="h-full">
                      <div className="w-full h-full bg-gradient-to-br from-muted/20 to-muted/40 biomorphic flex items-center justify-center ar-overlay">
                        <div className="text-center">
                          <img 
                            src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="3D Bio-Fabric Simulation"
                            className="w-full max-w-lg h-80 object-cover biomorphic mb-4"
                          />
                          <p className="text-muted-foreground">
                            Real-time biomorphic fabric draping with organic flow dynamics
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "ar" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="biomorphic neo-glass">
                  <CardHeader>
                    <CardTitle className="flex items-center text-violet">
                      <div className="w-8 h-8 bg-innovation-gradient biomorphic flex items-center justify-center mr-3">
                        <Camera className="h-4 w-4 text-white" />
                      </div>
                      AR Bio-Visualization
                    </CardTitle>
                    <CardDescription>
                      Immersive augmented reality with biomorphic overlays
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-muted/20 biomorphic border-2 border-dashed border-border flex items-center justify-center ar-overlay">
                      <div className="text-center">
                        <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground mb-4">Enable bio-camera for AR visualization</p>
                        <Button className="biomorphic-alt bg-sustainability-gradient hover:opacity-90">
                          <Camera className="mr-2 h-4 w-4" />
                          Start AR Bio-Session
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="biomorphic-alt neo-glass">
                  <CardHeader>
                    <CardTitle className="flex items-center text-eco">
                      <div className="w-8 h-8 bg-sustainability-gradient biomorphic-alt flex items-center justify-center mr-3">
                        <Shirt className="h-4 w-4 text-white" />
                      </div>
                      Organic Garment Library
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { name: 'Bio-Shirt', sustainability: 92 },
                        { name: 'Eco-Dress', sustainability: 89 },
                        { name: 'Organic Jacket', sustainability: 94 },
                        { name: 'Sustainable Pants', sustainability: 87 }
                      ].map((item, index) => (
                        <div key={item.name} className="p-4 border border-border biomorphic hover:bg-muted/50 cursor-pointer text-center group">
                          <div className="w-12 h-12 bg-sustainability-gradient biomorphic mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Shirt className="h-6 w-6 text-white" />
                          </div>
                          <p className="text-sm font-medium text-foreground">{item.name}</p>
                          <Badge variant="secondary" className="mt-2 biomorphic text-eco">
                            {item.sustainability}% Eco
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "sustainability" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="biomorphic neo-glass">
                  <CardHeader>
                    <CardTitle className="flex items-center text-eco">
                      <div className="w-8 h-8 bg-sustainability-gradient biomorphic flex items-center justify-center mr-3">
                        <Recycle className="h-4 w-4 text-white" />
                      </div>
                      Circular Impact Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-foreground">Water Conservation</span>
                        <Badge variant="secondary" className="biomorphic text-ocean">-28%</Badge>
                      </div>
                      <Progress value={72} className="biomorphic data-glow" />
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-foreground">Bio-Material Optimization</span>
                        <Badge variant="secondary" className="biomorphic-alt text-eco">-32%</Badge>
                      </div>
                      <Progress value={68} className="biomorphic-alt data-glow" />
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-foreground">Carbon Neutrality</span>
                        <Badge variant="secondary" className="biomorphic text-amber">-25%</Badge>
                      </div>
                      <Progress value={75} className="biomorphic data-glow" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="biomorphic-alt neo-glass">
                  <CardHeader>
                    <CardTitle className="flex items-center text-amber">
                      <div className="w-8 h-8 bg-innovation-gradient biomorphic-alt flex items-center justify-center mr-3">
                        <Scissors className="h-4 w-4 text-white" />
                      </div>
                      Organic Pattern Optimization
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-square bg-muted/20 biomorphic border-2 border-dashed border-border flex items-center justify-center mb-4 ar-overlay">
                      <div className="text-center">
                        <img 
                          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                          alt="Bio-Cutting Pattern Optimization"
                          className="w-full max-w-xs h-48 object-cover biomorphic mb-4"
                        />
                        <p className="text-sm text-muted-foreground">
                          Bio-optimized cutting patterns reduce waste by 32% through organic algorithms
                        </p>
                      </div>
                    </div>
                    <Button className="w-full biomorphic bg-sustainability-gradient hover:opacity-90 data-glow">
                      <Scissors className="mr-2 h-4 w-4" />
                      Generate Bio-Pattern
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "analytics" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="biomorphic neo-glass">
                  <CardHeader>
                    <CardTitle className="flex items-center text-violet">
                      <div className="w-8 h-8 bg-innovation-gradient biomorphic flex items-center justify-center mr-3">
                        <BarChart3 className="h-4 w-4 text-white" />
                      </div>
                      Bio-Design Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-foreground">Organic Trend Alignment</span>
                        <span className="text-sm font-medium text-eco">94%</span>
                      </div>
                      <Progress value={94} className="biomorphic data-glow" />
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-foreground">Bio-Consumer Appeal</span>
                        <span className="text-sm font-medium text-ocean">87%</span>
                      </div>
                      <Progress value={87} className="biomorphic-alt data-glow" />
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-foreground">Sustainable Feasibility</span>
                        <span className="text-sm font-medium text-amber">91%</span>
                      </div>
                      <Progress value={91} className="biomorphic data-glow" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="biomorphic-alt neo-glass">
                  <CardHeader>
                    <CardTitle className="flex items-center text-ocean">
                      <div className="w-8 h-8 bg-sustainability-gradient biomorphic-alt flex items-center justify-center mr-3">
                        <Globe className="h-4 w-4 text-white" />
                      </div>
                      Ecosystem Intelligence
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-muted/20 biomorphic">
                        <h4 className="font-medium mb-3 text-foreground">Bio-Trending Colors</h4>
                        <div className="flex space-x-2">
                          <div className="w-6 h-6 bg-ocean biomorphic" />
                          <div className="w-6 h-6 bg-eco biomorphic-alt" />
                          <div className="w-6 h-6 bg-amber biomorphic" />
                          <div className="w-6 h-6 bg-violet biomorphic-alt" />
                        </div>
                      </div>
                      
                      <div className="p-4 bg-muted/20 biomorphic-alt">
                        <h4 className="font-medium mb-3 text-foreground">Organic Pattern Trends</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-foreground">Cellular Forms</span>
                            <span className="text-sm text-eco">+15%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-foreground">Botanical Patterns</span>
                            <span className="text-sm text-ocean">+8%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-foreground">Fluid Dynamics</span>
                            <span className="text-sm text-amber">+12%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
