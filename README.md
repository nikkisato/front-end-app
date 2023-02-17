# front-end-app
# Week 3
## Topics
- Async js
- Fetch and handling errors
- CORS - how and why
- Rendering in the DOM with vanilla js
## Challenge
- Create a new project in a separate repo. We are going to focus mainly on the frontend for the next few weeks. Create an html page and a single js file. 
- Using js, fetch some json from your Express web server and render it on your html page
- You may want to use a library like http-server (https://www.npmjs.com/package/http-server) for the development of your frontend
- Are you able to fetch from your Express server? (Have a look at your network tab in the dev console). If not, you may need to utilize this package in your Express project: https://expressjs.com/en/resources/middleware/cors.html
- If you get stuck have a look at this article: https://www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express/
- BONUS: handle request errors in your frontend. To work on this you'll need to change the response status code in Express - try both 400 & 500. Can you catch them both? (HINT: have a look at the "ok" method on the returned response)
## In the call we'll go over this including:
- an explanation of CORS and why it is important, what the package does, when to use it, who's responsibility it is
- Setting up a proxy in development
## Folllow up:
- About CORS & preflight requests: https://javascript.info/fetch-crossorigin#:~:text=The%20server%20can%20inspect%20the,successful%2C%20otherwise%20it's%20an%20error.
