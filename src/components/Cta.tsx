import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Svako racunalo i mobitel
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              se moze servisirati{" "}
            </span>
            ovisi samo o kompleksnosti servisa
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
           Nekoliko linkova korisnih za osnovne detalje kako proces servisiranja izgleda
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
  <a href="https://znatko.com/23682/sto-sve-nudi-pravi-servis-racunala" className="w-full md:mr-4 md:w-auto">
    <Button className="w-full md:w-auto">Servis</Button>
  </a>
  {/* The "Opis procesa" button has been removed */}
</div>

      </div>
    </section>
  );
};
