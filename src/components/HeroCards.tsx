import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src="https://github.com/shadcn.png"
            />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Kala Kralj</CardTitle>
            <CardDescription>@GoogleRecenzije</CardDescription>
          </div>
        </CardHeader>

        <CardContent>Jako, jako, jako ljubazni mladić, popravio mi je u 5min što mi je trebalo na mob.njemu jednostavno, meni komplicirano.Zahvalna sam.</CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="https://i.pravatar.cc/150?img=58"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Mirjana Maric</CardTitle>
          <CardDescription className="font-normal text-primary">
            
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
          Mogu samo preporučiti... ljubaznost i profesionalnost na nivou....svakako ću opet doći....
          </p>
        </CardContent>

       
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Servis
            <Badge
              variant="secondary"
              className="text-sm text-primary"
            >
              Najpopularnije
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">7€ do </span>
            <span className="text-muted-foreground"> 1500€</span>
          </div>

          <CardDescription>
            Servis mobitela ovisno o tezini popravka
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">Kontaktirajte nas</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["Zamjena ekrana", "Instaliranje novoga software-a", "Zamjena baterije"].map(
              (benefit: string) => (
                <span
                  key={benefit}
                  className="flex"
                >
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Računala</CardTitle>
            <CardDescription className="text-md mt-2">
              Slaganje konfiguracija po komponentama te servis i održavanje istih
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
