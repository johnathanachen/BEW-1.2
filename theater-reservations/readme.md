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



[**TODO**] List **each route individually** and one to two sentences describing the intention of each route. You MUST include practical examples of how to call each route!

## What I Learned

[**TODO**] Add bullet points describing what you learned by implementing this project.

Type Name | Description
--------- | -----------
HEX | Hex encoded binary blob
BASE64 | Base 64 encoded binary blob
XDR | Base 64 encoded object serialized in XDR form
STRKEY | Custom encoding for public/private keys. See [`src/crypto/readme.md`](/src/crypto/readme.md)
