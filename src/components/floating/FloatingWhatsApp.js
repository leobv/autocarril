import React from 'react';
import { MessageCircle } from 'lucide-react';
import './FloatingWhatsAppStyle.css';

const FloatingWhatsApp = () => {
    return (
        <a
            href="https://api.whatsapp.com/send?phone=541139359902"
            className="floating-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={32} />
        </a>
    );
};

export default FloatingWhatsApp;
