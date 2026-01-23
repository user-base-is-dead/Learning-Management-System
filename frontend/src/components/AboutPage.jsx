import React from 'react'
import { aboutUsStyles, aboutUsAnimations } from "../assets/dummyStyles"
import { counterTargets, statsMeta, missionVisionValues, teamMembers, values, testimonials } from "../assets/dummyAbout"
import AboutBanner from "../assets/AboutBannerImage.png"
const AboutPage = () => {
    return (
        <div className={aboutUsStyles.container}>
            <section className={aboutUsStyles.heroSection}>
                <div className={aboutUsStyles.heroBackground}>
                    <div style={{
                        backgroundImage: `url(${AboutBanner})`,
                        opacity: 0.85
                    }} className={aboutUsStyles.heroImageContainer} />

                    <div
                        className={aboutUsStyles.heroVignette}
                        style={{
                            background:
                                "linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.0) 30%, rgba(0,0,0,0.0) 70%, rgba(0,0,0,0.72) 100%)",
                        }}
                    />
                    <div className={aboutUsStyles.heroTint}></div>
                </div>
                <div className={aboutUsStyles.heroContent}>
                    <div className={aboutUsStyles.trustBadge}>
                        <Star className={aboutUsStyles.trustIcon} />
                        Trusted by 50,000+ students worldwide
                    </div>
                </div>
            </section>
            <style jsx>{aboutUsAnimations}</style>
        </div>
    )
}

export default AboutPage