"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useInView } from "react-intersection-observer"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function TitulePage() {
  const [isAnimated, setIsAnimated] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })
  if (inView && !isAnimated) {
    setIsAnimated(true)
  }
  return (
      <section className="flex min-h-screen items-center bg-pos-x-80 md:bg-center" style={{backgroundImage: 'url("/imagens/Home 2.webp")', backgroundSize: 'cover'}} id="titulo">

      <div className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="mb-0 flex max-w-[800px] flex-col items-start gap-2">
          <h1
            ref={ref}
            className={`hero text-5xl font-extrabold leading-tight tracking-tighter md:text-4xl ${
              isAnimated ? "loaded" : "invisible"
            }`}
            
          >
            <span className="textline bg-white px-2" style={{color: '#00718E', textShadow: "-1px 1px 2px white"}} >
            SOMOS A RECONECTO
            </span>
            <br className="hidden sm:inline" />
          </h1>
        </div>
        <div>
          <p className="mb-3 max-w-[700px] bg-primary px-2 text-lg text-white" >
          Somos uma clínica especializada no tratamento em Neuromodulação através da Estimulação Transcraniana por Corrente Contínua - tDCS, que tem por objetivo promover maior qualidade de vida e potencializar o desempenho dos pacientes em suas atividades.
          </p>
          <p className="mb-3 max-w-[700px] bg-primary px-2 text-lg text-white" >
          Estamos em atendimento em São Paulo capital e no interior do estado. Os atendimentos podem ser realizados em clínica ou em domicílio.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
            style={{backgroundColor: '#00718E'}}
          >
            Converse com a gente!
          </Link>
        </div>
      </div>
    </section>
  )
}
