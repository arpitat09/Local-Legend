import { Navbar } from "@/components/layout/navbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bell, MessageSquare, UserPlus, Heart, Star } from "lucide-react";

const MOCK_NOTIFICATIONS = [
  {
    id: 1,
    type: "message",
    title: "New Message",
    description: "Sarah Chen sent you a message about the custom vases.",
    time: "2 mins ago",
    icon: MessageSquare,
    iconColor: "text-blue-500",
    bg: "bg-blue-500/10",
    unread: true
  },
  {
    id: 2,
    type: "review",
    title: "New Review",
    description: "Someone left a 5-star review on your profile!",
    time: "1 hour ago",
    icon: Star,
    iconColor: "text-yellow-500",
    bg: "bg-yellow-500/10",
    unread: true
  },
  {
    id: 3,
    type: "follow",
    title: "New Follower",
    description: "Marcus Bell started following your collection.",
    time: "3 hours ago",
    icon: UserPlus,
    iconColor: "text-green-500",
    bg: "bg-green-500/10",
    unread: false
  },
  {
    id: 4,
    type: "like",
    title: "Project Liked",
    description: "Your 'Urban Garden' project was liked by 5 people.",
    time: "Yesterday",
    icon: Heart,
    iconColor: "text-red-500",
    bg: "bg-red-500/10",
    unread: false
  }
];

export default function Notifications() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-display font-bold">Notifications</h1>
            <Badge variant="secondary" className="px-3 py-1">
              2 New
            </Badge>
          </div>

          <Card className="border-none shadow-sm">
            <ScrollArea className="h-[calc(100vh-250px)] rounded-xl">
              <div className="divide-y">
                {MOCK_NOTIFICATIONS.map((notification) => (
                  <div 
                    key={notification.id} 
                    className={`p-4 flex gap-4 transition-colors hover:bg-muted/30 cursor-pointer ${notification.unread ? 'bg-primary/5' : ''}`}
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full ${notification.bg} flex items-center justify-center ${notification.iconColor}`}>
                      <notification.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between items-start">
                        <p className={`font-semibold text-sm ${notification.unread ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {notification.title}
                        </p>
                        <span className="text-xs text-muted-foreground">{notification.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-snug">
                        {notification.description}
                      </p>
                    </div>
                    {notification.unread && (
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </Card>
        </div>
      </main>
    </div>
  );
}
