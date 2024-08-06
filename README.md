# Restaurant-List (Demo)
it's a website you can search favorite restaurant and get the detail information about restaurantes, like the name, the rating, and the picture.

## Image Demonstration
![image](https://github.com/jacky1a2a3a4a/Restaurant-List_Demo/blob/53cdc60ed8d754f94aa180b7b1181351b07e151d/Restaurant%20List_img%20(1).png)
![image](https://github.com/jacky1a2a3a4a/Restaurant-List_Demo/blob/53cdc60ed8d754f94aa180b7b1181351b07e151d/Restaurant%20List_img%20(2).png)

## Features
* Click a specific restaurant to show the information on the detail page.
* Search restaurants by names or categories.

## Getting Started
### Installing
1. open your `terminal`, clone the repository:
```
$ git clone https://github.com/zhou-jacky000/Restaurant.git
```
2. Move to Restaurant-List directory:
```
$ cd /Restaurant
```
3. Restore the dependencies: 
```
$ npm install
```

### Excuting program
1. Launch the application: 
```
$ npm run dev
```
2. Browse the URL `http://localhost:3000` on the terminal.

### Dependencies:
* Express: "^4.19.2"
* Express-handlebars: "^7.1.3"

### Includes:
* Bootstrap: v5.1.3
* Font Awesome 6.0.0

### Static files:

```
Restaurant
├── public/
│   ├── stylesheets/
│       └── index.css
│   └── jsons/
└──     └── restaurants.json
```

### Scripts:

```
"start": "node app.js"
"dev": "nodemon app.js"
```
