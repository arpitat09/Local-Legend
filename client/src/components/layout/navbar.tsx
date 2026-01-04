import { Link, useLocation } from "wouter";
import { User, MessageSquare, Menu, X, Bell } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CURRENT_USER } from "@/lib/mock-data";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const isActive = (path: string) => location === path;

  const handleLogout = () => {
    toast.success("Successfully logged out");
    setLocation("/auth");
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl group-hover:rotate-3 transition-transform">
              L
            </div>
            <span className="font-display font-bold text-lg md:text-xl tracking-tight text-foreground">
              Local Legend
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink href="/" active={isActive("/")}>Explore</NavLink>
          <NavLink href="/about" active={isActive("/about")}>About</NavLink>
          <NavLink href="/chat" active={isActive("/chat")}>Messages</NavLink>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <Link href="/notifications">
            <Button 
              variant="ghost" 
              size="icon" 
              className={`text-muted-foreground hover:text-foreground relative ${isActive("/notifications") ? "text-primary" : ""}`}
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"></span>
            </Button>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                <Avatar className="h-8 w-8 md:h-9 md:h-9 border-2 border-background ring-2 ring-muted hover:ring-primary transition-all">
                  <AvatarImage src={CURRENT_USER.avatar} alt={CURRENT_USER.name} />
                  <AvatarFallback>AR</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{CURRENT_USER.name}</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {CURRENT_USER.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                className="text-destructive focus:text-destructive"
                onClick={handleLogout}
              >
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t bg-background p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          <MobileNavLink href="/" onClick={() => setIsOpen(false)}>Explore</MobileNavLink>
          <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
          <MobileNavLink href="/chat" onClick={() => setIsOpen(false)}>Messages</MobileNavLink>
          <MobileNavLink href="/notifications" onClick={() => setIsOpen(false)}>Notifications</MobileNavLink>
          <MobileNavLink href="/profile" onClick={() => setIsOpen(false)}>Profile</MobileNavLink>
          <MobileNavLink href="/settings" onClick={() => setIsOpen(false)}>Settings</MobileNavLink>
          <button 
            onClick={handleLogout}
            className="block text-lg font-medium text-destructive p-2 hover:bg-muted rounded-md text-left"
          >
            Log out
          </button>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, active, children }: { href: string, active: boolean, children: React.ReactNode }) {
  return (
    <Link href={href}>
      <a className={`text-sm font-medium transition-colors hover:text-primary ${
        active ? "text-primary font-semibold" : "text-muted-foreground"
      }`}>
        {children}
      </a>
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string, onClick: () => void, children: React.ReactNode }) {
  return (
    <Link href={href}>
      <a 
        onClick={onClick}
        className="block text-lg font-medium text-foreground p-2 hover:bg-muted rounded-md"
      >
        {children}
      </a>
    </Link>
  );
}
