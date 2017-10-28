<<<<<<< HEAD
# Friend Finder - Node and Express Servers

A compatibility-based "FriendFinder" application. This full-stack site takes in results of users' surveys and compared answers with those from other users. The app then displays the name and picture of the user with the best overall match. 
=======


A compatibility-based "FriendFinder" application using Node.js and Expess. This full-stack site takes in results of users' surveys and compared answers with those from other users. The app then displays the name and picture of the user with the best overall match. 
>>>>>>> b01b7dbb43afd009407da573f5ed1af04a076b25

Express was used to handle routing. This was supposed to be deployed to Heroku so other users can fill it out but there are errors in finding module.

The folder contains the following:
  FriendFinder
    - app
      - data
        - friends.js
      - public
        - home.html
        - survey.html
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - node_modules
    - package.json
    - server.js

Node modules installed; `express`, `body-parser` and `path`.

How it should work:
The survey asks 10 questions. Each answer is rated 1 to 5 based on how much the user agrees or disagrees with a question. The user's most compatible friend is determined using the following as a guide:

   * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
     * Example: 
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on. 
   * The closest match will be the user with the least amount of difference.

