// project blog post status

// make enum to fixed 
enum PostStatus {
    Draft = 'DRAFT',
    Published = 'PUBLISHED',
    Archived = 'ARCHIVED'
}

type BlogPost = {
    title: string;
    content: string;
    status: PostStatus;
}

const post1: BlogPost = {
    title: 'intro to typeScript Enum',
    content: 'Enums are very powerfull',
    status: PostStatus.Published
}

console.log(post1.status);

const post2: BlogPost = {
    title: 'intro to redex',
    content: 'I love redux',
    status: PostStatus.Archived
}

console.log(post2.status);

