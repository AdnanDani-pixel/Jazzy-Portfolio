function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    
    if (userInput.value.trim() === "") {
        alert("Please type a message.");
        return;
    }
    
    // Append user's message
    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.textContent = userInput.value;
    chatBox.appendChild(userMessage);
    
    // Scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
    
    // Simulate bot response
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot';
        botMessage.textContent = getBotResponse(userInput.value);
        chatBox.appendChild(botMessage);
        
        // Scroll to the bottom
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
    
    // Clear the input
    userInput.value = '';
}

function getBotResponse(input) {
    // A simple response logic
    const responses = {
        "hi": "Hello! How can I help you today?",
        "hello": "Hi there! How can I assist you?",
        "how are you": "I'm a bot, so I don't have feelings, but thanks for asking!",
        "bye": "Goodbye! Have a great day!",
        "what is your name": "I'm a chatbot created to assist you.",
        "what can you do": "I can chat with you and help answer simple questions."
    };

    const response = responses[input.toLowerCase()];
    
    if (response) {
        return response;
    } else {
        return "I'm sorry, I don't understand that. Can you please rephrase?";
    }
}
