import React from "react"
import { FaEnvelope, FaInstagram, FaPhone } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const Footer: React.FC = () => {
  return (
    <footer className="text-off-white p-6 px-0  z-10 bg-[#1a1a1a]">
      <div className="mx-auto md:mx-6 lg:p-0 py-4 flex justify-around gap-8 flex-col md:flex-row px-6 mb-7">
        <div className="md:w-[70vw]">
          <div className="">
            <h1 className="w-full font-bold text-off-white">Contato</h1>
            <div className="border-b-[1px] border-off-white w-full" />
          </div>
          <div className="mt-4 flex flex-col gap-4 md:gap-2">
            <p className="text-xs md:text-base md:items-center flex flex-col sm:flex-row gap-2">
              <FaEnvelope className=" text-off-white flex text-sm w-10" />
              <span className="
               line-clamp-3 break-words">
                observatorio@prefeitura.arapiraca.al.gov.br
              </span>
            </p>
            <p className="text-xs md:text-base md:items-center flex flex-col sm:flex-row gap-2">
              <FaPhone className=" text-off-white flex text-sm " />
              (82) 3521-0000
            </p>
          </div>
        </div>

        <div className="md:w-[70vw]">
          <div className="">
            <h1 className="w-full  text-off-white font-bold">Redes Sociais</h1>
            <div className="border-b-[1px] border-off-white w-full " />
          </div>
          <div className="flex gap-4 mt-4 flex-row ">
            <a
              href="https://www.facebook.com/PrefeituraArapiraca/"
              className=""
              aria-label="Facebook Oficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://x.com/arapiracaal"
              className="social-link"
              aria-label="Perfil no X (Twitter)"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter size={24} />
            </a>
            <a
              href="https://www.instagram.com/prefeituradearapiraca/?hl=pt"
              className=""
              aria-label="Instagram Oficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full ">
        <div className="border-b-[1px] border-off-white w-full" />
        <p className="items-center justify-center flex flex-wrap p-3 text-center  ">
          © 2024 Prefeitura Municipal de Arapiraca - Todos os direitos
          reservados
        </p>
      </div>
    </footer>
  )
}

export default Footer
