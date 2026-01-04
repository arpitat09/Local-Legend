import { Navbar } from "@/components/layout/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Info, Target, Heart, Users } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-5">
            <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight">
              Our Mission: Empowering <br/>
              <span className="text-primary">Local Legends</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We believe every neighborhood has hidden gems—talented artisans, skilled professionals, and passionate small business owners who make our communities unique.
            </p>
          </div>

          {/* Grid Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-none shadow-sm bg-muted/30">
              <CardHeader>
                <Target className="w-10 h-10 text-primary mb-2" />
                <CardTitle>The Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To create a seamless bridge between local talent and community needs, fostering a circular economy where neighbors support neighbors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm bg-muted/30">
              <CardHeader>
                <Heart className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Authenticity, community, and growth. We prioritize real connections and the success of small-scale entrepreneurs.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 pt-12 border-t">
            <h2 className="text-3xl font-display font-bold">Why Local Legend?</h2>
            <div className="space-y-4">
              {[
                { title: "Direct Connection", desc: "No middleman. Talk directly to the people behind the service." },
                { title: "Verified Reviews", desc: "Trust your neighbors. Our review system ensures quality and reliability." },
                { title: "Sustainable Support", desc: "By using Local Legend, you keep money within your local community." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
