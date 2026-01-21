import React from 'react'
import { testimonials } from "../assets/dummyTestimonial"
import { testimonialStyles } from "../assets/dummyStyles"

const Testimonial = () => {
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
            </div>
        </section>
    )
}

export default Testimonial