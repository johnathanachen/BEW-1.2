# Johnny's Theater API: Persisting Reservations via Express/MongoDB

## Purpose

[**TODO**] Add description of the projects purpose.

## How to Use This API

-- api.domain.com/theaters
There is a DB called theaters

-- api.domain.com/theaters/{id}
theaters.findOne({_id: theaterId});
^ Is used to find a specific sessions in the session table

-- api.domain.com/sessions
There is a DB called sessions

-- api.domain.com/sessions/{id}
sessions.find({_id: sessionId});
^ Is used to find a specific sessions in the session table

-- api.domain.com/carts/{id}
db.getSisterDB("booking").carts;
^ There is a DB called Carts

[sessions](APIDocumentation/sessions.md)

[**TODO**] List **each route individually** and one to two sentences describing the intention of each route. You MUST include practical examples of how to call each route!

## What I Learned

[**TODO**] Add bullet points describing what you learned by implementing this project.


* **URL**

  api.domain.com/sessions

* **Method:**

  `POST`
  
 * **Data Params**
 
```js
  {
	"theaterId": 1,
    "name" : "21 Jump Street",
    "description" : "Another action movie",
    "start" : "2015-03-11T15:00:00.000Z",
    "end" : "2015-03-11T16:00:00.000Z",
    "price" : 10,
    "seatsAvailable" : 80,
    "seats" : [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ],
    "reservations" : [ {
      "seats": [ [ 1, 5 ], [ 1, 6 ], [ 1, 7 ] ],
      "price" : 10,
      "total" : 30
    } ]
  }
```
* **Sample Call:**

```console
curl -X POST \
  http://localhost:3000/sessions \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: a30e51a8-c65a-d123-96a9-bb43900869f9' \
  -d '{
	"theaterId": 1,
    "name" : "21 Jump Street",
    "description" : "Another action movie",
    "start" : "2015-03-11T15:00:00.000Z",
    "end" : "2015-03-11T16:00:00.000Z",
    "price" : 10,
    "seatsAvailable" : 80,
    "seats" : [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ],
    "reservations" : [ {
      "seats": [ [ 1, 5 ], [ 1, 6 ], [ 1, 7 ] ],
      "price" : 10,
      "total" : 30
    } ]
  }'
```

SessionSchema | Type | Description
--------- | ----------- | -----------
_id | ObjectId | id of session
theaterId | Number | theater id reference
name | String | movie title
description | String | description of movie
start | Date | start date
end | Date | end date
price | Number | price of ticket
seatsAvailable | Number | number of seats open
seats | Mixed | 2D array of seats
reservations | Array | array of Reservation Schema 



