import type { Course } from "~/types/course";

interface CourseReturn {
  course: Maybe<Course>;
}

export const useCourse = (couresSlug: string): CourseReturn => {
  const { courses } = useCourses();
  const course = courses.find((course) => course.courseSlug === couresSlug);
  return {
    course,
  };
};
