'use client';
import { Quote } from 'lucide-react';
import { HeadingText } from '@/components/UI';
import { testimonialsData } from '@/data/testimonialsData';
import './styles.scss';

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <HeadingText title="Recommendations" label="// TESTIMONIALS" />
      <div className="testimonials-grid">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="testimonial-card"
          >
            <div className="card-header">
              <div className="quote-icon">
                <Quote size={20} fill="currentColor" />
              </div>
            </div>

            <div className="testimonial-content">
              <p className="testimonial-text">
                {testimonial.text}
              </p>
            </div>

            <div className="testimonial-footer">
              <div className="author-info">
                <div className="author-details">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-position">{testimonial.position}</p>
                  <p className="testimonial-relation">{testimonial.relation}</p>
                  <span className="testimonial-date">{testimonial.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
