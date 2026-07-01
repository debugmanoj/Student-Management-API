import { z } from "zod";

export const createStudentSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters long")
    .max(50, "Name cannot exceed 50 characters")
    .regex(/^[A-Za-z\s]+$/, "Name should contain only letters and spaces"),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Please enter a valid email address"),

  age: z
    .number({
      required_error: "Age is required",
      invalid_type_error: "Age must be a number",
    })
    .int("Age must be an integer")
    .min(16, "Age must be at least 16")
    .max(100, "Age cannot exceed 100"),

  course: z
    .string()
    .trim()
    .min(2, "Course is required")
    .max(100, "Course name is too long"),

  department: z
    .string()
    .trim()
    .min(2, "Department is required")
    .max(100, "Department name is too long"),

  year: z
    .string()
    .trim()
    .refine(
      (value) =>
        ["1st", "2nd", "3rd", "4th"].includes(value),
      {
        message: "Year must be one of: 1st, 2nd, 3rd, 4th",
      }
    ),

  cgpa: z
    .number({
      required_error: "CGPA is required",
      invalid_type_error: "CGPA must be a number",
    })
    .min(0, "CGPA cannot be negative")
    .max(10, "CGPA cannot be greater than 10"),
});

export const updateStudentSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name cannot exceed 50 characters")
    .regex(/^[A-Za-z\s]+$/, "Name should contain only letters and spaces")
    .optional(),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Please enter a valid email")
    .optional(),

  age: z
    .number({
      invalid_type_error: "Age must be a number",
    })
    .int("Age must be an integer")
    .min(16, "Age must be at least 16")
    .max(100, "Age cannot exceed 100")
    .optional(),

  course: z
    .string()
    .trim()
    .min(2, "Course is required")
    .max(100, "Course name is too long")
    .optional(),

  department: z
    .string()
    .trim()
    .min(2, "Department is required")
    .max(100, "Department name is too long")
    .optional(),

  year: z
    .string()
    .trim()
    .refine(
      (value) =>
        ["1st", "2nd", "3rd", "4th"].includes(value),
      {
        message: "Year must be one of: 1st, 2nd, 3rd, 4th",
      }
    )
    .optional(),

  cgpa: z
    .number({
      invalid_type_error: "CGPA must be a number",
    })
    .min(0, "CGPA cannot be negative")
    .max(10, "CGPA cannot be greater than 10")
    .optional(),
});