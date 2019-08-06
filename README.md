# Cravings
Cravings is a MERN stack application that allows users to find restaurants based on their feelings or cravings. 

[Cravings Live!](https://cravings-mern.herokuapp.com/#/)

## Background and Overview
Sometimes, you're not sure where to eat, but you want something that fits a certain craving or feeling. Cravings is meant to help the indecisive persom find a restaurant that satisifies all their needs. 

## Technologies and Challenges 
Cravings utilizes the MERN stack which consists of MongoDB, Express, React, and Node.js. 

[React-ChartJS](https://www.npmjs.com/package/react-chartjs-2) was used to create a pie chart that shows interactivity with the user's input. The biggest challenge for implementation was figuring out how to get data from chart to set the state in the frontend and fetching relevant information from the mongoDB database in the backend.

The [Yelp API](https://www.yelp.com/fusion) was used to seed the mongoDB database with restaurant locations relevant to the user's location. 

Challenges during this project include using query strings to fetch the user's input from the ChartJS data and introducing dynamic results to the user by filtering the query in a more flexible way.

### Key Features

#### Pie chart User Input

The user can deselect cravings and moods from the pie chart legend and view how the pie chart changes according to their selections. 

<p align="center">
    <img width="600" height="375" src="https://github.com/kavya-kumar94/cravings/blob/master/ezgif.com-video-to-gif.gif">
</p>

#### Randomizer for results index

The user can have the application choose a restaurant location by clicking a button that will randomly select a restaurant for them each time they click the button.

<p align="center">
    <img width="600" height="375" src="https://github.com/kavya-kumar94/cravings/blob/master/ezgif.com-video-to-gif%20(1).gif">
</p>

### Code Snippets


#### Query String for User Input
```js
query(e) {
        e.preventDefault();
        this.props.history.push({
            pathname: '/foods',
            search: `?sweet=${this.state.sweet}&spicy=${this.state.spicy}&salty=${this.state.salty}&savory=${this.state.savory}&hot=${this.state.hot}&cold=${this.state.cold}&healthy=${this.state.healthy}&junk=${this.state.junk}&happy=${this.state.happy}&sad=${this.state.sad}&hangry=${this.state.hangry}&sick=${this.state.sick}&celebratory=${this.state.celebratory}&stressed=${this.state.stressed}&adventurous=${this.state.adventurous}`
        })
    }
```


