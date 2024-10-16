import type { CourseReturn } from "~/types/course";

export const useCourse = async (couresSlug: string): Promise<CourseReturn> => {
  const { data, error } = await useFetch(`/api/courses/${couresSlug}`);

  if (error.value) {
    createError({
      ...error.value,
    });
  }

  return data.value as CourseReturn;
};
