import { Button } from "./ui/button";
import { HeroCards } from "./HeroCards";



export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#98f596]  to-[#47d278] text-transparent bg-clip-text">
              SIGNAL
            </span>{" "}
            servis i trgovina
          </h1>{" "}
          {" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
             mobitela i računala
            </span>{" "}
            
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        Specijalizirani za popravke svih modela mobitela, igračih konzola,
računala te prijenosnih računala koja su na tržištu.
Naše višegodišnje, veliko iskustvo, konstantna ulaganja u opremu i
edukacija uvelike nam pomažu u tome.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
  <a href="https://www.google.com/maps/place/Ul.+Nikole+Zrinskog+21,+35000,+Slavonski+Brod/@45.1570495,18.0150167,17z/data=!3m1!4b1!4m6!3m5!1s0x475dba00e664c827:0x6e4aa33f449b61ec!8m2!3d45.1570457!4d18.0175916!16s%2Fg%2F11pzxb3z9x?entry=ttu
" className="w-full md:w-1/3" target="_blank" rel="noopener noreferrer">
    <Button className="w-full">Kako do nas?</Button>
  </a>
</div>

      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
