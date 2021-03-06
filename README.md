FriendFinder - Node and Express Servers

A compatibility-based "FriendFinder" application using Node.js and Express. This full-stack site takes in results of users' surveys. The answers were compared with those from other users. The app then displays the name and picture of the user with the best overall match. Express was used to handle routing. 

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

How it works:
The survey asks 10 questions. Each answer is rated 1 to 5 based on how much the user agrees or disagrees with a question. The user's most compatible friend is determined using the following as a guide:

   * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
     * Example: 
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * The absolute value of the differences are needed. Put another way: no negative solutions! The app should calculate both `5-3` and `3-5` as `2`, and so on. 
   * The closest match will be the user with the least amount of difference.

