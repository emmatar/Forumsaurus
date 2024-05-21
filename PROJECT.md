# Forumsaurus

## Description
Forumsaurus is a React/Vite web application that utilizes MongoDB to create a platform for dinosaur enthusiasts to share their passion and connect with other like-minded individuals. The application will have features such as a login and sign-up system, profile pages, forum posts, comments, likes, and a post of the month section. The application will be designed to be user-friendly and visually appealing, with a focus on making it easy for users to create and interact with content. The application will also have a robust search feature, allowing users to quickly find topics of interest or search for specific content. Overall, Forumsaurus aims to create a welcoming and engaging community for dinosaur enthusiasts to share their passion and connect with one another.

## Pages
1. Landing Page
2. Login/Logout Page
- Sign-Up Page
3. Profile Page
- Profile Dashboard (User Settings)
4. Forum Home
- Forum Post
- Create a Forum Post
5. Post of the Month

## Database
1. Users
- id
- createdAt
- name
- username
- password
- posts`[]`
- profile`[]`

2. Profile
- id
- createdAt
- name
- username
- profileAvatar
- userBio [allowNull: true]
- genderIdentity [allowNull: true]
- hometown [allowNull: true]
- posts`[userId]`
    - content
    - likes  ('rawr!'s)
- comments `[userId]`
    - content
    - likes ('rawr!'s)

3. Posts
- id
- createdAt
- title
- content
- tags
- user`[id]`
    - profileAvatar
- comments`[postId]`
    - commentAuthor
    - likes ('rawr!'s)
- likes ('rawrs!')

4. Comments
- id
- createdAt
- author
- content
- post`[id]`
    - title
    - postAuthor