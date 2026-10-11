* {
  box-sizing: border-box;
}

:root {
  --bg: #eef2ee;
  --panel: #f6f7f4;
  --soft-green: #dfeae4;
  --green-1: #0f2f2e;
  --green-2: #1c4a46;
  --green-3: #2a5e57;
  --green-4: #ddf0e5;
  --green-5: #6ca789;
  --dark: #142b2b;
  --text: #1b2d28;
  --muted: #5f6865;
  --line: rgba(26, 46, 42, 0.1);
  --white: #ffffff;
  --shadow: 0 18px 30px rgba(16, 38, 35, 0.08);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background: var(--bg);
  color: var(--text);
}

img {
  max-width: 100%;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
}

button,
input {
  font: inherit;
}

.container {
  width: min(1200px, calc(100% - 48px));
  margin: 0 auto;
}

.section-shell {
  padding: 36px 0 72px;
}

.topbar {
  background: linear-gradient(180deg, rgba(17, 38, 37, 0.96), rgba(17, 38, 37, 0.92));
  position: sticky;
  top: 0;
  z-index: 40;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 90px;
  gap: 20px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 14px;
  color: white;
}

.brand-badge {
  width: 48px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  border-radius: 50%;
  background: linear-gradient(135deg, #f5f5f5, #dfe8e4);
  color: var(--green-1);
  font-size: 0.88rem;
  font-weight: 800;
  box-shadow: 0 0 0 2px rgba(255,255,255,0.2);
}

.brand-copy {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.brand-main {
  font-size: 1.15rem;
  letter-spacing: 0.04em;
  font-weight: 800;
}

.brand-slash {
  margin-top: 3px;
}

.brand-copy small {
  margin-top: 6px;
  color: rgba(255,255,255,0.8);
  font-size: 0.7rem;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
  color: rgba(255,255,255,0.8);
  font-size: 0.96rem;
}

.main-nav a {
  padding: 8px 0;
  position: relative;
  transition: color 0.2s ease;
}

.main-nav a.active,
.main-nav a:hover {
  color: white;
}

.main-nav a.active::after {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  border-radius: 999px;
  background: rgba(255,255,255,0.8);
  position: absolute;
  left: 0;
  bottom: -12px;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon-btn {
  width: 42px;
  height: 42px;
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 50%;
  background: rgba(255,255,255,0.04);
  display: grid;
  place-items: center;
  cursor: pointer;
}

.icon-btn svg {
  width: 18px;
  height: 18px;
  fill: white;
}

.primary-btn,
.ghost-btn,
.secondary-btn {
  border-radius: 999px;
  padding: 0.8rem 1.2rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.primary-btn:hover,
.ghost-btn:hover,
.secondary-btn:hover {
  transform: translateY(-1px);
}

.dark-btn {
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.12);
  color: white;
}

.ghost-btn {
  background: rgba(255,255,255,0.07);
  color: white;
  border: 1px solid rgba(255,255,255,0.18);
}

.light-btn {
  background: transparent;
  color: white;
  border: 1px solid rgba(255,255,255,0.6);
}

.hero {
  position: relative;
  min-height: 640px;
  background:
    linear-gradient(90deg, rgba(10, 24, 24, 0.82), rgba(10, 24, 24, 0.32) 52%, rgba(10, 24, 24, 0.2)),
    url('https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1400&q=80') center/cover no-repeat;
  display: flex;
  align-items: center;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1.3fr .7fr;
  align-items: end;
  padding: 60px 0 48px;
  gap: 30px;
}

.hero-copy {
  color: white;
  max-width: 670px;
}

.eyebrow, .mini-header {
  margin: 0 0 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.74rem;
}

.hero h1 {
  font-size: clamp(3.1rem, 5vw, 5rem);
  line-height: 0.96;
  letter-spacing: -0.06em;
  margin: 0;
  font-weight: 800;
}

.lead {
  margin-top: 16px;
  font-size: 1.1rem;
  opacity: 0.95;
}

.subtitle {
  max-width: 560px;
  margin-top: 18px;
  color: rgba(255,255,255,0.85);
  font-size: 1.04rem;
  line-height: 1.7;
}

.hero-actions {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.hero-cta {
  background: linear-gradient(135deg, #67b98d, #7dcc9a);
  color: #123f36;
  border: 0;
  box-shadow: 0 10px 25px rgba(66, 131, 103, 0.35);
}

.promo-panel {
  justify-self: end;
  width: min(320px, 100%);
  margin-bottom: 14px;
}

.mini-badge {
  background: rgba(255,255,255,0.14);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 999px;
  padding: 0.8rem 1rem;
  color: white;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 12px;
}

.mini-badge::before {
  content: "";
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #62d99a;
  box-shadow: 0 0 10px rgba(98, 217, 154, 0.7);
}

.mini-badge.second {
  margin-left: 28px;
}

.promo-box {
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 16px;
  padding: 18px 16px;
  box-shadow: 0 12px 20px rgba(0,0,0,0.12);
}

.promo-line {
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, rgba(255,255,255,0.8), transparent);
  margin-bottom: 14px;
}

.promo-body strong {
  font-size: 1.1rem;
  color: white;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 18px;
  margin-top: -22px;
  position: relative;
  z-index: 10;
}

.feature-card {
  background: rgba(255,255,255,0.72);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 18px 18px 16px;
  min-height: 190px;
  box-shadow: var(--shadow);
}

.feature-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(104, 157, 127, 0.1);
  display: grid;
  place-items: center;
  margin-bottom: 12px;
}

.feature-icon svg {
  width: 20px;
  height: 20px;
  fill: var(--green-2);
}

.feature-card h3 {
  margin: 0 0 8px;
  font-size: 1.05rem;
}

.feature-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.6;
}

.feature-card span {
  display: inline-block;
  margin-top: 18px;
  font-size: 1.5rem;
  color: var(--green-2);
}

.info-section {
  background: rgba(255,255,255,0.38);
}

.info-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr 0.78fr;
  gap: 28px;
  align-items: center;
}

.info-photo {
  height: 300px;
  border-radius: 24px;
  background:
    linear-gradient(180deg, rgba(19, 39, 35, 0.18), rgba(19, 39, 35, 0.18)),
    url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80') center/cover no-repeat;
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.photo-label {
  position: absolute;
  left: 22px;
  bottom: 20px;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  background: rgba(255,255,255,0.7);
  color: #123d37;
  font-weight: 800;
  letter-spacing: 0.1em;
}

.info-copy h2 {
  font-size: clamp(2.1rem, 4vw, 3rem);
  line-height: 1.05;
  margin: 0 0 12px;
}

.info-copy p {
  color: var(--muted);
  font-size: 1.02rem;
  line-height: 1.8;
}

.secondary-btn {
  margin-top: 12px;
  background: transparent;
  border: 1px solid rgba(18, 58, 52, 0.2);
  color: var(--green-1);
}

.small-btn {
  padding: 0.75rem 1rem;
  font-size: 0.95rem;
}

.info-stats {
  background: rgba(255,255,255,0.8);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 14px 16px;
  box-shadow: var(--shadow);
}

.stat-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 8px;
  border-bottom: 1px solid rgba(18, 58, 52, 0.08);
}

.stat-item:last-child {
  border-bottom: none;
}

.stat-icon {
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(104, 157, 127, 0.12);
  font-size: 1rem;
}

.stat-item strong,
.stat-item span {
  display: block;
}

.stat-item strong {
  font-size: 0.98rem;
  margin-bottom: 2px;
}

.stat-item span {
  color: var(--muted);
  line-height: 1.5;
}

.update-section {
  padding-top: 24px;
}

.update-head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
}

