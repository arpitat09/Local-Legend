import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MOCK_MESSAGES, FEATURED_TALENTS, CURRENT_USER } from "@/lib/mock-data";
import { Send, MoreVertical, Phone, Video, ArrowLeft } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export default function Chat() {
  const [activeChat, setActiveChat] = useState<string>("t1");
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState(MOCK_MESSAGES);
  const scrollRef = useRef<HTMLDivElement>(null);

  const activeTalent = FEATURED_TALENTS.find(t => t.id === activeChat);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, activeChat]);

  const handleSendMessage = () => {
    if (!messageInput.trim()) return;

    const newMessage = {
      id: `m${Date.now()}`,
      senderId: CURRENT_USER.id,
      receiverId: activeChat,
      content: messageInput,
      timestamp: new Date().toISOString(),
      read: true
    };

    setMessages([...messages, newMessage]);
    setMessageInput("");

    // Fake reply after 1 second
    setTimeout(() => {
      const reply = {
        id: `m${Date.now() + 1}`,
        senderId: activeChat,
        receiverId: CURRENT_USER.id,
        content: `Got it! Let's talk more about that soon.`,
        timestamp: new Date().toISOString(),
        read: false
      };
      setMessages(prev => [...prev, reply]);
      toast.info(`New message from ${activeTalent?.name}`);
    }, 1500);
  };

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      <Navbar />
      
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar - Chat List */}
        <div className={cn(
          "w-full md:w-80 border-r bg-muted/20 flex flex-col",
          activeChat && "hidden md:flex"
        )}>
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <h2 className="font-display font-bold text-xl">Messages</h2>
            </div>
            <Input className="mt-4" placeholder="Search conversations..." />
          </div>
          <ScrollArea className="flex-1">
            <div className="flex flex-col">
              {FEATURED_TALENTS.map(talent => (
                <button
                  key={talent.id}
                  onClick={() => setActiveChat(talent.id)}
                  className={cn(
                    "flex items-center gap-4 p-4 text-left transition-colors hover:bg-muted/50 border-b border-border/40",
                    activeChat === talent.id && "bg-primary/5 hover:bg-primary/10 border-l-4 border-l-primary"
                  )}
                >
                  <Avatar className="h-12 w-12 border-2 border-background">
                    <AvatarImage src={talent.imageUrl} />
                    <AvatarFallback>{talent.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 overflow-hidden">
                    <div className="flex justify-between items-baseline">
                      <span className="font-semibold truncate">{talent.name}</span>
                      <span className="text-xs text-muted-foreground">Just now</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">
                      Click to chat...
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Main Chat Area */}
        <div className={cn(
          "flex-1 flex flex-col bg-background",
          !activeChat && "hidden md:flex"
        )}>
          {activeTalent ? (
            <>
              {/* Chat Header */}
              <div className="h-16 border-b flex items-center justify-between px-4 md:px-6 bg-card/50 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="md:hidden"
                    onClick={() => setActiveChat("")}
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </Button>
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={activeTalent.imageUrl} />
                    <AvatarFallback>{activeTalent.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold leading-none text-sm md:text-base">{activeTalent.name}</h3>
                    <p className="text-[10px] md:text-xs text-muted-foreground mt-1 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-500 block"></span>
                      Online
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon"><Phone className="w-5 h-5" /></Button>
                  <Button variant="ghost" size="icon"><Video className="w-5 h-5" /></Button>
                  <Button variant="ghost" size="icon"><MoreVertical className="w-5 h-5" /></Button>
                </div>
              </div>

              {/* Messages Area */}
              <ScrollArea className="flex-1 p-6">
                <div className="space-y-6 max-w-3xl mx-auto">
                   {messages.filter(m => (m.senderId === activeChat && m.receiverId === CURRENT_USER.id) || (m.senderId === CURRENT_USER.id && m.receiverId === activeChat)).map((msg) => {
                     const isMe = msg.senderId === CURRENT_USER.id;
                     return (
                       <div key={msg.id} className={cn("flex", isMe ? "justify-end" : "justify-start")}>
                         <div className={cn(
                           "max-w-[80%] rounded-2xl px-5 py-3 shadow-sm",
                           isMe 
                             ? "bg-primary text-primary-foreground rounded-br-none animate-in slide-in-from-right-2" 
                             : "bg-muted text-foreground rounded-bl-none animate-in slide-in-from-left-2"
                         )}>
                           <p>{msg.content}</p>
                           <p className={cn("text-[10px] mt-1 opacity-70", isMe ? "text-right" : "text-left")}>
                             {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                           </p>
                         </div>
                       </div>
                     );
                   })}
                   <div ref={scrollRef} />
                </div>
              </ScrollArea>

              {/* Input Area */}
              <div className="p-4 border-t bg-card/50">
                <form 
                  className="max-w-3xl mx-auto flex gap-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                >
                  <Input 
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Type your message..." 
                    className="flex-1 rounded-full border-muted-foreground/20 focus-visible:ring-primary"
                  />
                  <Button type="submit" size="icon" className="rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-shadow">
                    <Send className="w-5 h-5" />
                  </Button>
                </form>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-muted-foreground">
              Select a conversation to start chatting
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
