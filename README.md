# Ski Buddy 

Welcome to ski buddy, this website is intended for ski and snowboardeds looking for information on ski mountains in the east coast. 

## Set up 
- To be able to run the application first you need to clone the repository from github. 
- Once the repository has been cloned make sure to bundle install in the terminal 
- Next run npm install in the terminal
```console 
npm install 
```
- After this make sure that you have a version of postgresql downloaded on your computer. 
- Finally before running the server you will need to create your migrations.
- Run rails db:migrate db:seed in the terminal to create the schema as well as save the data to the database. 
```console 
rails db:migrate db:seed
```
- All you have to do now is run rails s and npm start --prefix client 
```console 
rails s 
npm start --prefix client
```

## How it works 

Please signup on the main page or if you are already a current user go to the login form. 
If you are a new user please click on the signup button on the login page. 
You will be redirected to the signup page where you can fill out your profile imformation. 
Be sure to fill out all of the required fields before clicking submit. 

## Navigation 

Once you have succesfully logged onto the site you will be greated with a main home page 
One the main homepage is a list of mountains along with some information regarding the mountains. 

On the top of the navigations bar there are two buttons one is a home button which will redirect you back to the main page. 
The other button is to go to your pofile. On the profile page you can see your information as well as edit the existing information. 

Back on the homepage if you click the trails button you will be redirected to a single page that shows the mountain you clicked on along with some more information that includes:
- Number of trails 
- Number of lifts 
- Elevation 
- A full list of grails and difficulty 
- Comments section 

In the comments section of the post this is where you are able to see other individuals comments. You are also able to create some comments of your own by clicking the small plus button at the top of this section. 
How a comment works:
- First you need to fill out the fields required and submit the comment 
- The comment will be posted below with all the other comments 
- If you wish to edit the comment click the pencil icon to edit your comment 
- Or to delete the comment entirely just click the trash can button 


## Website information 
Rails 7.0.4
Ruby 2.7.4
Postgresql @14/@15
NPM 8.19.1
Material UI

## Creator 
Justin Mitchell

## Links 
[GitHub](https://github.com/Mitchellj04/ski-buddy)
[Youtube](https://youtu.be/rDhcCumVofg)
[Medium/Blog](https://medium.com/@mitchelljm04/control-of-validation-43a27009a6d)