import User1 from "../assets/User1.svg"
import User2 from "../assets/User2.svg"


export const postData = [
    {
        "id": 1,
        "profilePic": User1,
        "profileName": "Theresa Webb",
        "timeAgo": "5mins ago",
        "isEdited": false,
        "message": {
            "emoji": "👋",
            "text": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        "comments": {
            "count": "24 comments"
        }
    },
    {
        "id": 2,
        "profilePic": User2,
        "profileName": "Marvin McKinney",
        "timeAgo": "8mins ago",
        "isEdited": true,
        "message": {
            "emoji": "😞",
            "text": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        "comments": {
            "count": "2 comments"
        }
    }
]
