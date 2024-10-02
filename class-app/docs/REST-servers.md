CRUD Application

Create -> POST
Read -> Get
Update -> PUT / PATCH
Destroy -> DELETE

HTTP Operations (the ones we care about, there are others)
GET -> Fetch/retrieve a document
POST -> Add a document to the server
PUT -> Add or replace a document on the server
PATCH -> Defined later as a partial update
DELETE -> Delete a document on the server

GET /resource -> Return a list of that resource
GET /resource/{id} -> Return one instance of that resource with the id {id}
POST /resource {+ resource data} -> Creates a new instance of resource
PUT /resource/{id} {+ replacement resource} -> Replace the resource at {id} with the replacement
replacement must be a complete resource
PATCH /resource/{id} {+ resource update} -> Update the resource in place with the changes in resource update
DELETE /resource/{id} -> Delete the resource at {id}

Originally
{
id: 1,
name: "John Paxton",
city: "Nutley"
}

PUT /people/1
[Need a complete resource]
{
id: 1,
name: "John Paxton",
city: "Jersey City" // Only this updated
}

Contrast

PATCH /people/1
{
city: "Hoboken"
}

# Code HTTP/Web Call type Database/SQL

addRecord POST/PUT Create INSERT
getRecords GET Read SELECT
editRecord PUT/PATCH Update UPDATE
deleteRecord DELETE Destroy DELETE

REST servers -> REpresetational State Transfer
Leverage HTTP commands to indicate the kind of interaction you want with a remote
server. Read -> GET, Destroy -> DELETE, etc....

REST or API levels 1-3. We're discussing Level 2.

Level 1 follows no particular API pattern
Level 2 follows some of a RESTful pattern
Level 3 uses HTTP and HyperText as the medium of application state (HATEOAS), everything is defined by requests and responses.

# Code HTTP/Web URL Request Body Results

getRecords GET /records None (200) records[]
getRecordById(12) GET /records/12 None (200) record where record.id === 12 || 404
addRecord(new Record) POST /records new record (201) record with generated id
editRecord(12, {udpate}) PATCH /records/12 changed values for record (200) updated record
editRecord(12, record) PUT /records/12 complete replacement record (200) updated record
deleteRecord(12) DELETE /records/12 None (200) deleted record || boolean

JSON data
{
"people": [
{"id": 1, "firstName": "John", "lastName": "Paxton"},
{"id": 2, "firstName": "Dan", "lastName": "Paxton"},
{"id": 3, "firstName": "Tim", "lastName": "Paxton"},
{"id": 4, "firstName": "Andreina", "lastName": "Castillo"},
{"id": 5, "firstName": "Hector", "lastName": "Castillo"},
],
"places": [
{"id": 1, "city": "Boston", "state": "MA"},
{"id": 2, "city": "New York", "state": "NY"},
]
}

Send it to json-server and it will create a RESTful server with the following endpoints:

/people
/places
