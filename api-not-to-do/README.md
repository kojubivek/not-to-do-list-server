# RESTFull API for not do to list

This api is created for react-not-to-do-list frontend application, here is the repo for the frontend

## How to run

1. open your terminal at your development folder
2. Run `git clone repo link.`
3. Run `cd react-not-to-do-list`
4. Run `npm install`
5. Run `npm start`

Now, your server is running at `http://localhost:8000`

## API details

This server applies RESTfull principle to provide API
All the api will follow `<rooturl>/v1/<resources end point>`

## Task API

All the task related transaction of api will be request through `<rooturl>/v1/task`

| #   | PATH | METHOD | IS PRIVATE | DESCRIPTION                                                             |
| --- | ---- | ------ | ---------- | ----------------------------------------------------------------------- |
| 1   | `\`  | GET    | No         | This endpoint will return all the tasl from database                    |
| 2   | `\`  | POST   | No         | This endpoint receives an object from the client and stores in database |
| 3   | `\`  | PUT    | No         | This endpoint receives `_id` of specific object and the date to update  |
| 4   | `\`  | DELETE | No         | This endpoint receives `_id` and deletes it from database               |
