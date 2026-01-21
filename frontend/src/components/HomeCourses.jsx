import React from 'react'
import { homeCoursesStyles } from "../assets/dummyStyles"
import { coursesData } from "../assets/dummyHdata"

const HomeCourses = () => {
    const navigate = useNavigate();
    const {title, course: courseFont, detail} = homeCoursesStyles.fonts;
    const visibleCourse = coursesData.slice(0, 8);
  return (
    <div>HomeCourses</div>
  )
}

export default HomeCourses