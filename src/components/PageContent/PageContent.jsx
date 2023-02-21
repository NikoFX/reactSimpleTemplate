import React from 'react'
import ProjectSection from './ProjectSection'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'

function PageContent() {
    return (
        <>
            <div className="w3-content w3-padding" style={{maxWidth: '1564px'}}>
                <ProjectSection />
                <AboutSection />
                <ContactSection />
            </div>
        </>
    )
}

export default PageContent