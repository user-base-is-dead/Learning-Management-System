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
            </div>
        </section>
    )
}

export default Testimonial