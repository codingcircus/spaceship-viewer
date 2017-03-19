# Spaceship Viewer

## Summary

This webapp shows a list of famous sci-fi spaceships. Each spaceship can be shown by itself and displays some meta info. 

## Project Overview

This is a small app, which consists of an node js api and an angular2 app.

## API

The api is done with node js and express. There are two api calls: `/v1/spaceships` returns a list of spaceships, while `/v1/spaceships/:id` returns a specific spaceship

## Angular 2 App

The frontend is made with angular 2. It uses multiple components to build the UI and uses http and router modules to make navigating and displaying data possible. 