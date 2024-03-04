import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Kada će biti gotovo?",
    answer: "Ako imamo rezervni dio popravak bude tokom dana",
    value: "item-1",
  },
  {
    question: "Ako nemate trazeni dio??",
    answer:
      "Robu narucujemo dva puta tjedno tako da servis bude odradjen u roku od 2-3 radna dana.",
    value: "item-2",
  },
  {
    question:
      "Jeli otkupljujete mobitele?",
    answer:
      "Mobitele isključivo otkupljuje vlasnik koji je najčešće u popodnevnim satim u poslovnici(iza 15h)",
    value: "item-3",
  },
  {
    question: "Jeste li Vi ovlašteni servis?",
    answer: "Nismo, ali surađujemo s ovlaštenim servisima. Uređaj vam se može poslati u ovlašteni servisali vrijeme popravka se produžuje.",
    value: "item-4",
  },
  {
    question:
      "Popravljate li televizore, perilice rublja, kućanske aparate?",
    answer:
      "Ne, isključivo se bavimo servisiranjem mobilnih uređaja, računala, tableta, navigacija i igraćih konzola.",
    value: "item-5",
  },
  {
    question: "Zašto duže čekamo na popravak?",
    answer: "Na popravak se duže čeka ako je problem kvara konpleksniji, ako je nemoguće naručiti rezervni dio ili ako je softwerski zahtjevniji problem.",
    value: "item-4",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Često postavljana{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Pitanja
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Imate još pitanja?{" "}
        <a
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Kontaktirajte nas
        </a>
      </h3>
    </section>
  );
};
