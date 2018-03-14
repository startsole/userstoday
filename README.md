# userstoday

A quick stats page for number of users signed up for StartSole. To be implemented as a Slack Bot.


Basic version is now working & deployed!

To run locally:

1. Download this code
`git clone REPOURL`

2. Add environmental variables:
  * `PORT` port to run the server
  * `APPID` Parse App ID

`export PORT=80`
`export APPID=xxxxxxxx`

3. Set up environment

`npm install`

4. Run the code

`node app.js`

5. Send a `POST` request

Send a `POST` request to `localhost:PORT`. You might need to use Postman or
another tool to do this.



# Improvements

I'm using github issues to track possible improvements and bugs. Feel free to
add thoughts or ideas. Generally speaking, I'd like to add more stats and make
it easier to share data that can influence our day-to-day work.
