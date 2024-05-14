"use client"
import { useState } from "react"
import { Accordion, AccordionItem } from "@nextui-org/react"


export function AccordionFAQ() {

  return (
    <section className="bg-primary py-8">
      <div className="container mx-auto flex flex-col justify-between">
        <h2 className=" text-center text-4xl font-bold text-white">FAQ</h2>

        <Accordion
          variant="bordered"
          selectionMode="multiple"
          className="w-full p-5 text-white"
          // onSelectionChange={setSelectedKeys}
        >
          <AccordionItem
            value="item-1"
            title="Existe comprovação científica para o tratamento com neuromodulação?"
            key="1"
          >
            Segundo pesquisa da PubMed de Março/24, já são mais de 8500 artigos
            científicos publicados sobre a tDCS, sendo as 5 disfunções com mais
            artigos publicados: depressão,AVC, dor crônica, transtorno do
            movimento e transtorno do espectro do autismo.
          </AccordionItem>
          <AccordionItem value="item-2" title="Onde atendemos?" key="2">
            Atendemos no Interior do estado de São Paulo e em São Paulo. Nosso
            atendimento é a domicílio, iremos até você!
          </AccordionItem>
          <AccordionItem value="item-3" title="Esse tratamento é invasivo?" key="3">
            NÃO! Através da aplicação de eletrodos no exterior da cabeça do
            paciente, aplicamos uma corrente elétrica contínua para estimular
            regiões específicas do cérebro.
          </AccordionItem>
          <AccordionItem value="item-4" title="Quantas sessões são realizadas?" key="4">
            O número de sessões depende de cada caso e disfunção. Por isso,
            realizamos uma avaliação prévia para definir qual a melhor opção
            para o tratamento.
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
