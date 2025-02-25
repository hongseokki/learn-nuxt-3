import type {CourseWithPath} from "~/types/course"

interface CourseReturn {
    course: Maybe<CourseWithPath> // Course | null | undefined
}

export const useCourse = (courseSlug: string): CourseReturn => {
    const { courses } = useCourses()
    const course = courses.find((data) => data.courseSlug === courseSlug)
    return {course}
}