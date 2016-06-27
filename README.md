# Boilerplate-angular2
Simple boilerplate, ready for development, testing, building and deployment. 

Contains:
- Angular2 (RC1 at the moment of writing) with plenty of subpackages (RxJS, Typescript etc.)
- Karma & PhantomJS for testing
- Webpack for transpiling from Typescript to JS, packing and building.

# Getting started
Run `git clone https://github.com/Bjeaurn/Boilerplate-angular2 <desired folder>` from the commandline.

Run `npm install` from the commandline.

You're ready to go!

# Development
The `/src/` folder contains the boilerplate itself.
- index.html for the main landing page.
- `/app/` for the Typescript files, using Angular2.

# Running the app

## Development version
Run `npm start` from the commandline

## Testing
Run `npm test` from the commandline

## Building / Packaging
Run `npm run build` from the commandline

## Deployment
Take the `/dist/` from the folder after running the build. Deploy this to a server and host of your liking. 