# EntryLevel
## Installation

Require Node version 16 or higher

To install app run 
```bash
sh install.sh
```
Or run
```bash
cd back-end && npm install
```
to install Back end and run 
```bash
cd front-end && npm install
```
to install Front end  
## Run Application

Run back-end by 
```bash
cd back-end && npm start
```
back end should be running on port 4000

Visit http://localhost:4000/ to make sure that back end is running

Run front-end by 
```bash
cd front-end && npm start
```
front end should be running on port 3000
Visit http://localhost:3000/ to make sure that front end is running

The result shoud be like this video
https://www.loom.com/share/39b938a0c32049db897b9e28c7367cf1

## Explain top 3 design/trade-off
1: for back-end I choose to use Express with HMVC design pattern

Advantage :

- Easily extensible by modules and api versions
- Simple to understand, not complicated
- In the source code we have session and program modules we can easily extend and add other modules

2: for front-end I choose to use React with Redux-saga

Advantage :

- easy manipulation with calling api
- clear state management
- easy to debug and find bugs

3: for front-end 

I choose to build and structure folders for pages to easily manage the state and avoid unnecessary re-renders.
- in the current source code we have store, reducer, saga for session and can be easily extended by adding new pages
