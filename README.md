# github-resume

The purpose of this application is to display a GitHub user's profile as a resume.
The idea is to have a home page with an input allowing users to fill in their username.
When the form is submitted, the user is redirected and his resume is displayed.

For this execise you will need to query GitHub's API.
To get a user profile, you have to request the following URL:

```
https://api.github.com/users/:username
```

So if your username is `JaneDoe`, you'd have to request `https://api.github.com/users/JaneDoe`.
User profiles look like this:

```json
{
  "login": "octocat",
  "id": 1,
  "avatar_url": "https://github.com/images/error/octocat_happy.gif",
  "html_url": "https://github.com/octocat",
  "name": "monalisa octocat",
  "company": "GitHub",
  "blog": "https://github.com/blog",
  "location": "San Francisco",
  "email": "octocat@github.com",
  "bio": "There once was...",
  "public_repos": 2,
  "followers": 20,
  "following": 0
}
```

For the full list of fields, have a look at the [documentation](https://developer.github.com/v3/users/#get-a-single-user).

To make HTTP requests with Node.js you can use the npm package `request`, which can be installed through `npm install request --save`. This package works like this:

```js
const request = require('request');
request('https://api.github.com/users/JaneDoe', (err, response, body) => {
  if (err) {
    console.error(err);
  } else {
    // body is a string that needs to be parsed
    const user = JSON.parse(body);
    console.log(user);
  }
});
```
