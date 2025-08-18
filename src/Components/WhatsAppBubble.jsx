import { FaWhatsapp } from "react-icons/fa";

const WhatsAppBubble = () => {
  return (
    <a
      href="https://wa.me/34615161958"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      aria-label="Chat por WhatsApp"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppBubble;
