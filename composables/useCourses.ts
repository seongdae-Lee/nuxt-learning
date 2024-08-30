import courses from "./coursesData";
import type { Course } from "~/types/course";

interface CoursesReturn {
  courses: Course[];
}

export const useCourses = (): CoursesReturn => {
  return {
    courses,
  };
};
