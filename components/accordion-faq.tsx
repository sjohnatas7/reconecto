import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionFAQ() {
  return (
    <section className="bg-primary py-8">
      <div className="container mx-auto flex flex-col justify-between">
        <h2 className=" text-center text-4xl font-bold text-white">
          FAQ
        </h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Existe comprovação científica para o tratamento com
              neuromodulação?
            </AccordionTrigger>
            <AccordionContent>
              Segundo pesquisa da PubMed de Março/24, já são mais de 8500
              artigos científicos publicados sobre a tDCS, sendo as 5 disfunções
              com mais artigos publicados: depressão,AVC, dor crônica,
              transtorno do movimento e transtorno do espectro do autismo.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" >
            <AccordionTrigger>Onde atendemos?</AccordionTrigger>
            <AccordionContent>
              Atendemos no Interior do estado de São Paulo e em São Paulo. Nosso
              atendimento é a domicílio, iremos até você!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Esse tratamento é invasivo?</AccordionTrigger>
            <AccordionContent>
              NÃO! Através da aplicação de eletrodos no exterior da cabeça do
              paciente, aplicamos uma corrente elétrica contínua para estimular
              regiões específicas do cérebro.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Quantas sessões são realizadas?</AccordionTrigger>
            <AccordionContent>
              O número de sessões depende de cada caso e disfunção. Por isso,
              realizamos uma avaliação prévia para definir qual a melhor opção
              para o tratamento.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
