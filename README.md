const toggleChat = document.getElementById('toggleChat');
const chatbotBody = document.getElementById('chatbotBody');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');

function addBotReply(message) {
  const el = document.createElement('div');
  el.className = 'chat-message bot';
  el.textContent = message;
  chatbotBody.appendChild(el);
  chatbotBody.scrollTop = chatbotBody.scrollHeight;
}

function askBot(question) {
  const text = question.toLowerCase();

  if (text.includes('service') || text.includes('services')) {
    return 'We offer barangay clearance, residency, indigency, business permit support, and concern assistance.';
  }

  if (text.includes('clearance')) {
    return 'Barangay clearance usually requires a valid ID and an accomplished request form.';
  }

  if (text.includes('residency') || text.includes('residence')) {
    return 'Certificate of residency is for proof of residence and may require a valid ID and supporting documents.';
  }

  if (text.includes('hours') || text.includes('time')) {
    return 'Barangay office hours are Monday to Friday from 8:00 AM to 4:00 PM.';
  }

  if (text.includes('location') || text.includes('address')) {
    return 'The barangay hall is located in Ligid-Tipas, Pasig City.';
  }

  if (text.includes('hello') || text.includes('hi')) {
    return 'Hello! I can help with barangay services, requirements, office hours, and community information.';
  }

  return 'I can help with barangay services, requirements, office hours, and common public information. Please ask again in a simple way.';
}

toggleChat.addEventListener('click', () => {
  chatbotBody.classList.toggle('hidden');
  const isHidden = chatbotBody.classList.contains('hidden');
  toggleChat.textContent = isHidden ? '+' : '−';
});

chatForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const question = chatInput.value.trim();
  if (!question) return;

  const userMessage = document.createElement('div');
  userMessage.className = 'chat-message user';
  userMessage.textContent = question;
  chatbotBody.appendChild(userMessage);

  chatInput.value = '';
  chatbotBody.scrollTop = chatbotBody.scrollHeight;

  setTimeout(() => {
    addBotReply(askBot(question));
  }, 350);
});

const hiddenStyle = document.createElement('style');
hiddenStyle.textContent = '.hidden { display: none !important; }';
document.head.appendChild(hiddenStyle);
