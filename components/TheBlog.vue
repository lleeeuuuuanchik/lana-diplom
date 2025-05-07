<template>
    <section class="blog-section" id="blog">
      <div class="container">
        <div class="section-header">
          <h2>Блог & Путеводитель</h2>
          <p>Полезные советы и актуальные материалы для путешественников</p>
        </div>
  
        <div class="blog-grid">
          <article 
            v-for="(post, index) in posts" 
            :key="index" 
            class="blog-card"
            :style="{ 'background-image': `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${post.image})` }"
          >
            <div class="card-content">
              <span class="card-category">{{ post.category }}</span>
              <h3 class="card-title">{{ post.title }}</h3>
              <p class="card-excerpt">{{ post.excerpt }}</p>
              <div class="card-meta">
                <span class="reading-time">{{ post.readingTime }} мин чтения</span>
                <span class="publish-date">{{ post.date }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        posts: [
          {
            title: "Как выбрать тур по рекомендациям в соцсетях?",
            category: "Советы",
            excerpt: "Разбираем, как отличить честные отзывы от скрытой рекламы и сделать правильный выбор",
            image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            readingTime: 6,
            date: "15 июня 2025",
            link: "#"
          },
          {
            title: "Топ-5 направлений из TikTok 2025",
            category: "Тренды",
            excerpt: "Какие страны и города взорвали TikTok в этом году и стоит ли туда ехать",
            image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            readingTime: 8,
            date: "3 июня 2025",
            link: "#"
          },
          {
            title: "Что взять с собой в путешествие",
            category: "Чек-лист",
            excerpt: "Полный список вещей, которые пригодятся в любой поездке + неочевидные лайфхаки",
            image: "https://images.unsplash.com/photo-1506220926022-cc5c12acdb35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            readingTime: 5,
            date: "28 мая 2025",
            link: "#"
          },
          {
            title: "Инстуркция по получению визы",
            category: "Совет",
            excerpt: "Как наше турагентство оказывает помощь в оформление документов.",
            image: "https://avatars.mds.yandex.net/i?id=9091fde11314775293583953c38cbe4c_l-5234314-images-thumbs&n=13",
            readingTime: 10,
            date: "28 мая 2025",
            link: "#"
          },
          {
            title: "Опасности туризма в Instagram: что правда, а что миф?",
            category: "Аналитика",
            excerpt: "Развенчиваем популярные мифы о путешествиях, которые тиражируют в соцсетях",
            image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            readingTime: 10,
            date: "14 мая 2025",
            link: "#"
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped lang="scss">
  .blog-section {
    margin-bottom: 100px;
    padding: 80px 0;
    background-color: #fff;
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
  
  .blog-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  
  .blog-card {
    position: relative;
    height: 400px;
    border-radius: 16px;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .blog-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
  
  .card-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 30px;
    color: white;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
    transform: translateY(20%);
    transition: transform 0.3s ease;
  }
  
  .blog-card:hover .card-content {
    transform: translateY(0);
  }
  
  .card-category {
    display: inline-block;
    padding: 5px 15px;
    background: $primary;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: bold;
    margin-bottom: 15px;
  }
  
  .card-title {
    color: white;
    font-size: 1.5rem;
    margin: 0 0 15px;
    line-height: 1.3;
  }
  
  .card-excerpt {
    color: white;
    margin: 0 0 20px;
    opacity: 0.9;
    font-size: 0.95rem;
    line-height: 1.5;
  }
  
  .card-meta {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    opacity: 0.8;

    span { color: white }
  }
  
  .card-link {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
  
  .view-all-btn {
    display: block;
    margin: 0 auto;
    background: transparent;
    color: $primary;
    border: 2px solid $primary;
    padding: 12px 30px;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .view-all-btn:hover {
    background: $primary;
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(76, 175, 80, 0.3);
  }
  
  @media (max-width: 768px) {
    .blog-grid {
      grid-template-columns: 1fr;
    }
    
    .section-header h2 {
      font-size: 2rem;
    }
  }
  </style>