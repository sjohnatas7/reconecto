import TitulePage from "@/components/titule"
import ExplicacaoSection from "@/components/explicacao"
import TrustedBy from "@/components/carroselLogos"
import Beneficios from "@/components/beneficios"
import CPA from "@/components/cpa"
import Footer from "@/components/footer"
import FormSection from "@/components/forms"
import WhatsappIcon from "@/components/whatsapp"
import { AccordionFAQ } from "@/components/accordion-faq"

function IndexPage() {
 
  return (
    <>
      <TitulePage></TitulePage>
      <ExplicacaoSection></ExplicacaoSection>
      {/* <TrustedBy></TrustedBy> */}
      <Beneficios></Beneficios>
      <CPA></CPA>
      {/* <AccordionFAQ></AccordionFAQ> */}
      <FormSection></FormSection>
      <Footer></Footer>
      <WhatsappIcon></WhatsappIcon>
    </>
  )
}


export default IndexPage;
