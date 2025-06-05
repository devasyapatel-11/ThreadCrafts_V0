import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  Palette, 
  Zap, 
  Globe, 
  Recycle, 
  TrendingUp,
  Eye,
  Cpu,
  Layers,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Leaf,
  Atom,
  Waves
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
};

const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Home() {
  return (
    <>
      <Head>
        <title>ThreadCrafts</title>
        <meta name="description" content="Transform textile design with AI-powered pattern generation, 3D simulation, and sustainable prototyping. Reduce waste by 30% while accelerating innovation through neo-materialism design philosophy." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="bg-background min-h-screen">
        {/* Navigation */}
        <motion.nav 
          className="fixed top-0 w-full z-50 border-b border-border bg-background/80"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
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
              <div className="flex items-center space-x-4">
                <Link href="/login">
                  <Button variant="ghost" className="biomorphic">Sign In</Button>
                </Link>
                <Link href="/signup">
                  <Button className="biomorphic-alt bg-innovation-gradient hover:opacity-90">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-transparent">
          {/* Floating background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute top-20 left-10 w-32 h-32 bg-eco/10 biomorphic"
              variants={floatingAnimation}
              animate="animate"
            />
            <motion.div 
              className="absolute top-40 right-20 w-24 h-24 bg-amber/10 biomorphic-alt"
              variants={floatingAnimation}
              animate="animate"
              transition={{ delay: 1 }}
            />
            <motion.div 
              className="absolute bottom-40 left-1/4 w-40 h-40 bg-violet/10 biomorphic"
              variants={floatingAnimation}
              animate="animate"
              transition={{ delay: 2 }}
            />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
              className="text-center"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <Badge variant="secondary" className="mb-4 biomorphic neo-glass">
                  <Leaf className="w-4 h-4 mr-2 text-eco" />
                  Neo-Sustainable Design Revolution
                </Badge>
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
              >
                Transform Textile Design with{" "}
                <span className="bg-sustainability-gradient bg-clip-text text-transparent">
                  Biomorphic Intelligence
                </span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                Revolutionize fashion through neo-materialism design philosophy, blending digital precision 
                with organic textures. AI-driven pattern generation meets sustainable innovation.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link href="/signup">
                  <Button size="lg" className="w-full sm:w-auto biomorphic-alt bg-sustainability-gradient hover:opacity-90 data-glow">
                    Start Creating
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="w-full sm:w-auto biomorphic neo-glass">
                  Experience AR Demo
                  <Eye className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Hero Image with AR Overlay */}
        <motion.section 
          className="px-4 sm:px-6 lg:px-8 mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="relative biomorphic overflow-hidden border border-border">
              <img 
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80"
                alt="Textile Weaving Closeup"
                className="w-full h-[400px] md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 ar-overlay" />
              <div className="absolute top-4 right-4 neo-glass biomorphic p-3">
                <div className="flex items-center space-x-2 text-sm text-foreground">
                  <div className="w-2 h-2 bg-eco rounded-full animate-pulse" />
                  <span>AR Mode Active</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Dynamic Stats Section */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 organic-texture" />
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={scaleIn} className="text-center">
                <div className="biomorphic neo-glass p-6 data-glow">
                  <div className="text-4xl font-bold text-eco mb-2">30%</div>
                  <div className="text-muted-foreground">Waste Reduction</div>
                  <Recycle className="h-6 w-6 text-eco mx-auto mt-2" />
                </div>
              </motion.div>
              <motion.div variants={scaleIn} className="text-center">
                <div className="biomorphic-alt neo-glass p-6 data-glow">
                  <div className="text-4xl font-bold text-ocean mb-2">60%</div>
                  <div className="text-muted-foreground">Faster Prototyping</div>
                  <Zap className="h-6 w-6 text-ocean mx-auto mt-2" />
                </div>
              </motion.div>
              <motion.div variants={scaleIn} className="text-center">
                <div className="biomorphic neo-glass p-6 data-glow">
                  <div className="text-4xl font-bold text-amber mb-2">92.4%</div>
                  <div className="text-muted-foreground">Simulation Accuracy</div>
                  <Cpu className="h-6 w-6 text-amber mx-auto mt-2" />
                </div>
              </motion.div>
              <motion.div variants={scaleIn} className="text-center">
                <div className="biomorphic-alt neo-glass p-6 data-glow">
                  <div className="text-4xl font-bold text-violet mb-2">$270B</div>
                  <div className="text-muted-foreground">Market Opportunity</div>
                  <TrendingUp className="h-6 w-6 text-violet mx-auto mt-2" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Neo-Materialism Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Biomorphic Technology Stack
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Advanced AI meets organic design philosophy to create sustainable textile innovations 
                that bridge digital precision with natural forms.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 biomorphic neo-glass group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-sustainability-gradient biomorphic flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Cpu className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-ocean">Generative Pattern AI</CardTitle>
                    <CardDescription>
                      Biomorphic GANs merge historical textile data with organic forms to create 
                      market-ready patterns that follow natural design principles.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 biomorphic-alt neo-glass group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-innovation-gradient biomorphic-alt flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Layers className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-amber">Neo-Material Simulation</CardTitle>
                    <CardDescription>
                      Physics-based rendering with organic texture mapping replicates complex 
                      material behaviors with 92.4% accuracy for realistic prototyping.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 biomorphic neo-glass group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-sustainability-gradient biomorphic flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-violet">Augmented Reality Preview</CardTitle>
                    <CardDescription>
                      Immersive AR overlays enable real-time garment visualization with 
                      biomorphic interface elements for intuitive design iteration.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 biomorphic-alt neo-glass group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-innovation-gradient biomorphic-alt flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Recycle className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-eco">Circular Design Analytics</CardTitle>
                    <CardDescription>
                      Dynamic environmental impact visualization suggests eco-friendly alternatives 
                      and optimizes material usage through organic cutting patterns.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 biomorphic neo-glass group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-sustainability-gradient biomorphic flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <BarChart3 className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-ocean">Ecosystem Integration</CardTitle>
                    <CardDescription>
                      Closed-loop platform connects digital designs to sustainable supply chains 
                      with real-time production planning and material sourcing optimization.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 biomorphic-alt neo-glass group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-innovation-gradient biomorphic-alt flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Waves className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-amber">Organic Quality Control</CardTitle>
                    <CardDescription>
                      Computer vision with biomorphic pattern recognition detects defects and 
                      ensures color harmony, reducing manual inspection by 60%.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Sustainability Impact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 organic-texture" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Transforming Fashion Through{" "}
                  <span className="bg-sustainability-gradient bg-clip-text text-transparent">
                    Neo-Sustainable Innovation
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our biomorphic design philosophy merges digital precision with organic sustainability, 
                  creating a circular economy for textile innovation.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-eco biomorphic flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Regenerative Impact</h3>
                      <p className="text-muted-foreground">Cut textile waste by 30% through biomorphic digital prototyping and organic material optimization algorithms.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-amber biomorphic-alt flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Accelerated Innovation</h3>
                      <p className="text-muted-foreground">Slash prototyping time by 40-60% with AI-powered design generation that follows natural form principles.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-violet biomorphic flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Organic Customization</h3>
                      <p className="text-muted-foreground">Bridge mass production and bespoke fashion with personalized AI designs inspired by natural patterns.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="biomorphic-alt overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Sustainable Fashion Design"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 ar-overlay" />
                  <div className="absolute bottom-4 left-4 neo-glass biomorphic p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-eco rounded-full animate-pulse" />
                      <span className="text-sm text-foreground font-medium">Sustainability Score: 94%</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-sustainability-gradient opacity-5" />
          <motion.div 
            className="max-w-4xl mx-auto text-center relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Pioneer{" "}
              <span className="bg-innovation-gradient bg-clip-text text-transparent">
                Neo-Sustainable Design?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join the biomorphic revolution in textile design. Create with AI, design with nature.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="w-full sm:w-auto biomorphic-alt bg-sustainability-gradient hover:opacity-90 data-glow">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full sm:w-auto biomorphic neo-glass">
                Experience AR Demo
                <Eye className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <Atom className="h-6 w-6 text-ocean" />
                <span className="text-lg font-semibold bg-sustainability-gradient bg-clip-text text-transparent">
                  ThreadCrafts
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                © 2024 ThreadCrafts. Pioneering neo-sustainable fashion through biomorphic intelligence.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
