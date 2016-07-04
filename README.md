# ExchangeSimulator
POC for creating a monitor and X12 834 format generator
download the or clone

## Prerequisites

### Node.js

Install **[Node.js® and npm](https://nodejs.org/en/download/)** if they are not already on your machine.

Verify that you are running at least node v5.x.x and npm 3.x.x by running node -v and npm -v in a terminal/console window. Older versions produce errors.

## Install packages

We install the packages listed in package.json using npm. Enter the following command in a terminal window 

```
npm install
```
The typings folder could not show up after npm install. If so, please install them manually.

```
npm run typings install
```


## Build and run the app!

Open a terminal window and enter this command:
```
npm start
```
That command runs two parallel node processes

1 - The TypeScript compiler in watch mode
2 - A static server called lite-server that loads index.html in a browser and refreshes the browser when application files change

#### In a few moments, a browser tab should open and display
