import { z } from 'astro/zod'

const imageSchema = z.object({
    url: z.string(),
    width: z.number(),
    height: z.number()
})
const featuredImagesSchema = z.object({
    thumbnail: imageSchema,
    medium: imageSchema,
    medium_large: imageSchema,
    full: imageSchema
})

export const BaseWPSchemas =  z.object({
    id: z.number(),
    slug: z.string(),
    title: z.object({
        rendered: z.string(),
    }),
    content: z.object({
        rendered: z.string()
    }),
    featured_images: featuredImagesSchema,
    acf: z.object({
        subtitle: z.string()
    })
})

const gallerySchema = z.object({
    large: imageSchema,
    full: imageSchema,
})

export const GalleryPageSchema = BaseWPSchemas.extend({
    gallery: z.array(gallerySchema)
})
const processSchema = z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
})
export const ProcessPageSchema = BaseWPSchemas.extend({ 
    acf: z.object({ 
        subtitle: z.string(),
    }).catchall(processSchema)
})
export const CategorySchema = z.object({
    id: z.number(),
    name: z.string(),
    slug: z.string()
})
export const CategoriesSlugSchema =  z.array(CategorySchema.pick({
    slug: true
}))


const CategoriesSchema = z.array(CategorySchema)

export const PostSchema = BaseWPSchemas.omit({
    acf: true
}).extend({
    date: z.string(),
    category_details: CategoriesSchema
})
export const PostsSchema = z.array(PostSchema)

export type Post = z.infer<typeof PostSchema>

export type Gallery = z.infer<typeof gallerySchema>
