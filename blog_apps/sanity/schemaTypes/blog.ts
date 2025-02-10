export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields:[
        // Title of the blog article
        {
            name: 'title',
            type: 'string',
            title: 'Title of the blog article'
        },
        // Slug
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug of your blog article',
            options:{
                source:'title'
            }
        },
        // Image
        {
            name:'titleImage',
            type: 'image',
            title: 'Title Image'
        },
        // Small Description
        {
            name: 'smallDescription',
            type: 'text',
            title: 'Small Description'
        },
        // Content
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                    type: 'block'
                },
                {
                    type: 'image'
                }
            ]
        }
    ]
}