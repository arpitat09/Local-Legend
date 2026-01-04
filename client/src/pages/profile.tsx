import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CURRENT_USER } from "@/lib/mock-data";
import { MapPin, Calendar, Mail, Edit2, Camera, Link as LinkIcon, Save } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    toast.success("Profile updated successfully!");
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Header Card */}
          <div className="relative">
            {/* Banner */}
            <div className="h-48 w-full rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/10" />
            </div>
            
            {/* Profile Info */}
            <div className="px-6 pb-6">
              <div className="relative -mt-16 mb-4 flex flex-col sm:flex-row items-end sm:items-center justify-between gap-4">
                <div className="flex items-end gap-4">
                  <div className="relative group">
                    <Avatar className="w-32 h-32 border-4 border-background shadow-xl">
                      <AvatarImage src={CURRENT_USER.avatar} className="object-cover" />
                      <AvatarFallback className="text-4xl">AR</AvatarFallback>
                    </Avatar>
                    <button className="absolute bottom-0 right-0 p-2 bg-primary text-primary-foreground rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="mb-2">
                    <h1 className="text-3xl font-display font-bold">{CURRENT_USER.name}</h1>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4" />
                      {CURRENT_USER.location}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2 w-full sm:w-auto">
                  <Dialog open={isEditing} onOpenChange={setIsEditing}>
                    <DialogTrigger asChild>
                      <Button className="flex-1 sm:flex-none">
                        <Edit2 className="w-4 h-4 mr-2" />
                        Edit Profile
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle>Edit Profile</DialogTitle>
                        <DialogDescription>
                          Make changes to your public profile information.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="edit-name">Display Name</Label>
                          <Input id="edit-name" defaultValue={CURRENT_USER.name} />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="edit-location">Location</Label>
                          <Input id="edit-location" defaultValue={CURRENT_USER.location} />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="edit-bio">Bio</Label>
                          <Textarea 
                            id="edit-bio" 
                            defaultValue="Hi! I'm Alex. I love discovering hidden gems in our city and supporting local artisans..."
                            className="h-24"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                        <Button onClick={handleSave} className="gap-2">
                          <Save className="w-4 h-4" />
                          Save Changes
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge variant="secondary" className="px-3 py-1">Photography Enthusiast</Badge>
                <Badge variant="secondary" className="px-3 py-1">Local Supporter</Badge>
                <Badge variant="secondary" className="px-3 py-1">Coffee Lover</Badge>
              </div>
            </div>
          </div>

          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md bg-muted/50 p-1 rounded-xl">
              <TabsTrigger value="about" className="rounded-lg">About</TabsTrigger>
              <TabsTrigger value="activity" className="rounded-lg">Activity</TabsTrigger>
              <TabsTrigger value="reviews" className="rounded-lg">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="mt-6 space-y-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-display font-bold text-xl">Bio</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Hi! I'm Alex. I love discovering hidden gems in our city and supporting local artisans. 
                    I'm always on the lookout for unique pottery and live jazz events. 
                    Feel free to message me if you have recommendations!
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">{CURRENT_USER.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Joined</p>
                        <p className="text-sm text-muted-foreground">October 2023</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                   <h3 className="font-display font-bold text-xl mb-4">Linked Accounts</h3>
                   <div className="space-y-3">
                     <div className="flex items-center justify-between p-3 border rounded-lg bg-card/50 hover:bg-card transition-colors">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded bg-[#181717] flex items-center justify-center text-white">
                             <span className="font-bold text-xs">G</span>
                           </div>
                           <span className="font-medium">Google</span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-muted-foreground">Connected</Button>
                     </div>
                   </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="activity">
              <div className="text-center py-12 text-muted-foreground">
                <p>Recent activity will appear here.</p>
              </div>
            </TabsContent>

            <TabsContent value="reviews">
              <div className="text-center py-12 text-muted-foreground">
                 <p>Reviews written by Alex will appear here.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
