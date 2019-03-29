# The Doctor Finder

This is an application that will allow people to find doctors in the Portland area, utilizing the BetterDoctor API. Users are able to search for doctors based on name or their condition.

## Specifications

* User can search doctors by name

* User can search doctors by their medical issue

* The following results will be displayed in each search : first name, last name, address, phone number, website and whether or not the doctor is accepting new patients

* If the search doesn't include any doctors, user will be told no doctors were found in their search

## Required Programs

To edit code, users will need an IDE or text editor.

## Setup/Installation/Use

1. Clone github repo: https://github.com/samstoia/js-doctor-search
2. Navigate to cloned folder in the command line ($cd doctor-search)
3. Once there, type the following commands : "npm install webpack@4.0.1 --save-dev" "npm install webpack-dev-server@3.1.0 --save-dev", "npm install"
4. Ensure the project is working by building the project by typing "npm run build", and that tests are passing by running "npm run test"

* Important Information: You will not get access to the BetterDoctor API key by cloning this project. If you want to get your own key, you will need to go to the BetterDoctor website and get your own. https://developer.betterdoctor.com/

## Built With/Using

* JavaScript
* karma
* jasmine
* babel
* vscode
* webpack
* npm

Dependencies Used:

"babel-core": "^6.26.0",
"babel-loader": "^7.1.3",
"babel-preset-es2015": "^6.24.1",
"clean-webpack-plugin": "^0.1.18",
"css-loader": "^0.28.10",
"eslint": "^4.18.2",
"eslint-loader": "^2.0.0",
"file-loader": "^3.0.1",
"html-webpack-plugin": "^3.0.6",
"jasmine": "^3.1.0",
"jasmine-core": "^2.99.1",
"karma": "^2.0.0",
"karma-chrome-launcher": "^2.2.0",
"karma-cli": "^1.0.1",
"karma-jasmine": "^1.1.1",
"karma-jasmine-html-reporter": "^0.2.2",
"karma-jquery": "^0.2.2",
"karma-sourcemap-loader": "^0.3.7",
"karma-webpack": "^2.0.13",
"style-loader": "^0.20.2",
"uglifyjs-webpack-plugin": "^1.2.2",
"url-loader": "^1.1.2",
"webpack": "^4.0.1",
"webpack-cli": "^2.0.9",
"webpack-dev-server": "^3.1.0"

## Authors

| **Sam Stoia** | **GitHub: [samstoia](https://github.com/samstoia)** | **Email: [samstoia@gmail.com](mailto:samstoia@gmail.com)**

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

Copyright (c) 2019 Sam Stoia


## Acknowledgments

[Epicodus](https://www.epicodus.com/).

[BetterDoctor](https://betterdoctor.com/)
