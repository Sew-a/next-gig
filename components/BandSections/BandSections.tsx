"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import "./styles.scss";

const BandSections = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="band-sections">
      
      {/* SECTION 1: NEWS */}
      <section className="band-section band-section--news">
        <div className="section-image" />
        <motion.div 
          className="section-content"
          {...fadeIn}
        >
          <div className="headline">NEWS <span className="sub-headline">19.03.2026</span></div>
          <p className="section-text">
            Hey guys! Great news for all our fans! We have 3 new events scheduled and going on tour! 
            Check out our "Events" section for more information. We're super excited to start moving again and looking forward to meet y'all really soon.
            Check our Instagram for our travel photos and new crazy hats guys have brought.
          </p>
          <button className="btn-action">VIEW ALL</button>
        </motion.div>
      </section>

      {/* SECTION 2: EVENTS */}
      <section className="band-section band-section--events">
        <motion.div 
          className="section-content"
          {...fadeIn}
        >
          <div className="headline">UPCOMING EVENTS</div>
          <div className="events-list">
            <div className="event-item">
              <span className="date">MAR 20, 2026</span>
              <span className="location">BUENOS AIRES, ARGENTINA <ArrowRight size={14} style={{ display: 'inline', marginLeft: 8 }} /></span>
            </div>
            <div className="event-item">
              <span className="date">MAR 23, 2026</span>
              <span className="location">SANTIAGO, CHILE <ArrowRight size={14} style={{ display: 'inline', marginLeft: 8 }} /></span>
            </div>
            <div className="event-item">
              <span className="date">JUL 23, 2026</span>
              <span className="location">SAN BERNARDINO, CA <ArrowRight size={14} style={{ display: 'inline', marginLeft: 8 }} /></span>
            </div>
          </div>
        </motion.div>
        <div className="section-image" />
      </section>

      {/* SECTION 3: ABOUT */}
      <section className="band-section band-section--about">
        <motion.div 
          className="about-container"
          {...fadeIn}
        >
          <div className="headline">ABOUT THE BAND</div>
          <p className="section-text">
            The band was formed in 1998, originally called The Elements. After discovering that another band had the same name, the members changed the name to Black Rebel Motorcycle Club, after Marlon Brando’s motorcycle gang in the 1953 film The Wild One. Bassist Robert Levon Been and guitarist Peter Hayes met...
          </p>
          <button className="btn-action">CONTINUE READING</button>
        </motion.div>
      </section>

      {/* SOCIAL BAR */}
      <div className="social-bar">
        <span>SOCIAL MEDIA:</span>
        <div className="social-icons">
          <span>INSTAGRAM</span>
          <span>YOUTUBE</span>
          <span>FACEBOOK</span>
        </div>
      </div>

    </div>
  );
};

export default BandSections;