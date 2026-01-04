import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { FEATURED_TALENTS } from "@/lib/mock-data";
import { Search, MapPin, Star, ArrowRight } from "lucide-react";
import { Link } from "wouter";
// @ts-ignore
import heroImage from "@/assets/generated_images/community_marketplace_hero_image.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-32 md:pt-24 md:pb-40">
        <div className="container px-4 mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left space-y-8 animate-in slide-in-from-bottom-10 duration-700 fade-in">
              <Badge variant="outline" className="px-4 py-2 text-sm border-primary/20 bg-primary/5 text-primary rounded-full">
                Support Your Local Community 🏡
              </Badge>
              <h1 className="text-4xl md:text-7xl font-display font-extrabold tracking-tight text-foreground leading-[1.1]">
                Discover the <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Local Legends
                </span> <br className="hidden md:block" />
                Next Door
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Connect with talented artisans, skilled professionals, and passionate creators right in your neighborhood.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input 
                    placeholder="What are you looking for?" 
                    className="pl-10 h-12 text-base rounded-full border-muted shadow-sm"
                  />
                </div>
                <Button size="lg" className="h-12 rounded-full px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-all">
                  Search
                </Button>
              </div>
            </div>
            
            <div className="flex-1 relative w-full max-w-lg lg:max-w-none animate-in slide-in-from-right-10 duration-1000 fade-in">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 border-8 border-white dark:border-zinc-800">
                <img 
                  src={heroImage} 
                  alt="Community Marketplace" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-xl border border-border/50 animate-bounce duration-[3000ms]">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-sm">1.2k+ Locals</p>
                    <p className="text-xs text-muted-foreground">Joined this week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent z-0" />
      </section>

      {/* Featured Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold mb-4">Featured Talents</h2>
              <p className="text-muted-foreground">Top-rated locals ready to help you.</p>
            </div>
            <Button variant="ghost" className="hidden sm:flex items-center gap-2 group">
              View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_TALENTS.map((talent) => (
              <Card key={talent.id} className="group hover:-translate-y-1 transition-transform duration-300 border-none shadow-sm hover:shadow-xl bg-card">
                <div className="aspect-[4/3] relative overflow-hidden rounded-t-xl">
                  <img 
                    src={talent.imageUrl} 
                    alt={talent.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    {talent.rating} ({talent.reviewCount})
                  </div>
                </div>
                <CardHeader className="p-4 pb-2">
                  <div className="text-xs font-medium text-primary mb-1 uppercase tracking-wider">{talent.category}</div>
                  <h3 className="font-display font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                    {talent.name}
                  </h3>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                    {talent.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {talent.tags.slice(0, 2).map(tag => (
                      <Badge key={tag} variant="secondary" className="text-[10px] bg-secondary text-secondary-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-4 border-t border-border/50 flex items-center justify-between">
                  <div className="font-bold text-lg">
                    ${talent.hourlyRate}<span className="text-xs font-normal text-muted-foreground">/hr</span>
                  </div>
                  <Button size="sm" className="rounded-full">
                    View Profile
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
             <Button variant="outline" className="w-full">View All Talents</Button>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <div className="container px-4 mx-auto relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Are you a Local Legend?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join thousands of skilled locals growing their business and connecting with their community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="rounded-full text-lg px-8 py-6">
              Share Your Talent
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
