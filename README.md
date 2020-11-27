# django-app

## Description
A Python Django backend and ReactJS frontend application.

## Requirements
Make sure your system has `git`, `python3` and `npm` installed.

## Installation
Make a python virtual environment:
```shell
python3 -m venv djangoapp
cd djangoapp
source bin/activate
```

Clone this repo:
```shell
git clone https://github.com/Alegiannx/djangoapp.git
```

Rename cloned project to 'src':
```shell
mv djangoapp src
```

Install the python requirements
```shell
cd src
pip install -r requirements.txt
python manage.py migrate
```

Create a .env file
```shell
touch .env
```
And add the secret key to its contents
```
export SECRET_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Install the npm packages needed:
```shell
cd frontend
npm install
```

Run the starting scripts:
 * In `frontend` folder, run 
 ```shell
 npm run dev
 ```
 * In `src` folder with active venv, run 
 ```shell
 python manage.py runserver
 ```


Now just visit `http://localhost:8000/`