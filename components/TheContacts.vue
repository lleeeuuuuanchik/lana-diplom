<template>
    <section class="contacts-section">
      <div class="container">
        <div class="section-header">
          <h2>Наши контакты</h2>
          <p>Мы всегда рады помочь с выбором путешествия</p>
        </div>
  
        <div class="contacts-grid">
          <!-- Карта -->
          <div class="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.56962341781!2d44.67624687673273!3d43.02944517113854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405aa0786f7e0c7d%3A0x6f8fcd024a980607!2z0L_QtdGALiDQodGC0LDQvdC40YHQu9Cw0LLRgdC60L7Qs9C-LCDQktC70LDQtNC40LrQsNCy0LrQsNC3LCDQoNC10YHQvy4g0KHQtdCy0LXRgNC90LDRjyDQntGB0LXRgtC40Y8g4oCUINCQ0LvQsNC90LjRjywgMzYyMDQw!5e0!3m2!1sru!2sru!4v1746101353670!5m2!1sru!2sru" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
  
          <!-- Основные контакты -->
          <div class="contact-info">
            <div class="contact-card">
              
              <div class="contact-details">
                <h3>Телефон</h3>
                <a href="tel:+78001234567">8 (800) 123-45-67</a>
                <p>Ежедневно с 9:00 до 21:00</p>
              </div>
            </div>
  
            <div class="contact-card">
            
              <div class="contact-details">
                <h3>Email</h3>
                <a href="mailto:info@travelagency.ru">info@travelagency.ru</a>
                <p>Ответим в течение 2 часов</p>
              </div>
            </div>
  
            <div class="contact-card">
             
              <div class="contact-details">
                <h3>WhatsApp</h3>
                <a href="https://wa.me/79001234567">+7 (900) 123-45-67</a>
                <p>Быстрый ответ 24/7</p>
              </div>
            </div>
  
            <div class="social-links">
              <h3>Мы в соцсетях</h3>
              <div class="social-icons">
                <a href="#" class="social-icon instagram">
                  <icons-instagram />
                </a>
                <a href="#" class="social-icon telegram">
                    <icons-telegram />
                </a>
                <a href="#" class="social-icon vk">
                    <icons-vk />
                </a>
                <a href="#" class="social-icon tiktok">
                    <icons-whats />
                </a>
              </div>
            </div>
          </div>
  
          <!-- Форма обратной связи -->
          <div class="contact-form">
            <h3>Задать вопрос</h3>
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <input type="text" v-model="form.name" placeholder="Ваше имя" required>
              </div>
              <div class="form-group">
                <input type="email" v-model="form.email" placeholder="Email" required>
              </div>
              <div class="form-group">
                <input type="tel" v-model="form.phone" placeholder="Телефон">
              </div>
              <div class="form-group">
                <textarea v-model="form.message" placeholder="Ваш вопрос" required></textarea>
              </div>
              <button type="submit" class="submit-btn">Отправить</button>
            </form>
          </div>
  
          <!-- Онлайн-чат -->
          <div class="online-chat">
            <div class="chat-header">
              <i class="icon-chat"></i>
              <h3>Онлайн-чат</h3>
            </div>
            <p>Наш менеджер ответит прямо сейчас</p>
            <button class="chat-btn">Начать чат</button>
            <div class="chat-status">
              <span class="status-dot online"></span>
              <span>Сейчас онлайн</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          phone: '',
          message: ''
        }
      }
    },
    methods: {
      submitForm() {
        // Здесь логика отправки формы
        alert('Спасибо! Ваш вопрос отправлен.');
        this.form = {
          name: '',
          email: '',
          phone: '',
          message: ''
        };
      }
    }
  }
  </script>
  
  <style scoped lang="scss">
  .contacts-section {
    padding: 80px 0;
    background-color: white;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .section-header {
    text-align: center;
    margin-bottom: 60px;
  }
  
  .section-header h2 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 15px;
    position: relative;
    display: inline-block;
  }
  
  .section-header h2::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: $primary;
    border-radius: 2px;
  }
  
  .section-header p {
    font-size: 1.1rem;
    color: #7f8c8d;
  }
  
  .contacts-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  
  .map-container {
    height: 400px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  
  .contact-info {
    display: grid;
    gap: 20px;
  }
  
  .contact-card {
    display: flex;
    align-items: center;
    background: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;
  }
  
  .contact-card:hover {
    transform: translateY(-5px);
  }
  
  .contact-icon {
    width: 50px;
    height: 50px;
    background: $primary;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    color: white;
    font-size: 20px;
  }
  
  .contact-details h3 {
    margin: 0 0 5px;
    font-size: 1.2rem;
    color: #2c3e50;
  }
  
  .contact-details a {
    color: $primary;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1rem;
    transition: color 0.3s ease;
  }
  
  .contact-details a:hover {
    color: #3d8b40;
  }
  
  .contact-details p {
    margin: 5px 0 0;
    font-size: 0.9rem;
    color: #7f8c8d;
  }
  
  .social-links {
    background: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }
  
  .social-links h3 {
    margin: 0 0 15px;
    font-size: 1.2rem;
    color: #2c3e50;
  }
  
  .social-icons {
    display: flex;
    gap: 15px;
  }
  
  .social-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 18px;
    transition: transform 0.3s ease;
  }
  
  .social-icon:hover {
    transform: translateY(-5px);
  }
  
  .instagram { background: #E1306C; }
  .tiktok { background: green; }
  .vk { background: #4C75A3; }
  .telegram { background: #0088cc; }
  
  .contact-form {
    grid-column: span 2;
    background: white;
    padding: 40px;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  
  .contact-form h3 {
    margin: 0 0 25px;
    font-size: 1.5rem;
    color: #2c3e50;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
  }
  
  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: $primary;
  }
  
  .form-group textarea {
    height: 120px;
    resize: vertical;
  }
  
  .submit-btn {
    width: 100%;
    padding: 15px;
    background: $primary;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .submit-btn:hover {
    background: #3d8b40;
  }
  
  .online-chat {
    background: white;
    padding: 30px;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    text-align: center;
    grid-column: 1 / 3;
  }
  
  .chat-header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
  }
  
  .chat-header i {
    width: 40px;
    height: 40px;
    background: $primary;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 18px;
    margin-right: 10px;
  }
  
  .chat-header h3 {
    margin: 0;
    font-size: 1.3rem;
    color: #2c3e50;
  }
  
  .online-chat p {
    color: #7f8c8d;
    margin-bottom: 20px;
  }
  
  .chat-btn {
    background: $primary;
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 20px;
  }
  
  .chat-btn:hover {
    background: #3d8b40;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(76, 175, 80, 0.3);
  }
  
  .chat-status {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    color: #7f8c8d;
  }
  
  .status-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 8px;
  }
  
  .status-dot.online {
    background: $primary;
    box-shadow: 0 0 10px rgba(76, 175, 80, 0.5);
  }
  
  @media (max-width: 992px) {
    .contacts-grid {
      grid-template-columns: 1fr;
    }
    
    .contact-form {
      grid-column: span 1;
    }

    .online-chat { grid-column: 1 / 2; }
  }
  
  @media (max-width: 768px) {
    .section-header h2 {
      font-size: 2rem;
    }
  }
  </style>