.alt {
  color: var(--green-2);
}

.update-head h2 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 2.9rem);
}

.update-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
}

.news-card {
  background: rgba(255,255,255,0.8);
  border: 1px solid var(--line);
  border-radius: 22px;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.news-image {
  height: 220px;
  background-size: cover;
  background-position: center;
}

.news-one {
  background-image: url('https://images.unsplash.com/photo-1519241047957-be31d7379a5d?auto=format&fit=crop&w=1000&q=80');
}

.news-two {
  background-image: url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80');
}

.news-body {
  padding: 18px 18px 22px;
}

.news-body small {
  display: block;
  color: var(--muted);
  margin-bottom: 10px;
}

.news-body h3 {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.5;
}

.chatbot-widget {
  position: fixed;
  right: 28px;
  bottom: 26px;
  width: 350px;
  background: rgba(255,255,255,0.97);
  border: 1px solid rgba(18, 58, 52, 0.12);
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(17, 38, 35, 0.16);
  z-index: 50;
  overflow: hidden;
}

.chatbot-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: linear-gradient(135deg, #1b564c, #2b6b48);
  color: white;
}

.chatbot-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.bot-icon {
  width: 34px;
  height: 34px;
  display: inline-grid;
  place-items: center;
  border-radius: 12px;
  background: rgba(255,255,255,0.15);
  font-weight: 800;
}

.chatbot-brand strong,
.chatbot-brand small {
  display: block;
}

.chatbot-brand small {
  font-size: 0.72rem;
  opacity: 0.8;
}

.mini-toggle {
  border: 0;
  background: rgba(255,255,255,0.12);
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.4rem;
}

.chatbot-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 250px;
  overflow-y: auto;
  padding: 16px;
  background: #f7faf8;
}

.chat-message {
  max-width: 82%;
  border-radius: 16px;
  padding: 10px 12px;
  line-height: 1.5;
  font-size: 0.92rem;
}

.chat-message.bot {
  background: #edf5f1;
  color: var(--text);
  border-bottom-left-radius: 5px;
}

.chat-message.user {
  align-self: flex-end;
  background: linear-gradient(135deg, #1d6d5d, #2f7d63);
  color: white;
  border-bottom-right-radius: 5px;
}

.chatbot-form {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 14px 14px;
  background: white;
}

.chatbot-form input {
  flex: 1;
  border: 1px solid rgba(18, 58, 52, 0.18);
  border-radius: 999px;
  padding: 0.8rem 0.95rem;
  outline: none;
}

.chatbot-form button {
  width: 42px;
  height: 42px;
  border: 0;
  border-radius: 50%;
  background: linear-gradient(135deg, #1c5d4f, #2e7c64);
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
}

@media (max-width: 1100px) {
  .feature-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .info-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 800px) {
  .main-nav {
    display: none;
  }

  .nav-wrap {
    min-height: 78px;
  }

  .hero-inner {
    grid-template-columns: 1fr;
    padding-top: 48px;
  }

  .promo-panel {
    justify-self: start;
    margin-bottom: 0;
  }

  .feature-grid,
  .update-grid {
    grid-template-columns: 1fr;
  }

  .chatbot-widget {
    width: min(92vw, 350px);
    right: 14px;
    bottom: 14px;
  }
}

@media (max-width: 520px) {
  .brand-copy {
    display: none;
  }

  .nav-actions .ghost-btn,
  .nav-actions .dark-btn {
    display: none;
  }

  .hero {
    min-height: 560px;
  }

  .hero h1 {
    font-size: 2.6rem;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }
}

