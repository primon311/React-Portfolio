import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl text-neutral-100"
      >
        Get in Touch
      </motion.h1>

      <div className="flex flex-col items-center gap-6 text-center text-lg text-neutral-300">
        
        {/* Address */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4"
        >
          <FaMapMarkerAlt className="text-neutral-500 text-2xl" />
          <p>{CONTACT.address}</p>
        </motion.div>

        {/* Phone */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4"
        >
          <FaPhoneAlt className="text-neutral-500 text-2xl" />
          <p>{CONTACT.phoneNo}</p>
        </motion.div>

        {/* Email */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4"
        >
          <FaEnvelope className="text-neutral-500 text-2xl" />
          <a 
            href={`mailto:${CONTACT.email}`} 
            className="hover:text-yellow-400 transition-colors"
          >
            {CONTACT.email}
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
