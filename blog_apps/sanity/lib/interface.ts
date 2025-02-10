// To give interface to homepage blog cards

export interface simpleBlogCard {
    title: string,
    smallDescription:string,
    currentSlug:string,
    titleImage: any,
}

// To give interface to blog article page

export interface FullBlogArticle {
    currentSlug:string,
    title:string,
    content:any,
    titleImage:any,
    _id:string,
    comments?:Comments[]
}

export interface Comments {
    name:string,
    comment:string,
    _createdAt:string,
    _id:string,
}