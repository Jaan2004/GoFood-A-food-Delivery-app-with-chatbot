import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Create the chatbot configuration script
    const configScript = document.createElement('script');
    configScript.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "4MqiZ7Ja9vmsNGpARzCg-",
        domain: "www.chatbase.co"
      };
    `;
    document.body.appendChild(configScript);

    // Create the chatbot embed script
    const embedScript = document.createElement('script');
    embedScript.src = "https://www.chatbase.co/embed.min.js";
    embedScript.setAttribute('chatbotId', "4MqiZ7Ja9vmsNGpARzCg-");
    embedScript.setAttribute('domain', "www.chatbase.co");
    embedScript.defer = true;

    document.body.appendChild(embedScript);

    // Cleanup function to remove the scripts when the component unmounts
    return () => {
      document.body.removeChild(configScript);
      document.body.removeChild(embedScript);
    };
  }, []);

  return (
    <div>
      {/* You can add a placeholder for the chatbot here if needed */}
      <h2>Chatbot</h2>
    </div>
  );
};

export default Chatbot;