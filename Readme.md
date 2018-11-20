# Sample React-Redux hiring dashboard app.

This application is created for demo purposes. To use the repo run commands in the following order:

1. npm i - it will install all the required dependencies
2. npm start - this step will fire eslint first, then unit tests, and then it will run webpack dev server with the app itself.

## App behavior:
1. During the initial app load, the code will select 5 crew members from [https://randomuser.me](https://randomuser.me) API and will display.
2. Those crew members will then placed into the first column of the dashboard (Applied).
3. Using arrow-shaped buttons on the crew member cards, you can now move them between this and 2 other columns(Interviewing and Hired).
4. On the top of the page, you can see 2 input fields(First Name and City) with a button named 'Filter Crew Members'.
By typing text inside those inputs and pressing the button you will filter dashboard columns and you would see only matching crew member cards.
5. In addition, those filters will be saved after you used them and will remain during your next visit.
