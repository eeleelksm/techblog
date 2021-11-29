const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "This is amazing!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Wow, amazing work!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "I wish there was some more details, but overall, really enjoy this."
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Fantastic!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Really enjoyed this"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "This is the one!"
    },
    {
        user_id: 4,
        post_id: 3,
        comment_text: "Very useful"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Nice, really helpful."
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;