// project blog post status
// make enum to fixed 
var PostStatus;
(function (PostStatus) {
    PostStatus["Draft"] = "DRAFT";
    PostStatus["Published"] = "PUBLISHED";
    PostStatus["Archived"] = "ARCHIVED";
})(PostStatus || (PostStatus = {}));
const post1 = {
    title: 'intro to typeScript Enum',
    content: 'Enums are very powerfull',
    status: PostStatus.Published
};
console.log(post1.status);
const post2 = {
    title: 'intro to redex',
    content: 'I love redux',
    status: PostStatus.Archived
};
console.log(post2.status);
export {};
