import React from 'react'
import { homeCoursesStyles } from "../assets/dummyStyles"
import { coursesData } from "../assets/dummyHdata"
import { Star,User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomeCourses = () => {
    const navigate = useNavigate();
    const {title, course: courseFont, detail} = homeCoursesStyles.fonts;
    const visibleCourse = coursesData.slice(0, 8);
    const [userRatings, setUserRatings] = useState(() => {
    try {
      const raw = localStorage.getItem("userCourseRatings");
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });
  const [hoverRatings, setHoverRatings] = useState({});

  useEffect(() => {
    try {
      localStorage.setItem("userCourseRatings", JSON.stringify(userRatings));
    } catch {}
  }, [userRatings]);

    const showLoginToast = () => {
    toast.error("Please login to access this course", {
      position: "top-right",
      transition: Slide,
      autoClose: 3000,
      theme: "dark",
    });
  };


  return (
    <div className={homeCoursesStyles.container}>
        <div className={homeCoursesStyles.mainContainer}>
            <div className={homeCoursesStyles.header}>
                <h2 className={`${title} ${homeCoursesStyles.title}`}>
                <Star className={homeCoursesStyles.titleIcon}/>
                Explore Top Courses
                <Star className={homeCoursesStyles.titleIcon}/>
                </h2>
            </div>
            <div className={homeCoursesStyles.coursesGrid}>
                {visibleCourse.map((course) => {
                    const isFree = !!course.isFree || !course.price;
                    return(
                        <div key={course.id} onClick={() => handleCourseClick(course.id)} className={homeCoursesStyles.coursesGrid}>
                            
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default HomeCourses