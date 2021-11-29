const { Post } = require('../models');

const postData = [
    {
        title: "Amazing GitHub Repositories",
        blog_text: "To lower the barrier to Software Development, Quincy Larson founded FreeCodeCamp in 2014. It offers a Virtual Code Camp so that the enrolled students can learn Software Development by working on projects in an interactive Platform.",
        user_id: 3
    },
    {
        title: "Free Programming Books",
        blog_text: "Fortunately for us, there are many free books available on the internet for developers. This repository maintains the list of all free programming-related books. It also categorizes the books and lists the books in many major languages.",
        user_id: 1
    },
    {
        title: "System Design",
        blog_text: "Designing a Scalable end-to-end Software System (Frontend to Database) is still a very challenging task. A System Designer needs to know a particular topic deeply and should know a wide range of topics.",
        user_id: 2

    },
    {
        title: "What's Z Shell?",
        blog_text: "Z Shell (Zsh) is a popular extension of the Bourne shell (UNIX) and offers many improvements over the other standard shells (bash, csh). If used correctly, it can give a significant performance boost. ",
        user_id: 1
    },
    {
        title: "The Art of the Command Line",
        blog_text: "One of the most effective but often neglected ways to improve productivity is to gain mastery in the command line. Initially, the UNIX-based systems mainly focused on Command-Line tools.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;