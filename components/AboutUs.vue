<template>
    <section class="about-section" id="about-us">
      <div class="about-container">
        <div class="about-content">
          <h2 class="about-title">О нашем турагенстве</h2>
          <p class="about-subtitle">Мы создаём незабываемые путешествия с 2010 года</p>
          
          <div class="about-features">
            <div class="feature-card" v-for="(feature, index) in features" :key="index">
              <div class="feature-icon">
                <span :class="feature.icon"></span>
              </div>
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.text }}</p>
            </div>
          </div>
  
          <div class="about-stats">
            <div class="stat-item">
              <span class="stat-number">12K+</span>
              <span class="stat-label">Довольных клиентов</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">50+</span>
              <span class="stat-label">Направлений</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">15</span>
              <span class="stat-label">Лет опыта</span>
            </div>
          </div>
        </div>
  
        <div class="about-image">
          <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Наша команда">
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        features: [
          {
            icon: 'icon-globe',
            title: 'Уникальные маршруты',
            text: 'Только проверенные локации с лучшими гидами'
          },
          {
            icon: 'icon-heart',
            title: 'С заботой о вас',
            text: 'Персональный подход к каждому клиенту'
          },
          {
            icon: 'icon-shield',
            title: 'Надёжность',
            text: 'Финансовая гарантия всех бронирований'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped lang="scss">
  .about-section {
    border-radius: 12px;
    padding: 50px 0;
    background: white;
    margin-bottom: 100px;
  }
  
  .about-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 60px;
    padding: 0 20px;
  }
  
  .about-content {
    flex: 1;
  }
  
  .about-image {
    flex: 1;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    transition: transform 0.5s ease;
  }
  
  .about-image img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
  }
  
  .about-image:hover img {
    transform: scale(1.05);
  }
  
  .about-title {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 15px;
    position: relative;
    display: inline-block;
  }
  
  .about-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: $primary;
    border-radius: 2px;
  }
  
  .about-subtitle {
    font-size: 1.2rem;
    color: #7f8c8d;
    margin-bottom: 40px;
  }
  
  .about-features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-bottom: 50px;
  }
  
  .feature-card {
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  .feature-icon {
    width: 60px;
    height: 60px;
    background: $primary;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    color: white;
    font-size: 24px;
  }
  
  .feature-card h3 {
    font-size: 1.3rem;
    margin-bottom: 15px;
    color: #2c3e50;
  }
  
  .feature-card p {
    color: #7f8c8d;
    line-height: 1.6;
  }
  
  .about-stats {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
  }
  
  .stat-item {
    text-align: center;
  }
  
  .stat-number {
    display: block;
    font-size: 2.5rem;
    font-weight: bold;
    color: $primary;
    margin-bottom: 5px;
  }
  
  .stat-label {
    color: #7f8c8d;
    font-size: 0.9rem;
  }
  
  .cta-button {
    background: $primary;
    color: white;
    border: none;
    padding: 15px 30px;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(76, 175, 80, 0.3);
  }
  
  .cta-button:hover {
    background: #3d8b40;
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(76, 175, 80, 0.4);
  }
  
  @media (max-width: 992px) {
    .about-container {
      flex-direction: column;
    }
    
    .about-image {
      order: -1;
      max-width: 500px;
      width: 100%;
    }
  }
  </style>