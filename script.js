const chatbotMessages = document.getElementById("chatbot-messages");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Function to add a message to the chat
function addMessage(message, isUser) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message");
  messageDiv.classList.add(isUser ? "user-message" : "bot-message");
  messageDiv.textContent = message;
  chatbotMessages.appendChild(messageDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Auto-scroll
}

// Function to generate a bot response
function getBotResponse(userMessage) {
  const lowerCaseMessage = userMessage.toLowerCase();

  if (lowerCaseMessage.includes("phishing")) {
    return "Phishing is a cyber attack that uses disguised emails or websites to steal sensitive information. Always verify the sender's email address and avoid clicking on suspicious links.";
  } else if (lowerCaseMessage.includes("malware")) {
    return "Malware is malicious software designed to harm or exploit devices. Use antivirus software and avoid downloading files from untrusted sources.";
  } else if (lowerCaseMessage.includes("ransomware")) {
    return "Ransomware is a type of malware that encrypts your files and demands payment for their release. Regularly back up your data to prevent data loss.";
  } else if (lowerCaseMessage.includes("password")) {
    return "Use strong, unique passwords for each account and enable two-factor authentication (2FA) for added security.";
  } else if (lowerCaseMessage.includes("social engineering")) {
    return "Social engineering manipulates people into revealing confidential information. Be cautious of unsolicited requests for sensitive data.";
  } else {
    return "I'm here to help you learn about cybersecurity threats. Ask me about phishing, malware, ransomware, or passwords!";
  }
}

// Event listener for send button
sendBtn.addEventListener("click", () => {
  const userMessage = userInput.value.trim();
  if (userMessage) {
    addMessage(userMessage, true);
    userInput.value = ""; // Clear input
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage);
      addMessage(botResponse, false);
    }, 500); // Simulate bot typing delay
  }
});

// Allow pressing Enter to send message
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendBtn.click();
  }
});