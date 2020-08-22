# twitterapp

It is a simple web application utilizing the twitter api to get the twitter feeds. This covers the UI part of the whole system. The backend is covered in the Twitterserver which is present in another Repo. This has user registration and user authentication features. Users are stored in the mongo database and uses jwt token based authentication mechanism. Right now, it has two api to get data from the twitter. 

* Get random tweets from the twitter
* Search tweets with a specific text

## User Registration

Before you can retrieve the twitter data, user needs to be registered with username, password and email.

![result](<https://github.com/ravimaharjan/twitterapp/blob/master/assets/register.png>)



## User Login

This allows user to login in with username and password.

![result](<https://github.com/ravimaharjan/twitterapp/blob/master/assets/login.png>)



## Tweet List


![result](<https://github.com/ravimaharjan/twitterapp/blob/master/assets/list_tweets.png>)


## Tweet Search

This allows to search the twitter posts with specific text present in it.

![result](<https://github.com/ravimaharjan/twitterapp/blob/master/assets/search_tweets.png>)

## Steps to Run the App
* git clone git@github.com:ravimaharjan/twitterapp.git
* npm install
* npm start
