import coursesData from "~/composables/coursesData"
import type {CourseWithPath} from "~/types/course"

interface CourseReturn {
    courses: CourseWithPath[]
}
export const useCourses = (): CourseReturn => {
    const courses = coursesData.map(item => ({
        ...item,
        rating: item.rating.toFixed(1),
        reviewsCount: item.reviewsCount.toLocaleString(),
        studentCount: item.studentCount.toLocaleString(),
        path: `/courses/${item.courseSlug}`,
    }))
    return {courses}
}

