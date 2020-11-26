# django-app

## Description
A Python Django backend and ReactJS frontend application.

## Requirements
Make sure your system has `python3` and `npm` installed.

## Installation
Make a python virtual environment:
```shell
python3 -m venv djangoapp
cd djangoapp
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
```

Install the npm packages needed:
```shell
cd frontend
npm install
```

Run the starting scripts:
 * In `frontend` folder, run `npm run dev`
 * In `src` folder with active venv, run `python manage.py runserver`


Now just visit `http://localhost:8000/`