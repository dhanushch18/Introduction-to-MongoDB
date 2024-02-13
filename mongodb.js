Microsoft Windows [Version 10.0.22621.3007]
(c) Microsoft Corporation. All rights reserved.

C:\Users\malav>mongosh
Current Mongosh Log ID: 65cae41711ebb50b1104e268
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.4
Using MongoDB:          7.0.5
Using Mongosh:          2.1.4

For mongosh info see: https://docs.mongodb.com/mongodb-shell/


To help improve our products, anonymous usage data is collected and sent to MongoDB periodically (https://www.mongodb.com/legal/privacy-policy).
You can opt-out by running the disableTelemetry() command.

------
   The server generated these startup warnings when booting
   2024-02-13T08:54:31.304+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> show dbs
admin   40.00 KiB
config  12.00 KiB
local   40.00 KiB
test> use blog
switched to db blog
blog> db.createCollection("posts")
{ ok: 1 }
blog>  db.createCollection("user")
{ ok: 1 }
blog> show collections
posts
user
blog> db.createCollection("persons")
{ ok: 1 }
blog> db.user.drop()
true
blog> show collections
persons
posts
blog> db.posts.drop()
true
blog> show collections
persons
blog> db.persons.insert(
... {
... FirstName : "Dhanush"
... LastName : "ch",
Uncaught:
SyntaxError: Unexpected token, expected "," (4:0)

  2 | {
  3 | FirstName : "Dhanush"
> 4 | LastName : "ch",
    | ^
  5 |

blog> db.persons.insert( { FirstName : 'Dhanush' ,LastName : 'ch',
... Age : 23,
... City : 'Kannur'
... }
... )
DeprecationWarning: Collection.insert() is deprecated. Use insertOne, insertMany, or bulkWrite.
{
  acknowledged: true,
  insertedIds: { '0': ObjectId('65caebfb11ebb50b1104e269') }
}
blog> db.persons.find()
[
  {
    _id: ObjectId('65caebfb11ebb50b1104e269'),
    FirstName: 'Dhanush',
    LastName: 'ch',
    Age: 23,
    City: 'Kannur'
  }
]
blog> db.persons.find().pretty()
[
  {
    _id: ObjectId('65caebfb11ebb50b1104e269'),
    FirstName: 'Dhanush',
    LastName: 'ch',
    Age: 23,
    City: 'Kannur'
  }
]
blog> db.persons.insertMany({ FirstName: 'Dhanushch', LastName: 'dhanu17', Age: 23, City: 'Kannur' },{FirstName : 'Malu',LastName:'aji17',Age:23,City:'Pallikunu'})
MongoInvalidArgumentError: Argument "docs" must be an array of documents
blog> db.persons.insertMany({
... FirstName:'Dhanushch',
... LastName : 'dhanu17',
... Age : 22,
... City:'Azhikode'})
MongoInvalidArgumentError: Argument "docs" must be an array of documents
blog> db.persons.insert(
... {
... FirstName:'Dhanushch',
... LastName:'dhanu17',
... Age:23,
... City:'
Uncaught:
SyntaxError: Unterminated string constant. (6:5)

  4 | LastName:'dhanu17',
  5 | Age:23,
> 6 | City:'
    |      ^
  7 |

blog> db.persons.insert( { FirstName:'Dhanushch', LastName:'dhanu17', Age:23, City:'
Uncaught:
SyntaxError: Unterminated string constant. (1:77)

> 1 | db.persons.insert( { FirstName:'Dhanushch', LastName:'dhanu17', Age:23, City:'
    |                                                                              ^
  2 |

blog>

blog>

blog>

blog> db.persons.insert( { FirstName:'Dhanushch', LastName:'dhanu17', Age:23, City:'Azhikode'})
{
  acknowledged: true,
  insertedIds: { '0': ObjectId('65caf03d11ebb50b1104e26a') }
}
blog> db.persons.find()
[
  {
    _id: ObjectId('65caebfb11ebb50b1104e269'),
    FirstName: 'Dhanush',
    LastName: 'ch',
    Age: 23,
    City: 'Kannur'
  },
  {
    _id: ObjectId('65caf03d11ebb50b1104e26a'),
    FirstName: 'Dhanushch',
    LastName: 'dhanu17',
    Age: 23,
    City: 'Azhikode'
  }
]
blog> db.persons.insert( { FirstName:'Malavika', LastName:'malu17', Age:23, City:'Pallikunnu'})
{
  acknowledged: true,
  insertedIds: { '0': ObjectId('65caf07511ebb50b1104e26b') }
}
blog> db.persons.find()
[
  {
    _id: ObjectId('65caebfb11ebb50b1104e269'),
    FirstName: 'Dhanush',
    LastName: 'ch',
    Age: 23,
    City: 'Kannur'
  },
  {
    _id: ObjectId('65caf03d11ebb50b1104e26a'),
    FirstName: 'Dhanushch',
    LastName: 'dhanu17',
    Age: 23,
    City: 'Azhikode'
  },
  {
    _id: ObjectId('65caf07511ebb50b1104e26b'),
    FirstName: 'Malavika',
    LastName: 'malu17',
    Age: 23,
    City: 'Pallikunnu'
  }
]
blog> db.person.update({City : "Palikunnu"},{$set:{City:"Tagore Street"}})
DeprecationWarning: Collection.update() is deprecated. Use updateOne, updateMany, or bulkWrite.
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}
blog> db.persons.find
[Function: find] AsyncFunction {
  returnsPromise: true,
  apiVersions: [ 1, Infinity ],
  returnType: 'Cursor',
  serverVersions: [ '0.0.0', '999.999.999' ],
  topologies: [ 'ReplSet', 'Sharded', 'LoadBalanced', 'Standalone' ],
  deprecated: false,
  platforms: [ 'Compass', 'Browser', 'CLI' ],
  isDirectShellCommand: false,
  acceptsRawInput: false,
  shellCommandCompleter: undefined,
  help: [Function (anonymous)] Help
}
blog> db.persons.find()
[
  {
    _id: ObjectId('65caebfb11ebb50b1104e269'),
    FirstName: 'Dhanush',
    LastName: 'ch',
    Age: 23,
    City: 'Kannur'
  },
  {
    _id: ObjectId('65caf03d11ebb50b1104e26a'),
    FirstName: 'Dhanushch',
    LastName: 'dhanu17',
    Age: 23,
    City: 'Azhikode'
  },
  {
    _id: ObjectId('65caf07511ebb50b1104e26b'),
    FirstName: 'Malavika',
    LastName: 'malu17',
    Age: 23,
    City: 'Pallikunnu'
  }
]
blog> db.person.update({City : "Pallikunnu"},{$set:{City:"Tagore Street"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}
blog> db.persons.find()
[
  {
    _id: ObjectId('65caebfb11ebb50b1104e269'),
    FirstName: 'Dhanush',
    LastName: 'ch',
    Age: 23,
    City: 'Kannur'
  },
  {
    _id: ObjectId('65caf03d11ebb50b1104e26a'),
    FirstName: 'Dhanushch',
    LastName: 'dhanu17',
    Age: 23,
    City: 'Azhikode'
  },
  {
    _id: ObjectId('65caf07511ebb50b1104e26b'),
    FirstName: 'Malavika',
    LastName: 'malu17',
    Age: 23,
    City: 'Pallikunnu'
  }
]
blog> db.persons.update({City : "Pallikunnu"},{$set:{City:"Tagore Street"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
blog> db.persons.find()
[
  {
    _id: ObjectId('65caebfb11ebb50b1104e269'),
    FirstName: 'Dhanush',
    LastName: 'ch',
    Age: 23,
    City: 'Kannur'
  },
  {
    _id: ObjectId('65caf03d11ebb50b1104e26a'),
    FirstName: 'Dhanushch',
    LastName: 'dhanu17',
    Age: 23,
    City: 'Azhikode'
  },
  {
    _id: ObjectId('65caf07511ebb50b1104e26b'),
    FirstName: 'Malavika',
    LastName: 'malu17',
    Age: 23,
    City: 'Tagore Street'
  }
]
blog> db.persons($unset{City:'Tagore Street'})
Uncaught:
SyntaxError: Unexpected token, expected "," (1:17)

> 1 | db.persons($unset{City:'Tagore Street'})
    |                  ^
  2 |

blog> db.persons($unset{City:"Tagore Street"})
Uncaught:
SyntaxError: Unexpected token, expected "," (1:17)

> 1 | db.persons($unset{City:"Tagore Street"})
    |                  ^
  2 |

blog> db.persons("$unset"{City:"Tagore Street"})
Uncaught:
SyntaxError: Unexpected token, expected "," (1:19)

> 1 | db.persons("$unset"{City:"Tagore Street"})
    |                    ^
  2 |

blog> db.persons($unset{City:"Tagore Street"})
Uncaught:
SyntaxError: Unexpected token, expected "," (1:17)

> 1 | db.persons($unset{City:"Tagore Street"})
    |                  ^
  2 |

blog> db.persons($unset{"City":"Tagore Street"})
Uncaught:
SyntaxError: Unexpected token, expected "," (1:17)

> 1 | db.persons($unset{"City":"Tagore Street"})
    |                  ^
  2 |

blog> db.persons($unset:{City:"Tagore Street"})
Uncaught:
SyntaxError: Unexpected token, expected "," (1:17)

> 1 | db.persons($unset:{City:"Tagore Street"})
    |                  ^
  2 |

blog> db.persons.update($unset:{City:"Tagore Street"})
Uncaught:
SyntaxError: Unexpected token, expected "," (1:24)

> 1 | db.persons.update($unset:{City:"Tagore Street"})
    |                         ^
  2 |

blog> db.persons.updateOne($unset:{City:"Tagore Street"})
Uncaught:
SyntaxError: Unexpected token, expected "," (1:27)

> 1 | db.persons.updateOne($unset:{City:"Tagore Street"})
    |                            ^
  2 |

blog> db.persons.updateMany(
...    { "City": "Tagore Street" },
...    { $unset: { "City": "" } }
... )
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
blog> db.persons.find()
[
  {
    _id: ObjectId('65caebfb11ebb50b1104e269'),
    FirstName: 'Dhanush',
    LastName: 'ch',
    Age: 23,
    City: 'Kannur'
  },
  {
    _id: ObjectId('65caf03d11ebb50b1104e26a'),
    FirstName: 'Dhanushch',
    LastName: 'dhanu17',
    Age: 23,
    City: 'Azhikode'
  },
  {
    _id: ObjectId('65caf07511ebb50b1104e26b'),
    FirstName: 'Malavika',
    LastName: 'malu17',
    Age: 23
  }
]
blog> db.persons.find({Place:{$eq :"Kannur"}})

blog> db.persons.find({Place:{$ne :"Kannur"}})
[
  {
    _id: ObjectId('65caebfb11ebb50b1104e269'),
    FirstName: 'Dhanush',
    LastName: 'ch',
    Age: 23,
    City: 'Kannur'
  },
  {
    _id: ObjectId('65caf03d11ebb50b1104e26a'),
    FirstName: 'Dhanushch',
    LastName: 'dhanu17',
    Age: 23,
    City: 'Azhikode'
  },
  {
    _id: ObjectId('65caf07511ebb50b1104e26b'),
    FirstName: 'Malavika',
    LastName: 'malu17',
    Age: 23
  }
]
blog> db.persons.find({Place:{$ne :'Kannur'}})
[
  {
    _id: ObjectId('65caebfb11ebb50b1104e269'),
    FirstName: 'Dhanush',
    LastName: 'ch',
    Age: 23,
    City: 'Kannur'
  },
  {
    _id: ObjectId('65caf03d11ebb50b1104e26a'),
    FirstName: 'Dhanushch',
    LastName: 'dhanu17',
    Age: 23,
    City: 'Azhikode'
  },
  {
    _id: ObjectId('65caf07511ebb50b1104e26b'),
    FirstName: 'Malavika',
    LastName: 'malu17',
    Age: 23
  }
]
blog> db.persons.find({City:{$ne :'Kannur'}})
[
  {
    _id: ObjectId('65caf03d11ebb50b1104e26a'),
    FirstName: 'Dhanushch',
    LastName: 'dhanu17',
    Age: 23,
    City: 'Azhikode'
  },
  {
    _id: ObjectId('65caf07511ebb50b1104e26b'),
    FirstName: 'Malavika',
    LastName: 'malu17',
    Age: 23
  }
]
blog> db.persons.insert({FirstName:"ch",LastName:"dhanu",Age:25,City:"chall"})
{
  acknowledged: true,
  insertedIds: { '0': ObjectId('65caf78a11ebb50b1104e26c') }
}
blog> db.persons.find()
[
  {
    _id: ObjectId('65caebfb11ebb50b1104e269'),
    FirstName: 'Dhanush',
    LastName: 'ch',
    Age: 23,
    City: 'Kannur'
  },
  {
    _id: ObjectId('65caf03d11ebb50b1104e26a'),
    FirstName: 'Dhanushch',
    LastName: 'dhanu17',
    Age: 23,
    City: 'Azhikode'
  },
  {
    _id: ObjectId('65caf07511ebb50b1104e26b'),
    FirstName: 'Malavika',
    LastName: 'malu17',
    Age: 23
  },
  {
    _id: ObjectId('65caf78a11ebb50b1104e26c'),
    FirstName: 'ch',
    LastName: 'dhanu',
    Age: 25,
    City: 'chall'
  }
]
blog> db.persons.insert({FirstName:"takku",LastName:"dhanu",Age:25,City:"Kannur"})
{
  acknowledged: true,
  insertedIds: { '0': ObjectId('65caf7af11ebb50b1104e26d') }
}
blog> db.persons.find({City:{$eq :'Kannur'}})
[
  {
    _id: ObjectId('65caebfb11ebb50b1104e269'),
    FirstName: 'Dhanush',
    LastName: 'ch',
    Age: 23,
    City: 'Kannur'
  },
  {
    _id: ObjectId('65caf7af11ebb50b1104e26d'),
    FirstName: 'takku',
    LastName: 'dhanu',
    Age: 25,
    City: 'Kannur'
  }
]
blog> db.persons.find({Age:{$gt :22}})
[
  {
    _id: ObjectId('65caebfb11ebb50b1104e269'),
    FirstName: 'Dhanush',
    LastName: 'ch',
    Age: 23,
    City: 'Kannur'
  },
  {
    _id: ObjectId('65caf03d11ebb50b1104e26a'),
    FirstName: 'Dhanushch',
    LastName: 'dhanu17',
    Age: 23,
    City: 'Azhikode'
  },
  {
    _id: ObjectId('65caf07511ebb50b1104e26b'),
    FirstName: 'Malavika',
    LastName: 'malu17',
    Age: 23
  },
  {
    _id: ObjectId('65caf78a11ebb50b1104e26c'),
    FirstName: 'ch',
    LastName: 'dhanu',
    Age: 25,
    City: 'chall'
  },
  {
    _id: ObjectId('65caf7af11ebb50b1104e26d'),
    FirstName: 'takku',
    LastName: 'dhanu',
    Age: 25,
    City: 'Kannur'
  }
]
blog> db.persons.find({Age:{$gte :23}})
[
  {
    _id: ObjectId('65caebfb11ebb50b1104e269'),
    FirstName: 'Dhanush',
    LastName: 'ch',
    Age: 23,
    City: 'Kannur'
  },
  {
    _id: ObjectId('65caf03d11ebb50b1104e26a'),
    FirstName: 'Dhanushch',
    LastName: 'dhanu17',
    Age: 23,
    City: 'Azhikode'
  },
  {
    _id: ObjectId('65caf07511ebb50b1104e26b'),
    FirstName: 'Malavika',
    LastName: 'malu17',
    Age: 23
  },
  {
    _id: ObjectId('65caf78a11ebb50b1104e26c'),
    FirstName: 'ch',
    LastName: 'dhanu',
    Age: 25,
    City: 'chall'
  },
  {
    _id: ObjectId('65caf7af11ebb50b1104e26d'),
    FirstName: 'takku',
    LastName: 'dhanu',
    Age: 25,
    City: 'Kannur'
  }
]
blog> db.persons.find({Age:{$lt :25}})
[
  {
    _id: ObjectId('65caebfb11ebb50b1104e269'),
    FirstName: 'Dhanush',
    LastName: 'ch',
    Age: 23,
    City: 'Kannur'
  },
  {
    _id: ObjectId('65caf03d11ebb50b1104e26a'),
    FirstName: 'Dhanushch',
    LastName: 'dhanu17',
    Age: 23,
    City: 'Azhikode'
  },
  {
    _id: ObjectId('65caf07511ebb50b1104e26b'),
    FirstName: 'Malavika',
    LastName: 'malu17',
    Age: 23
  }
]
blog> db.persons.find({Age:{$lte :23}})
[
  {
    _id: ObjectId('65caebfb11ebb50b1104e269'),
    FirstName: 'Dhanush',
    LastName: 'ch',
    Age: 23,
    City: 'Kannur'
  },
  {
    _id: ObjectId('65caf03d11ebb50b1104e26a'),
    FirstName: 'Dhanushch',
    LastName: 'dhanu17',
    Age: 23,
    City: 'Azhikode'
  },
  {
    _id: ObjectId('65caf07511ebb50b1104e26b'),
    FirstName: 'Malavika',
    LastName: 'malu17',
    Age: 23
  }
]
blog> db.persons.find({Age:{$in :23}})
MongoServerError[BadValue]: $in needs an array
blog> db.persons.find({ Age: { $in: [23] } })
[
  {
    _id: ObjectId('65caebfb11ebb50b1104e269'),
    FirstName: 'Dhanush',
    LastName: 'ch',
    Age: 23,
    City: 'Kannur'
  },
  {
    _id: ObjectId('65caf03d11ebb50b1104e26a'),
    FirstName: 'Dhanushch',
    LastName: 'dhanu17',
    Age: 23,
    City: 'Azhikode'
  },
  {
    _id: ObjectId('65caf07511ebb50b1104e26b'),
    FirstName: 'Malavika',
    LastName: 'malu17',
    Age: 23
  }
]
blog> db.persons.find({ City: { $and: 'Kannur' } })
MongoServerError[BadValue]: unknown operator: $and
blog> db.persons.find({
...   $and: [
...     { City: 'Kannur' },
...     { Age: { $gte: 25 } }
...     // Additional conditions...
...   ]
... })
[
  {
    _id: ObjectId('65caf7af11ebb50b1104e26d'),
    FirstName: 'takku',
    LastName: 'dhanu',
    Age: 25,
    City: 'Kannur'
  }
]
blog> db.persons.find({ $and: [ { City: 'Kannur' }})
Uncaught:
SyntaxError: Unexpected token, expected "," (1:44)

> 1 | db.persons.find({ $and: [ { City: 'Kannur' }})
    |                                             ^
  2 |

blog> db.persons.find({ $and: [ { City: 'Kannur' }]})
[
  {
    _id: ObjectId('65caebfb11ebb50b1104e269'),
    FirstName: 'Dhanush',
    LastName: 'ch',
    Age: 23,
    City: 'Kannur'
  },
  {
    _id: ObjectId('65caf7af11ebb50b1104e26d'),
    FirstName: 'takku',
    LastName: 'dhanu',
    Age: 25,
    City: 'Kannur'
  }
]
blog> db.persons.find({ $or: [ { City: 'Kannur' }]})
[
  {
    _id: ObjectId('65caebfb11ebb50b1104e269'),
    FirstName: 'Dhanush',
    LastName: 'ch',
    Age: 23,
    City: 'Kannur'
  },
  {
    _id: ObjectId('65caf7af11ebb50b1104e26d'),
    FirstName: 'takku',
    LastName: 'dhanu',
    Age: 25,
    City: 'Kannur'
  }
]
blog> db.persons.find({ $nor: [ { City: 'Kannur' }]})
[
  {
    _id: ObjectId('65caf03d11ebb50b1104e26a'),
    FirstName: 'Dhanushch',
    LastName: 'dhanu17',
    Age: 23,
    City: 'Azhikode'
  },
  {
    _id: ObjectId('65caf07511ebb50b1104e26b'),
    FirstName: 'Malavika',
    LastName: 'malu17',
    Age: 23
  },
  {
    _id: ObjectId('65caf78a11ebb50b1104e26c'),
    FirstName: 'ch',
    LastName: 'dhanu',
    Age: 25,
    City: 'chall'
  }
]
blog> db.persons.find({ $not: [ { City: 'Kannur' }]})
MongoServerError[BadValue]: unknown top level operator: $not. If you are trying to negate an entire expression, use $nor.
blog>
(To exit, press Ctrl+C again or Ctrl+D or type .exit)
blog> db.persons.find({ $rename: [ { City: 'Kannur1' }]})
MongoServerError[BadValue]: unknown top level operator: $rename. If you have a field name that starts with a '$' symbol, consider using $getField or $setField.
blog> db.persons.find({ City: 'Kannur'},{$rename: [ { City: 'Kannur1' }]})
MongoServerError[Location16410]: FieldPath field names may not start with '$'. Consider using $getField or $setField.
blog> db.persons.update({ City: 'Kannur'},{$rename: [ { City: 'Cannanore' }]})
MongoServerError: Modifiers operate on fields but we found type array instead. For example: {$mod: {<field>: ...}} not {$rename: [ { City: "Cannanore" } ]}
blog> db.persons.updateOne({ City: 'Kannur'},{$rename: [ { City: 'Cannanore' }]})
MongoServerError: Modifiers operate on fields but we found type array instead. For example: {$mod: {<field>: ...}} not {$rename: [ { City: "Cannanore" } ]}
blog> db.persons.updateOne({ City: 'Kannur'},{$rename: { City: 'Cannanore' }})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
blog> db.persons.find()
[
  {
    _id: ObjectId('65caebfb11ebb50b1104e269'),
    FirstName: 'Dhanush',
    LastName: 'ch',
    Age: 23,
    Cannanore: 'Kannur'
  },
  {
    _id: ObjectId('65caf03d11ebb50b1104e26a'),
    FirstName: 'Dhanushch',
    LastName: 'dhanu17',
    Age: 23,
    City: 'Azhikode'
  },
  {
    _id: ObjectId('65caf07511ebb50b1104e26b'),
    FirstName: 'Malavika',
    LastName: 'malu17',
    Age: 23
  },
  {
    _id: ObjectId('65caf78a11ebb50b1104e26c'),
    FirstName: 'ch',
    LastName: 'dhanu',
    Age: 25,
    City: 'chall'
  },
  {
    _id: ObjectId('65caf7af11ebb50b1104e26d'),
    FirstName: 'takku',
    LastName: 'dhanu',
    Age: 25,
    City: 'Kannur'
  }
]
blog> db.persons.aggregate([{$match:{age:{$gte : 22}}}])

blog> db.persons.find()
[
  {
    _id: ObjectId('65caebfb11ebb50b1104e269'),
    FirstName: 'Dhanush',
    LastName: 'ch',
    Age: 23,
    Cannanore: 'Kannur'
  },
  {
    _id: ObjectId('65caf03d11ebb50b1104e26a'),
    FirstName: 'Dhanushch',
    LastName: 'dhanu17',
    Age: 23,
    City: 'Azhikode'
  },
  {
    _id: ObjectId('65caf07511ebb50b1104e26b'),
    FirstName: 'Malavika',
    LastName: 'malu17',
    Age: 23
  },
  {
    _id: ObjectId('65caf78a11ebb50b1104e26c'),
    FirstName: 'ch',
    LastName: 'dhanu',
    Age: 25,
    City: 'chall'
  },
  {
    _id: ObjectId('65caf7af11ebb50b1104e26d'),
    FirstName: 'takku',
    LastName: 'dhanu',
    Age: 25,
    City: 'Kannur'
  }
]
blog> db.persons.aggregate([{$match:{age:{$gte : 24}}}])

blog> db.persons.find()
[
  {
    _id: ObjectId('65caebfb11ebb50b1104e269'),
    FirstName: 'Dhanush',
    LastName: 'ch',
    Age: 23,
    Cannanore: 'Kannur'
  },
  {
    _id: ObjectId('65caf03d11ebb50b1104e26a'),
    FirstName: 'Dhanushch',
    LastName: 'dhanu17',
    Age: 23,
    City: 'Azhikode'
  },
  {
    _id: ObjectId('65caf07511ebb50b1104e26b'),
    FirstName: 'Malavika',
    LastName: 'malu17',
    Age: 23
  },
  {
    _id: ObjectId('65caf78a11ebb50b1104e26c'),
    FirstName: 'ch',
    LastName: 'dhanu',
    Age: 25,
    City: 'chall'
  },
  {
    _id: ObjectId('65caf7af11ebb50b1104e26d'),
    FirstName: 'takku',
    LastName: 'dhanu',
    Age: 25,
    City: 'Kannur'
  }
]
blog> db.collection.aggregate([{$match:{age:{$gte : 24}}}])

blog> db.persons.find()
[
  {
    _id: ObjectId('65caebfb11ebb50b1104e269'),
    FirstName: 'Dhanush',
    LastName: 'ch',
    Age: 23,
    Cannanore: 'Kannur'
  },
  {
    _id: ObjectId('65caf03d11ebb50b1104e26a'),
    FirstName: 'Dhanushch',
    LastName: 'dhanu17',
    Age: 23,
    City: 'Azhikode'
  },
  {
    _id: ObjectId('65caf07511ebb50b1104e26b'),
    FirstName: 'Malavika',
    LastName: 'malu17',
    Age: 23
  },
  {
    _id: ObjectId('65caf78a11ebb50b1104e26c'),
    FirstName: 'ch',
    LastName: 'dhanu',
    Age: 25,
    City: 'chall'
  },
  {
    _id: ObjectId('65caf7af11ebb50b1104e26d'),
    FirstName: 'takku',
    LastName: 'dhanu',
    Age: 25,
    City: 'Kannur'
  }
]
blog> db.persons.aggregate([{$match:{age:{$gte : 25}}}])

blog> db.persons.aggregate([{$match:{City:'Azhikode'}}])
[
  {
    _id: ObjectId('65caf03d11ebb50b1104e26a'),
    FirstName: 'Dhanushch',
    LastName: 'dhanu17',
    Age: 23,
    City: 'Azhikode'
  }
]
blog> db.persons.aggregate([{$group:{City:'Azhikode'}}])
MongoServerError[Location40234]: The field 'City' must be an accumulator object
blog> db.persons.aggregate([
...   { $group: { _id: "$City", total: { $sum: 1 } } }
... ])
[
  { _id: null, total: 2 },
  { _id: 'Azhikode', total: 1 },
  { _id: 'chall', total: 1 },
  { _id: 'Kannur', total: 1 }
]
blog> db.persons.aggregate([ { $project: { _id: "$City", total: { $sum: 1 } } }] )
[
  { total: 1 },
  { _id: 'Azhikode', total: 1 },
  { total: 1 },
  { _id: 'chall', total: 1 },
  { _id: 'Kannur', total: 1 }
]
blog> db.persons.aggregate([ { $sort: { _id: "$City"}}] )
MongoServerError[Location15974]: Illegal key in $sort specification: _id: "$City"
blog> db.persons.aggregate([ { $sort: { age:-1}}] )
[
  {
    _id: ObjectId('65caebfb11ebb50b1104e269'),
    FirstName: 'Dhanush',
    LastName: 'ch',
    Age: 23,
    Cannanore: 'Kannur'
  },
  {
    _id: ObjectId('65caf03d11ebb50b1104e26a'),
    FirstName: 'Dhanushch',
    LastName: 'dhanu17',
    Age: 23,
    City: 'Azhikode'
  },
  {
    _id: ObjectId('65caf07511ebb50b1104e26b'),
    FirstName: 'Malavika',
    LastName: 'malu17',
    Age: 23
  },
  {
    _id: ObjectId('65caf78a11ebb50b1104e26c'),
    FirstName: 'ch',
    LastName: 'dhanu',
    Age: 25,
    City: 'chall'
  },
  {
    _id: ObjectId('65caf7af11ebb50b1104e26d'),
    FirstName: 'takku',
    LastName: 'dhanu',
    Age: 25,
    City: 'Kannur'
  }
]
blog> db.persons.aggregate([ { $sort: { age:11}}] )
MongoServerError[Location15975]: $sort key ordering must be 1 (for ascending) or -1 (for descending)
blog> db.persons.aggregate([ { $sort: { age:1}}] )
[
  {
    _id: ObjectId('65caebfb11ebb50b1104e269'),
    FirstName: 'Dhanush',
    LastName: 'ch',
    Age: 23,
    Cannanore: 'Kannur'
  },
  {
    _id: ObjectId('65caf03d11ebb50b1104e26a'),
    FirstName: 'Dhanushch',
    LastName: 'dhanu17',
    Age: 23,
    City: 'Azhikode'
  },
  {
    _id: ObjectId('65caf07511ebb50b1104e26b'),
    FirstName: 'Malavika',
    LastName: 'malu17',
    Age: 23
  },
  {
    _id: ObjectId('65caf78a11ebb50b1104e26c'),
    FirstName: 'ch',
    LastName: 'dhanu',
    Age: 25,
    City: 'chall'
  },
  {
    _id: ObjectId('65caf7af11ebb50b1104e26d'),
    FirstName: 'takku',
    LastName: 'dhanu',
    Age: 25,
    City: 'Kannur'
  }
]
blog> db.persons.aggregate([ { $sort: { Age:-1}}] )
[
  {
    _id: ObjectId('65caf78a11ebb50b1104e26c'),
    FirstName: 'ch',
    LastName: 'dhanu',
    Age: 25,
    City: 'chall'
  },
  {
    _id: ObjectId('65caf7af11ebb50b1104e26d'),
    FirstName: 'takku',
    LastName: 'dhanu',
    Age: 25,
    City: 'Kannur'
  },
  {
    _id: ObjectId('65caebfb11ebb50b1104e269'),
    FirstName: 'Dhanush',
    LastName: 'ch',
    Age: 23,
    Cannanore: 'Kannur'
  },
  {
    _id: ObjectId('65caf03d11ebb50b1104e26a'),
    FirstName: 'Dhanushch',
    LastName: 'dhanu17',
    Age: 23,
    City: 'Azhikode'
  },
  {
    _id: ObjectId('65caf07511ebb50b1104e26b'),
    FirstName: 'Malavika',
    LastName: 'malu17',
    Age: 23
  }
]
blog> db.persons.aggregate([ { $addFields: { _id: "$City"}}] )
[
  {
    FirstName: 'Dhanush',
    LastName: 'ch',
    Age: 23,
    Cannanore: 'Kannur'
  },
  {
    _id: 'Azhikode',
    FirstName: 'Dhanushch',
    LastName: 'dhanu17',
    Age: 23,
    City: 'Azhikode'
  },
  { FirstName: 'Malavika', LastName: 'malu17', Age: 23 },
  {
    _id: 'chall',
    FirstName: 'ch',
    LastName: 'dhanu',
    Age: 25,
    City: 'chall'
  },
  {
    _id: 'Kannur',
    FirstName: 'takku',
    LastName: 'dhanu',
    Age: 25,
    City: 'Kannur'
  }
]
blog> db.persons.aggregate([ { $count: { _id: "$City", total: { $sum: 1 } } }] )
MongoServerError[Location40156]: the count field must be a non-empty string
blog> db.persons.aggregate([ { $count: { _id: "$Age", total: { $sum: 1 } } }] )
MongoServerError[Location40156]: the count field must be a non-empty string
blog> db.persons.aggregate([ { $count: { _id: "$FirstName", total: { $sum: 1 } } }] )
MongoServerError[Location40156]: the count field must be a non-empty string
blog> db.persons.aggregate([ { $count: "total" }])
[ { total: 5 } ]
blog> db.persons.find()
[
  {
    _id: ObjectId('65caebfb11ebb50b1104e269'),
    FirstName: 'Dhanush',
    LastName: 'ch',
    Age: 23,
    Cannanore: 'Kannur'
  },
  {
    _id: ObjectId('65caf03d11ebb50b1104e26a'),
    FirstName: 'Dhanushch',
    LastName: 'dhanu17',
    Age: 23,
    City: 'Azhikode'
  },
  {
    _id: ObjectId('65caf07511ebb50b1104e26b'),
    FirstName: 'Malavika',
    LastName: 'malu17',
    Age: 23
  },
  {
    _id: ObjectId('65caf78a11ebb50b1104e26c'),
    FirstName: 'ch',
    LastName: 'dhanu',
    Age: 25,
    City: 'chall'
  },
  {
    _id: ObjectId('65caf7af11ebb50b1104e26d'),
    FirstName: 'takku',
    LastName: 'dhanu',
    Age: 25,
    City: 'Kannur'
  }
]
blog> db.persons.aggregate([ { $out: "total" }])

blog> db.persons.aggregate([ { $out: {City:"chall" }])
Uncaught:
SyntaxError: Unexpected token, expected "," (1:46)

> 1 | db.persons.aggregate([ { $out: {City:"chall" }])
    |                                               ^
  2 |

blog> db.persons.aggregate([ { $out: {City:"chall" }}])
MongoServerError[Location40415]: BSON field '$out.City' is an unknown field.
blog> db.persons.aggregate([ { $out: "chall" }])
