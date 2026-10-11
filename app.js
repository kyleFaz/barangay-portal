const requestForm = document.getElementById('requestForm');
const requestList = document.getElementById('requestList');
const totalRequests = document.getElementById('totalRequests');
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');
const loginForm = document.getElementById('loginForm');
const chatForm = document.getElementById('chatForm');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');

const STORAGE_KEY = 'barangayRequests';

function getRequests() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [
    {
      name: 'Maria Santos',
      service: 'Barangay Clearance',
      date: '2026-10-15',
      details: 'Renewal for local employment purposes.'
    },
    {
      name: 'Ramon Reyes',
      service: 'Certificate of Residency',
      date: '2026-10-18',
      details: 'Needed for school enrollment.'
    }
  ];
}

function saveRequests(requests) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(requests));
}

function renderRequests() {
  const requests = getRequests();
  totalRequests.textContent = requests.length;

  requestList.innerHTML = requests
    .slice(0, 5)
    .map(
      (item) => `
        <div class="request-item">
          <strong>${item.name}</strong>
          <small>${item.service} • ${item.date}</small>
          <p>${item.details}</p>
        </div>
      `
    )
    .join('');
}

requestForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const requests = getRequests();
  const formData = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    service: document.getElementById('serviceType').value,
    date: document.getElementById('date').value,
    details: document.getElementById('details').value.trim()
  };

  if (!formData.name || !formData.email || !formData.service || !formData.date || !formData.details) {
    return;
  }

  requests.unshift(formData);
  saveRequests(requests);
  renderRequests();
  requestForm.reset();

  const success = document.createElement('div');
  success.className = 'message bot';
  success.textContent = 'Your request has been submitted successfully. Barangay staff will review it soon.';
  chatMessages.appendChild(success);
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

loginBtn.addEventListener('click', () => {
  loginModal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
  loginModal.classList.add('hidden');
});

loginModal.addEventListener('click', (event) => {
  if (event.target === loginModal) {
    loginModal.classList.add('hidden');
  }
});

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (username && password) {
    loginModal.classList.add('hidden');
    alert(`Welcome, ${username}! You are now signed in.`);
    loginForm.reset();
  }
});

const faqReplies = {
  hours: 'Barangay office hours are Monday to Friday from 8:00 AM to 4:00 PM.',
  clearance: 'Barangay clearance usually requires a valid ID and a completed request form.',
  residency: 'Residency certificates need proof of residence and a valid government-issued ID.',
  indigency: 'Indigency requests are reviewed based on supporting documents and current community guidelines.',
  location: 'The barangay hall is located in Ligid-Tipas, Quezon City.',
  service: 'Available services include clearance, residency, indigency, barangay ID, business permits, and concern reports.'
};

function addChatMessage(text, type = 'bot') {
  const div = document.createElement('div');
  div.className = `message ${type}`;
  div.textContent = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const question = chatInput.value.trim();
  if (!question) return;

  addChatMessage(question, 'user');
  chatInput.value = '';

  const lower = question.toLowerCase();
  let answer = 'Please ask about office hours, service requests, or barangay requirements.';

  if (lower.includes('hour') || lower.includes('time')) {
    answer = faqReplies.hours;
  } else if (lower.includes('clearance')) {
    answer = faqReplies.clearance;
  } else if (lower.includes('residency') || lower.includes('residence')) {
    answer = faqReplies.residency;
  } else if (lower.includes('indigency')) {
    answer = faqReplies.indigency;
  } else if (lower.includes('location') || lower.includes('address')) {
    answer = faqReplies.location;
  } else if (lower.includes('service') || lower.includes('what can you do')) {
    answer = faqReplies.service;
  }

  setTimeout(() => addChatMessage(answer), 450);
});

renderRequests();
