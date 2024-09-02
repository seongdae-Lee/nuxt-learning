import type { CourseWithPath } from "~/types/course";

interface CourseReturn {
  course: Maybe<CourseWithPath>;
}

export const useCourse = (couresSlug: string): CourseReturn => {
  const { courses } = useCourses();
  const course = courses.find((course) => course.courseSlug === couresSlug);
  return {
    course,
  };
};
