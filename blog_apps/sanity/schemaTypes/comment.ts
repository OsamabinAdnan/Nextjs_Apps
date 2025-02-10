import { defineType } from "sanity";

export const comment = defineType({
    name: 'comments',
    title: 'Comments',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            readOnly: true,
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            readOnly: true,

        },
        {
            name: 'comment',
            title: 'Comment',
            type: 'text',
            readOnly: true,
        },
        {
            name: 'blog',
            type: 'reference',
            title: 'Blog',
            to: [{ type: 'blog' }],
        },
    ],
})