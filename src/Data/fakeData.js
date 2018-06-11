const photos = [
    {
        "id": 1,
        "imgUrl": "http://via.placeholder.com/350x250?text=My+photo+1",
        "desc": "Decspription of picture ",
        "comments": [],
        "likes": 0
    },
    {
        "id": 2,
        "imgUrl": "http://via.placeholder.com/350x250?text=My+photo+2",
        "desc": "Decspription of picture ",
        "comments": [
            {
                "id": 1,
                "author": "author of comment ",
                "body": "body of comment ",
                "edited": false
            },
            {
                "id": 2,
                "author": "author of comment ",
                "body": "body of comment ",
                "edited": false
            },
            {
                "id": 3,
                "author": "author of comment ",
                "body": "body of comment ",
                "edited": false
            },
            {
                "id": 4,
                "author": "author of comment ",
                "body": "body of comment ",
                "edited": false
            }
        ],
        "likes": 3
    },
    {
        "id": 3,
        "imgUrl": "http://via.placeholder.com/350x250?text=My+photo+3",
        "desc": "Decspription of picture ",
        "comments": [
            {
                "id": 1,
                "author": "author of comment ",
                "body": "body of comment ",
                "edited": false
            },
            {
                "id": 2,
                "author": "author of comment ",
                "body": "body of comment ",
                "edited": false
            },
            {
                "id": 3,
                "author": "author of comment ",
                "body": "body of comment ",
                "edited": true
            },
            {
                "id": 4,
                "author": "author of comment ",
                "body": "body of comment ",
                "edited": false
            },
            {
                "id": 5,
                "author": "author of comment ",
                "body": "body of comment ",
                "edited": false
            }
        ],
        "likes": 7
    }
];

export default photos;