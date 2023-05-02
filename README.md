# Project2_PokemonWeakness

React App that fetches Pokemon type information from Pokemon api.

# Motivation

I always wanted to create this app. I play a lot of pokemon and I constantly need to know the strengths and weaknesses of certain types. All of the major sites that contain this information are difficult to navigate through. I wanted to make a app that's easy to navigate.

# Screenshots

![readmescreenshot](https://i.imgur.com/zT2vN1Q.png)

# Built with

React, Javascript, HTML, and CSS

# Features

Uses React to fetch data from Pokemon API. Uses CSS flexbox to make app accessable through mobile. Javascript functions and in line conditions are used to show images and change colors. Browser router is used to set urls and Links are used to send the user to specified urls.

# How to use

Deployed through https://christianmendez1.github.io/Project2_PokemonWeakness/

# Approach taken

Uses React to map and fetch data from a Pokemon API and puts them into Links. The data is displayed into the homepage designated by browser router. One function is used to display a pokemon picture based on the mapped fetch data. Another function is used to change the color of the Link depending on the in line condition. When the user clicks on Link it takes you to a url based on the data you clicked and displays you information about the data. This data is also mapped through Links and arrays which if you click navigates you to the specified url. There is also a Navigation bar that takes you back to the homepage.

# Code Example

```
const typenamemap = typename.map((element) => {
    const {name} = element;
    return(
        <Link to={`/type/${name}`}>
            <img id='pokemonphotos' src={typepicture(name)} />
            <li class='typename' style={{backgroundColor: name ? typecolor(name) : 'gray'}}>{name.toUpperCase()}</li>
        </Link>
    )
})
```

# Installation
```
Clone through https://github.com/ChristianMendez1/Project2_PokemonWeakness
Tested through Visual Stuidio Code's live server. 
Remove basename= '/Project2_PokemonWeakness/' from index.js to npm start
```

# Credits

```
https://pokeapi.co/docs/v2#types 
https://bulbapedia.bulbagarden.net/wiki/Main_Page (pokemon images)

```