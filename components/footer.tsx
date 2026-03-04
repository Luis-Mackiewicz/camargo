import Image from "next/image";
import InstagramIcon from "@/public/icons/instagram.png";
import FacebookIcon from "@/public/icons/facebook.png";
import WhatsappIcon from "@/public/icons/whatsapp-footer.png";
import YoutubeIcon from "@/public/icons/youtube.png";
import { whatsappLink } from "./header";

export default function Footer() {
  return (
    <footer className="bg-red-500 w-full fixed bottom-0 flex items-center justify-center">
      <div className="md:w-4/5">
        <address className=" flex flex-col items-center justify-center order-2 md:order-1 md:items-baseline md:p-4">
          <span>Endereço: Janiópolis/ PR</span>
          <span>PR Rua: Tiradentes, N* 535 CEP: 87380-000</span>
        </address>
      </div>
    </footer>
  );
}

//  <footer className=" h-auto w-full fixed bottom-0 grid grid-cols-1 gap-y-1 text-white/70 z-40 text-xs sm: md:text-base md:grid-cols-3">
//       <address className=" flex flex-col items-center justify-center order-2 md:order-1 md:items-baseline md:p-4">
//         <span>Endereço: Janiópolis/ PR</span>
//         <span>PR Rua: Tiradentes, N* 535 CEP: 87380-000</span>
//       </address>

//       <div className="flex items-center justify-center gap-x-4 order-1 md:order-2">
//         <a href={whatsappLink} target="_blank">
//           <Image
//             src={WhatsappIcon}
//             alt="icone do whatsapp"
//             className="w-6 md:w-8 transition-all hover:scale-125"
//           />
//         </a>
//         <a
//           href="https://www.instagram.com/camargoadvocacia1/?hl=pt-br"
//           target="_blank"
//         >
//           <Image
//             src={InstagramIcon}
//             alt="icone do youtube"
//             className="w-6 md:w-8 transition-all hover:scale-125"
//           />
//         </a>
//         <a
//           href="https://www.facebook.com/Camargoadvocacia1/?locale=pt_BR"
//           target="_blank"
//         >
//           <Image
//             src={FacebookIcon}
//             alt="icone do facebook"
//             className="w-6 md:w-8 transition-all hover:scale-125"
//           />
//         </a>
//         <a href="" target="_blank">
//           <Image
//             src={YoutubeIcon}
//             alt="icone do youtube"
//             className="w-6 md:w-8 transition-all duration-700 hover:scale-125"
//           />
//         </a>
//       </div>
//     </footer>
