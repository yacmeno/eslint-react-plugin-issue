# eslint bugfix

## Initializer answers
```
./node_modules/.bin/eslint --init
? How would you like to use ESLint? To check syntax and find problems
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? React
? Does your project use TypeScript? No
? Where does your code run? (Press <space> to select, <a> to toggle all, <i> to invert selection)Browser
? What format do you want your config file to be in? JavaScript
The config that you've selected requires the following dependencies:

eslint-plugin-react@latest
? Would you like to install them now with npm? Yes
```

## See the fix
The branch "fix" uses the fork suggesting the fix: https://github.com/yacmeno/eslint/tree/fix-react-initializer

To test the fix:
* Checkout on the fix branch
* Delete the existing config file: ``` rm .eslintrc.js ```
* Re-run the initializer: ```./node_modules/.bin/eslint --init ```
* Due to the setup of this specific project, add ```"parser": "babel-eslint"``` in the new config file
* If ```npm run lint``` is run, the master branch errors and the fix branch succeeds