import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Procjena popravka",
    description:
      "Putem Vaših danih informacija analiziramo koliko bi popravak mogao koštati.",
  },
  {
    icon: <MapIcon />,
    title: "Gdje se nalazimo",
    description:
      "Nikole Zrinskog 21, 35000, Slavonski Brod",
  },
  {
    icon: <PlaneIcon />,
    title: "Kontakt",
    description:
      "E-mail: signal@inet.hr   Tel: +38535 627 576",
  },
  {
    icon: <GiftIcon />,
    title: "Kvaliteta i tradicija",
    description:
      "Preko 15 godina iskustva u servisiranju mobilnih uređaja i računala.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Kako {" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          mi to radimo{" "}
        </span>
        
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
      Dodjite do nas na našoj lokaciji ili nam se obratite putem mail-a
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
