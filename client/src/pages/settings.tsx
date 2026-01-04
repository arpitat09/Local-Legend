import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, User, Palette, Shield, Eye, Trash2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type SettingsTab = "account" | "appearance" | "privacy";

export default function Settings() {
  const [activeTab, setActiveTab] = useState<SettingsTab>("account");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-display font-bold mb-6">Settings</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
            {/* Sidebar Navigation */}
            <nav className="space-y-1">
              <Button 
                variant="ghost" 
                onClick={() => setActiveTab("account")}
                className={cn(
                  "w-full justify-start font-medium",
                  activeTab === "account" ? "bg-secondary text-secondary-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <User className="w-4 h-4 mr-2" />
                Account
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => setActiveTab("appearance")}
                className={cn(
                  "w-full justify-start font-medium",
                  activeTab === "appearance" ? "bg-secondary text-secondary-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Palette className="w-4 h-4 mr-2" />
                Appearance
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => setActiveTab("privacy")}
                className={cn(
                  "w-full justify-start font-medium",
                  activeTab === "privacy" ? "bg-secondary text-secondary-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Lock className="w-4 h-4 mr-2" />
                Privacy & Security
              </Button>
            </nav>
            
            {/* Settings Content */}
            <div className="space-y-6">
              {activeTab === "account" && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Profile Information</CardTitle>
                      <CardDescription>Update your photo and personal details.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Display Name</Label>
                        <Input id="name" defaultValue="Alex Rivera" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" defaultValue="alex@example.com" />
                      </div>
                      <div className="grid gap-2">
                         <Label htmlFor="bio">Bio</Label>
                         <Input id="bio" defaultValue="Local enthusiast..." />
                      </div>
                      <Button className="mt-2">Save Changes</Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-destructive/20">
                    <CardHeader>
                      <CardTitle className="text-destructive">Danger Zone</CardTitle>
                      <CardDescription>Actions that cannot be undone.</CardDescription>
                    </CardHeader>
                    <CardContent>
                       <Button variant="destructive" className="flex items-center gap-2">
                         <Trash2 className="w-4 h-4" />
                         Delete Account
                       </Button>
                    </CardContent>
                  </Card>
                </div>
              )}

              {activeTab === "appearance" && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Theme & Styling</CardTitle>
                      <CardDescription>Customize how Local Legend looks for you.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Dark Mode</Label>
                          <p className="text-sm text-muted-foreground">Switch between light and dark themes</p>
                        </div>
                        <Switch />
                      </div>
                      <Separator />
                      <div className="space-y-3">
                        <Label>Accent Color</Label>
                        <div className="flex gap-3">
                          {["#f97316", "#3b82f6", "#10b981", "#8b5cf6"].map((color) => (
                            <button 
                              key={color}
                              className="w-8 h-8 rounded-full border-2 border-background ring-2 ring-muted hover:scale-110 transition-transform"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Reduced Motion</Label>
                          <p className="text-sm text-muted-foreground">Minimize UI animations</p>
                        </div>
                        <Switch />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {activeTab === "privacy" && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Security</CardTitle>
                      <CardDescription>Manage your password and security settings.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="current">Current Password</Label>
                        <Input id="current" type="password" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="new">New Password</Label>
                        <Input id="new" type="password" />
                      </div>
                      <Button className="mt-2">Update Password</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Privacy Control</CardTitle>
                      <CardDescription>Control who can see your activity.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <Eye className="w-4 h-4 text-primary" />
                            <Label>Public Profile</Label>
                          </div>
                          <p className="text-sm text-muted-foreground">Allow others to see your bio and activity</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-primary" />
                            <Label>Two-Factor Authentication</Label>
                          </div>
                          <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                        </div>
                        <Switch />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
