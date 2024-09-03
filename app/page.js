import React from 'react'
import ProfileOverview from './components/ProfileOverview'
import Projects from './components/Projects'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import Articles from './components/Articles'
import ContactForm from './components/ContactForm'

const page = () => {
  return (
    <>
      <ProfileOverview/>
      <Projects/>
      <Skills/>
      <WorkExperience/>
      <Articles/>
      <ContactForm/>
    </>
  )
}

export default page
