import z from "zod";

export const courseLevel = 
["Beginner", "Intermediate", "Advanced"] as const;

export const CourseStatus =
["Draft", "Published", "Archived"] as const;

export const courseCategories = [
  "Development",
  "Business",
  "Finance",
  "IT & Software",
  "Personal Development",
  "Design",
  "Marketing",
  "Health & Fitness",
  "Music",
  "Teaching & Academics",
] as const;

export const  courseSchema = z.object({
     
    title: z.string()
    .min(3, {message: "Title must be at least 3 characters long"})
    .max(100, {message: "Title must be at most 100 characters"} ),

     description: z.string()
     .min(3, {message: "Description must be at least 3 characters long"}),

fileKey: z.string()
.min(1, {message: "File key is required"}),

price: z.coerce.number()
.min(1, {message: "Price must be a positive number"}),

duration: z.coerce.number()
.min(1, {message: "Duration must be at most 1 hour"})
.max(500, {message: "Duration must be at most 500 hours"}),

  level: z.enum(courseLevel, {message: "Level is required"}),

 category: z.enum(courseCategories, {
  message: "Category is required"}),

 smallDescription: z.string()
 .min(3, {message: "Small description must be at least 3 characters long"})
 .max(200, {message: "Small description must be at most 200 characters"}),

    slug: z.string()
    .min(3, {message: "Slug must be at least 3 characters long"}),

    status: z.enum(CourseStatus, {message: "Status is required"}),

});

export type CourseSchemaType = z.infer<typeof courseSchema>;