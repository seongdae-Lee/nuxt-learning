import type { CourseReturn } from "~/types/course";

export const useCourse = (couresSlug: string): CourseReturn => {
  const { courses } = useCourses();
  // const course = courses.find((course) => course.courseSlug === couresSlug);
  const index = courses.findIndex((course) => course.courseSlug === couresSlug);
  const course = courses[index];
  const prevCourse = index <= 0 ? null : courses[index - 1];
  const nextCourse = index >= courses.length - 1 ? null : courses[index + 1];
  return {
    course,
    prevCourse,
    nextCourse,
  };
};
