import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import logo from '@/assets/icon.png'; // Make sure the path is correct

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#about",
    label: "O nama",
  },
  {
    href: "#faq",
    label: "Česta pitanja",
  },
  {
    href: "#cta",
    label: "Servis",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between items-center">
          <NavigationMenuItem className="font-bold flex items-center">
            <a href="/" className="flex items-center">
              <img src={logo} alt="Signal Logo" className="mr-2 h-6 w-auto" />
              
            </a>
          </NavigationMenuItem>
          {/* rest of your code */}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
