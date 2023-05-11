import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/emmanuel-ameyaw-b63b72197/',
      name: 'Emmanuel Ameyaw',
      role: 'Founder, Cleev Community',
      test: "It was a pleasure collaborating with Fenil on different projects. One of the things that I think is special about him is that he never settles, even after completing the projects he finds other resources and strengthens his knowledge. Collaborating with him is easy and comfortable, it's like working with someone you've known for a long period of time.",
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/shaipa-mehta-a5066190/',
      name: 'Shaipa Mehta',
      role: 'Technical Consultant at QAD',
      test: 'As a developer and a problem solver, I think Fenil is a great collaborative partner to have. I met Fenil in some basic javascript & react projects and since then he has drastically progressed in his understanding of the development process. He always has a professional environment and has good audio and video quality which makes it easier to communicate with him.',
    },
    // {
    //   id: 3,
    //   link: 'https://www.linkedin.com/in/emmanuel-ameyaw-b63b72197/',
    //   name: 'Vatsal Shah',
    //   role: 'Founder, Cleev Community',
    //   test: 'I worked with Fenil in the same team and her communication skills are very strong. His programming skill is one of the bests, given the time frame in the field. He is a good team player.  He will probably fit in most of the companies not only because he is a good team worker, but also because he has very good skills and I know he has much more potential to be shown.',
    // },
    // {
    //   id: 4,
    //   link: 'https://www.linkedin.com/in/isaicespedes/',
    //   name: 'Isai Céspedes',
    //   role: 'Full-Stack Web Developer. JavaScript | Rails | React | Redux.',
    //   test: "I mentored Meri some months ago, and I can say that she is one of those people that you love to work with. She was always interested in what I was trying to teach her, paying attention and always asking questions if something was not clear. When it comes to professional skills, she is really committed to work, always doing her best and going beyond the requirements of the project she's building.",
    // },
    // {
    //   id: 5,
    //   link: 'https://www.linkedin.com/in/hamzaalitarar/',
    //   name: 'Hamza Tarar',
    //   role: 'Software Developer',
    //   test: "Throughout all our collaborations, Fenil has always conducted himself politely and kindly. He comes across as someone that's always willing to help and puts the team ahead of himself. But beneath this, I see a strength and determination to distinguish himself. he's not only someone I highly recommend but is also someone I greatly respect.",
    // },
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <h5 className='client__name'>{test.role}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials