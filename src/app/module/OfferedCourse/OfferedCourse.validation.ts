import { z } from 'zod';
import { Days } from './OfferedCourse.constants';

const createOfferedCourseValidationSchema = z.object({
  body: z.object({
    semesterRegistration: z.string(),
    // academicSemester: z.string(),
    academicFaculty: z.string(),
    academicDepartment: z.string(),
    course: z.string(),
    faculty: z.string(),
    days: z.array(z.enum([...Days] as [string, ...string[]])),
    startTime: z.string(),
    maxCapacity: z.number(),
    section: z.number(),
    endTime: z.string(),
  }),
});

const updateOfferedCourseValidationSchema = z.object({
  body: z.object({
    faculty: z.string().optional(),
    maxCapacity: z.number().optional(),
    days: z.array(z.enum([...Days] as [string, ...string[]]).optional()),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
  }),
});

export const OfferedCourseValidation = {
  createOfferedCourseValidationSchema,
  updateOfferedCourseValidationSchema,
};
// const isSameOfferedCourseExistsWithSameRegisteredSemsesterWithSameSection = z
