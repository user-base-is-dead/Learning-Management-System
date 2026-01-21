import React from 'react'
import testimonials from "../assets/dummyTestimonial"
import { testimonialStyles } from "../assets/dummyStyles"

const Testimonial = () => {

    const cardsRef = useRef([]);
    // Only apply tilt on pointer (desktop) devices - avoids janky behavior on touch
    const isPointerDevice = () =>
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(pointer:fine)").matches;


    return (
        <section className={testimonialStyles.section}>
            <div className={testimonialStyles.container}>
                <div className={testimonialStyles.badge}>
                    <span className={testimonialStyles.badgeText}>
                        Student Testimonials
                    </span>
                </div>
                <h2 className={testimonialStyles.title}>
                    <span className={testimonialStyles.titleGradient}>
                        Voice of Success
                    </span>
                </h2>
                <p className={testimonialStyles.subtitle}>
                    Discover how our learners transformed their carrers with hands-on projects and expert mentorship.
                </p>
            </div>
            <div className={testimonialStyles.grid}>
                {testimonials.map((t, i => (
                    <div key={t.id} className={testimonialStyles.cardWrapper}>
                    </div>
                )))}
            </div>
        </section>
    );
};

export default Testimonial;