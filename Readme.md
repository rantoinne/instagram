# Instagram clone

### Steps to run
1. Clone the repo
2. Clone the web repo
3. Run web repo using `docker compose up`
4. On app repo, run `yarn && cd ios/ && pod install && cd ../`
5. Now run for both platforms using `yarn ios` or `yarn android`

### API
1. `/api/v1/add-comment`
- Adds a comment to a specific post and returns refreshed info about the same post

2. `/api/v1/create-post`
- Creates a new post by the user and returns a boolean for denoting successful execution

3. `/api/v1/get-posts`
- Lists out all the posts for `Feed` screen

4. `/api/v1/get-user-posts`
- Lists out all the posts by a specific user

5. `/api/v1/like-post`
- Likes/dislikes a specific post and returns refreshed info about the same post

6. `/api/v1/sign-up`
- Create a new user against information

7. `/api/v1/user-login`
- Logs in the user and returns a `userId`

8. `/api/v1/user-info`
- Returns all the info related to `Post` and user meta

9. `/api/v1/user-name-availility`
- While signup helps the user to find a correct `username` without calling sign up again and again