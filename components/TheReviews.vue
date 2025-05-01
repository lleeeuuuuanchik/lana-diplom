<template>
    <section class="reviews-section" id="reviews">
      <div class="container">
        <div class="section-header">
          <h2>Отзывы наших клиентов</h2>
          <p>Более 3 000 довольных путешественников</p>
        </div>
  
        <div class="reviews-carousel">
          <div class="review-card" v-for="(review, index) in reviews" :key="index">
            <div class="review-header">
              <div class="review-author">
                <h4>{{ review.name }}</h4>
                <div class="review-meta">
                  <span>{{ review.tour }}</span>
                  <div class="review-rating">
                    <span v-for="n in 5" :key="n" :class="['star', { filled: n <= review.rating }]">★</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="review-content">
              <p>{{ review.text }}</p>
            </div>
            <div class="review-date">{{ review.date }}</div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentSlide: 0,
        reviews: [
          {
            name: "Анна Ковалёва",
            tour: "Тур по Италии",
            rating: 5,
            text: "Невероятное путешествие! Организация на высшем уровне. Отель превзошёл все ожидания, а экскурсии были настолько интересными, что не хотелось уезжать. Обязательно поеду с этим агентством снова!",
            date: "15 мая 2023"
          },
          {
            name: "Дмитрий Смирнов",
            tour: "Отдых в Таиланде",
            rating: 4,
            text: "Отличный сервис, всё продумано до мелочей. Особенно понравился индивидуальный подход - подобрали именно то, что я хотел. Единственное - перелёт был немного утомительным, но это не вина агентства.",
            date: "2 апреля 2023"
          },
          {
            name: "Елена Петрова",
            tour: "Экскурсия по Японии",
            rating: 5,
            text: "Мечтала о поездке в Японию много лет, и благодаря этому агентству мечта сбылась! Гид был просто потрясающий - знал все секретные места. Уже планирую следующую поездку через них же!",
            date: "28 марта 2023"
          },
          {
            name: "Иван Васильев",
            tour: "Горнолыжный курорт в Альпах",
            rating: 5,
            text: "Всё было организовано идеально: трансфер, отель рядом с подъёмником, даже снаряжение подобрали заранее. Впервые не пришлось ни о чём переживать в поездке. Рекомендую всем любителям активного отдыха!",
            date: "10 февраля 2023"
          }
        ]
      }
    },
  }
  </script>
  
  <style scoped lang="scss">
  .reviews-section {
    margin-bottom: 100px;
    padding: 80px 0;
    background-color: white;
    position: relative;
    overflow: hidden;
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
  
  .reviews-carousel {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;

    @include mq($tablet)
    {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  .review-card {
    min-width: calc(33.333% - 20px);
    scroll-snap-align: start;
    background: white;
    border-radius: 16px;
    padding: 30px;
    position: relative;
    border: 2px solid $primary;
  }
  
  .review-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .review-avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
    border: 3px solid $primary;
  }
  
  .review-author h4 {
    margin: 0;
    font-size: 1.2rem;
    color: #2c3e50;
  }
  
  .review-meta {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
  }
  
  .review-meta span {
    font-size: 0.9rem;
    color: #7f8c8d;
  }
  
  .review-rating {
    margin-top: 5px;
  }
  
  .star {
    color: #ddd;
    font-size: 1.2rem;
  }
  
  .star.filled {
    color: #FFD700;
  }
  
  .review-content {
    margin-bottom: 20px;
  }
  
  .review-content p {
    color: #555;
    line-height: 1.6;
    font-style: italic;
    position: relative;
    padding-left: 20px;
  }
  
  .review-content p::before {
    content: '"';
    position: absolute;
    left: 0;
    top: -10px;
    font-size: 3rem;
    color: $primary;
    opacity: 0.2;
    font-family: serif;
  }
  
  .review-date {
    font-size: 0.8rem;
    color: #95a5a6;
    text-align: right;
  }
  
  .controls {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    gap: 20px;
  }
  
  .control-btn {
    background: $primary;
    color: white;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .control-btn:hover {
    background: #3d8b40;
    transform: scale(1.1);
  }
  
  .dots {
    display: flex;
    gap: 10px;
  }
  
  .dots span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ddd;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .dots span.active {
    background: $primary;
    transform: scale(1.2);
  }
  
  @media (max-width: 992px) {
    .review-card {
      min-width: calc(50% - 15px);
    }
  }
  
  @media (max-width: 768px) {
    .review-card {
      min-width: 100%;
    }
    
    .section-header h2 {
      font-size: 2rem;
    }
  }
  </style>