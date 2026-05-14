// use jspiders

// db.createCollection('JSP')

db.JSP.insertOne({
  name: "roshan",
  branch: "sbtm",
});

db.JSP.insertMany([
  {
    name: "spoeers",
    branch: "sbi",
  },
  {
    name: "raja",
    branch: "canera",
  },
  
]);

db.qspiders.insertOne({
  name: "jspiders",
  branch: "btm",
});

// ? capped collection:
db.createCollection("user", { capped: true, max: 3, size: 10000 });

db.user.insertMany([
  {
    name: "knkn",
    branch: "bvknvtm",
  },
  {
    name: "qkdkmers",
    branch: "btdk dm",
  },
  {
    name: "spidck cdders",
    branch: "btdcmd cm",
  },
]);

db.user.insertOne({
  name: "prospcdkmckiders",
  branch: "hebdck dckbal",
});

//?read
// ? findOne() and find()
db.user.findOne({});
db.user.find({});

// ?update
// ? updateOne({condition},{updation}) and updateMany()
db.JSP.updateOne({ branch: "btm" }, { $set: { branch: "hebbal" } });

// ? delete:
// ? deleteOne() and deleteMany()

// db.JSP.deleteOne({branch:'btm'})

// ?create:
//? database:
// use dnName

//? collection:
// db.createCollection("collName") //explicit way
// db.collName.insertOne({})
// db.collName.insertMany([{},{},{},{}....])

// ? capped collection:
// db.createCollection("collName",{capped:true,max:5,size:10000})

// ? read:
// show dbs
// show collections
// db.collName.find()
// db.collName.findOne()

//? update:

// db.oldColName.renameCollection("newColName")
// db.colName.updateOne({condition},{updation})
// db.colName.updateMany({condition},{updation})

// ? delete
// db.dropDatabase()
// db.colName.drop()
// db.colName.deleteOne({})
// db.colName.deleteMany({})

db.emp.insertMany([
  {
    empno: 7369,
    ename: "smith",
    job: "clerk",
    mgr: 7902,
    hiredate: new Date("1980-12-17"),
    sal: 800,
    comm: null,
    deptno: 20,
  },
  {
    empno: 7499,
    ename: "allen",
    job: "salesman",
    mgr: 7698,
    hiredate: new Date("1981-01-20"),
    sal: 1600,
    comm: 300,
    deptno: 30,
  },
  {
    empno: 7521,
    ename: "ward",
    job: "salesman",
    mgr: 7698,
    hiredate: new Date("1981-02-22"),
    sal: 1250,
    comm: 500,
    deptno: 30,
  },
  {
    empno: 7566,
    ename: "jones",
    job: "manager",
    mgr: 7839,
    hiredate: new Date("1981-04-02"),
    sal: 2975,
    comm: null,
    deptno: 20,
  },
  {
    empno: 7654,
    ename: "martin",
    job: "salesman",
    mgr: 7698,
    hiredate: new Date("1981-09-28"),
    sal: 1250,
    comm: 1400,
    deptno: 30,
  },
  {
    empno: 7698,
    ename: "blake",
    job: "manager",
    mgr: 7839,
    hiredate: new Date("1981-05-01"),
    sal: 2850,
    comm: null,
    deptno: 30,
  },
  {
    empno: 7782,
    ename: "clark",
    job: "manager",
    mgr: 7839,
    hiredate: new Date("1981-06-09"),
    sal: 2450,
    comm: null,
    deptno: 10,
  },
  {
    empno: 7788,
    ename: "scott",
    job: "analyst",
    mgr: 7566,
    hiredate: new Date("1987-04-19"),
    sal: 3000,
    comm: null,
    deptno: 20,
  },
  {
    empno: 7839,
    ename: "king",
    job: "president",
    mgr: null,
    hiredate: new Date("1981-11-17"),
    sal: 5000,
    comm: null,
    deptno: 10,
  },
  {
    empno: 7844,
    ename: "turner",
    job: "salesman",
    mgr: 7698,
    hiredate: new Date("1981-09-08"),
    sal: 1500,
    comm: 0,
    deptno: 30,
  },
  {
    empno: 7876,
    ename: "adams",
    job: "clerk",
    mgr: 7788,
    hiredate: new Date("1987-05-23"),
    sal: 1100,
    comm: null,
    deptno: 20,
  },
  {
    empno: 7900,
    ename: "james",
    job: "clerk",
    mgr: 7698,
    hiredate: new Date("1981-12-03"),
    sal: 950,
    comm: null,
    deptno: 30,
  },
  {
    empno: 7902,
    ename: "ford",
    job: "analyst",
    mgr: 7566,
    hiredate: new Date("1981-12-03"),
    sal: 3000,
    comm: null,
    deptno: 20,
  },
  {
    empno: 7934,
    ename: "miller",
    job: "clerk",
    mgr: 7782,
    hiredate: new Date("1982-01-23"),
    sal: 1300,
    comm: null,
    deptno: 10,
  },
]);

db.dept.insertMany([
  { deptno: 10, dname: "accounting", loc: "new york" },
  { deptno: 20, dname: "research", loc: "dallas" },
  { deptno: 30, dname: "sales", loc: "chicago" },
  { deptno: 40, dname: "operation", loc: "boston" },
]);

// ! Operators:
// ?1. Query Operators:

// display employee details of salesman

{
  field: {
    $eq: "value";
  }
}
db.emp.find({ job: { $eq: "salesman" } });
db.emp.find({ job: "salesman" });

// display employee details except salesman
// { field: { $ne: "value" } }
db.emp.find({ job: { $ne: "salesman" } });

// display employee details whose salary is less than 2000
// { field: { $lt: "value" } }
db.emp.find({ sal: { $lt: 2000 } });

// display employee details whose salary is greater than 2000
db.emp.find({ sal: { $gt: 2000 } });

// display employee details whose salary is less than or equals to 2000
db.emp.find({ sal: { $lte: 2000 } });

// display employee details whose salary is greater than or equals to 2000
db.emp.find({ sal: { $gte: 2000 } });

// display employee details whose salary is 1600 or 3000 or 5000
// { field: { $in: [value1,value2,value3,......] } }
db.emp.find({ sal: { $in: [1600, 3000, 5000] } });

// { field: { $nin: [value1,value2,value3,......] } }
// display employee details whose salary are not 1600 or 3000 or 5000
db.emp.find({ sal: { $nin: [1600, 3000, 5000] } });

// ? Projection Operators:
// db.cn.find({condition},{projection})

// display ename, salary, job whose salary is 1600 or 3000 or 5000
db.emp.find({ sal: { $in: [1600, 3000, 5000] } }, { ename: 1, sal: 1, job: 1 });

// display ename, job of salesman
db.emp.find({ job: "salesman" }, { ename: 1, job: 1, _id: 0 });

// Find employees whose salary is equal to 3000 (display only name and salary).
// Find employees who are not working as clerks (display name and job).
// Find employees with salary less than 2000 (display name and salary).
// Find employees with salary less than or equal to 1500 (display name and salary).
// Find employees with salary greater than 2500 (display name and salary).
// Find employees with salary greater than or equal to 3000 (display name and salary).
// Find employees who belong to department 10 or 20 (display name and department number).
// Find employees who do not belong to department 30 (display name and department number).
// Find employees whose job is manager (display name, job, and salary).
// Find employees whose salary is not equal to 3000 (display name and salary).
// Find employees whose employee number is greater than 7800 (display name and empno).
// Find employees whose employee number is less than or equal to 7654 (display name and empno).
// Find employees whose job is either clerk or analyst (display name and job).
// Find employees whose job is not manager or president (display name and job).
// Find employees whose salary is between 1000 and 3000 (inclusive) (display name and salary).

//? collection:
// group of documents
// it exists inside database
// we can create n number of collections in one database
// it is almost similar to table in sql
// collection do not have pre-defined schema

// ? documents:
// collection of key value pair
// represented by using { }
// same key in different document can hold different datatype
// exists inside collection and can insert n number of documents
// maximum size of each document is 16mb

// ? ObjectId:
// it will be generated while inserting document
// it is also acts as primary key of documents
// "69e74f827fc633ff243682d3"---> 12 byte Hexadecimal String
// 12 byte: 3 parts
// 1. 4 bytes (69e74f82)----> Timestamps
// 2. 5 bytes (7fc633ff24)---> Random Values
// 3. 3 bytes (3682d3)----> Increment

// ? Logical Operators:
// $and:
// {$and:[{condition1},{condition2},.....]}

// $or:
// $not:
// $nor:

// ? Display employee details who are working as analyst and earning more than 1500
// db.emp.find({$and:[{job:'analyst'},{sal:{$gt:1500}}]})

// ? Display employee details who are working as analyst or earning more than 1500
// db.emp.find({$or:[{job:'analyst'},{sal:{$gt:1500}}]})

// ? Display employee details who are nor working as analyst neither earning more than 1500
// db.emp.find({$nor:[{job:'analyst'},{sal:{$lt:1500}}]})

// {field:{$not:{$Q_OP:value}}}
// ? display emp details whose salary is not less than 3000
// db.emp.find({sal:{$not:{$lt:3000}}})

// ? Element Operators:
// $exists:
// { field: { $exists: boolean }}

// display name and salary who have deptno field
db.emp.find(
  { deptno: { $exists: true } },
  { ename: 1, sal: 1, deptno: 1, _id: 0 },
);

// display name and salary who don't have manager field
db.emp.find(
  { mgr: { $exists: false } },
  { ename: 1, sal: 1, deptno: 1, _id: 0 },
);

// $type:
// {field:{$type:'datatype'}}

// display employee details where salary is stored as integer
db.emp.find({ sal: { $type: "int" } }, { sal: 1, _id: 0, ename: 1, name: 1 });

// display employee details where salary is stored as double
db.emp.find(
  { sal: { $type: "double" } },
  { sal: 1, _id: 0, ename: 1, name: 1 },
);

// ? display employee details who are joined in 1981
db.emp.find(
  { hiredate: { $gte: new Date("1981-01-01"), $lte: new Date("1981-12-31") } },
  { _id: 0, hiredate: 1, ename: 1 },
);

// Display employees whose salary > 2000 OR commission exists
// Display employees who are neither in dept 10 nor dept 20
// Display employees where commission does NOT exist AND salary < 2000
// Display employees whose job is salesman OR salary is 3000
// Display employees whose salary is NOT less than 2000
// Display employees where hiredate is of type date AND salary > 2000
// Display employees who are manager OR working in department 10
// Display employees whose salary is neither less than 1000 nor greater than 4000
// Display employees where commission exists AND salary > 1500
// Display employees whose job is clerk OR manager AND salary > 1000

// Display ename, hiredate of employees who were hired in 1982 - 1985

// 1. Display ename, salary of employees whose salary is greater than 2500

// 2. Display ename, job of employees who are salesman OR salary less than 1200

// 3. Display ename, salary, deptno of employees whose salary is in (800, 1500, 3000)

// 4. Display ename, job of employees whose job is not manager

// 5. Display ename, salary of employees whose salary is between 1000 and 2000

// 6. Display ename, deptno of employees whose department number is not in (10, 20)

// 7. Display ename, salary of employees whose salary is NOT greater than 3000

// 8. Display ename, job, deptno of employees who are clerk AND working in dept 20

// 9. Display ename, commission of employees whose commission exists

// 10. Display ename, salary of employees whose commission does not exist AND salary < 1500

// 11. Display ename, salary of employees whose salary is greater than or equal to 2000

// 12. Display ename, job of employees who are neither salesman nor clerk

// 13. Display ename, salary of employees whose salary is less than or equal to 1600 OR job is analyst

// 14. Display ename, salary of employees whose salary is not in (1000, 2000, 3000)

// 15. Display ename, hiredate of employees where hiredate is of type date

// 16. Display ename, salary, job of employees whose salary is greater than 1000 AND less than 3000 AND job is not clerk

// 17. Display ename, job, salary of employees who are manager OR analyst AND salary > 2500

// Display ename, hiredate of employees who were hired before 1982-01-01

// 18. Display ename, salary of employees whose salary is neither less than 900 nor greater than 4000

// 19. Display ename, salary, commission of employees where commission exists OR salary is greater than 2500

// 20. Display ename, job of employees whose job is not salesman AND not manager

// 21. Display ename and hiredate of employees who were hired after 1981-06-01

// ! Evaluation Operators:
//? $expr:
// {$expr:{$Q_Op:["$field1","$field2"]}}

// display employee details who are earning more commission than salary
db.emp.find({ $expr: { $lt: ["$sal", "$comm"] } });

// display employee names and salaries who are earning even salary
db.emp.find(
  { $expr: { $eq: [{ $mod: ["$sal", 2] }, 0] } },
  { ename: 1, sal: 1, _id: 0 },
);

//? $regex:
//Syntax: { field: { $regex: /pattern/ } }

// display names of employee whose names contains 's'
db.emp.find({ ename: { $regex: /.*s.*/ } }, { ename: 1, _id: 0 });
// case-insensitive
db.emp.find({ ename: { $regex: /.*s.*/i } }, { ename: 1, _id: 0 });

//  display names of employee whose names starts with 's'
db.emp.find({ ename: { $regex: /^s.*/ } }, { ename: 1, _id: 0 });

//  display names of employee whose names ends with 's'
db.emp.find({ ename: { $regex: /.*s$/ } }, { ename: 1, _id: 0 });

// display employee names whose 2nd last character in name is 'e'
db.emp.find({ ename: { $regex: /.*e.$/ } }, { ename: 1, _id: 0 });

//  display names of employee whose name length is 5
db.emp.find({ ename: { $regex: /^.....$/ } }, { ename: 1, _id: 0 });
// ? OR
db.emp.find({ ename: { $regex: /^.{5}$/ } }, { ename: 1, _id: 0 });

// display names of employee whose job contains 2 a's
db.emp.find({ ename: { $regex: /.*a.*a.*/ } }, { ename: 1, _id: 0 });

// display names of employee whose name contains 2 consecutive l's
db.emp.find({ ename: { $regex: /.*ll.*/ } }, { ename: 1, _id: 0 });

// display employee details whose name is atleast 4 characters

db.emp.find({ ename: { $regex: /.{4,}/ } }, { ename: 1, _id: 0 });

// ! Array operators:
db.emp.updateMany(
  { ename: { $in: ["smith", "allen", "ward", "martin"] } },
  {
    $set: {
      skills: ["js", "html", "css", "node", "react", "mongo", "express"],
    },
  },
);

db.emp.updateMany(
  { ename: { $in: ["smith", "allen", "ward", "martin"] } },
  { $set: { marks: [80, 40, 50, 60, 90, 55, 65, 98] } },
);

//? $all:
// { field: { $all: ["value1", "value2",......] } }

// display employee name, skills who have nodejs and js as their skills

db.emp.find(
  { skills: { $all: ["js", "node"] } },
  { ename: 1, skills: 1, _id: 0 },
);

// display employee name, skills who have react and mongo as their skills
db.emp.find(
  { skills: { $all: ["react", "mongo"] } },
  { ename: 1, skills: 1, _id: 0 },
);

//? $elemMatch:
// { field: { $elemMatch: { $Q_Op: ["value1", "value2",.......] } } }

// display employee name, skills who have atleast nodejs or js as their skills
db.emp.find(
  { skills: { $elemMatch: { $in: ["js", "node"] } } },
  { ename: 1, skills: 1, _id: 0 },
);

db.emp.find(
  { skills: { $elemMatch: { $eq: "js" } } },
  { ename: 1, skills: 1, _id: 0 },
);

// display whose marks are 60
db.emp.find(
  { marks: { $elemMatch: { $eq: 60 } } },
  { ename: 1, marks: 1, _id: 0 },
);

//? $size:
// { field: { $size: length } }

// display employees who are having exactly 4 skills
db.emp.find({ skills: { $size: 4 } }, { ename: 1, skills: 1, _id: 0 });

// display employees who are having exactly 5 skills
db.emp.find({ skills: { $size: 5 } }, { ename: 1, skills: 1, _id: 0 });

// ? Cursors:
// db.users.find()

// sort()
db.emp.find({}, { ename: 1, _id: 0, sal: 1 }).sort({ sal: 1 });

db.emp
  .find({ sal: { $gt: 2000 } }, { ename: 1, _id: 0, sal: 1 })
  .sort({ sal: -1 });

// Ex:
db.emp.find({}, { ename: 1, _id: 0, sal: 1 }).skip(2);

db.emp
  .find({}, { ename: 1, _id: 0, sal: 1 })
  .sort({ sal: -1 })
  .skip(2)
  .limit(2);

db.emp.find().count();
db.emp.find({ sal: { $gte: 2000 } }).count();

db.users.find({}, { _id: 0, name: 1, age: 1 }).forEach((el) => print(el));

db.users.find({}, { _id: 0, name: 1, age: 1 }).forEach(printjson);

// ? update Operators:
// updateOne({condition},{updation})
// updateMany({condition},{updation})

// ?1. $inc:
// add 1000 to smith's salary
db.emp.updateMany({ ename: "smith" }, { $inc: { sal: 1000 } });
db.emp.updateMany({ ename: "smith" }, { $inc: { sal: 1000, deptno: 10 } });
db.emp.updateMany({ ename: "smith" }, { $inc: { sal: -1000 } });
db.emp.updateMany({ ename: "smith" }, { $inc: { sal: null } }); //error

// ? 2 common cases for all update operators
// condition is true, field is not available
db.emp.updateMany({ ename: "smith" }, { $inc: { salary: 1000 } });

// condition is false but using {upsert:true} as 3rd argument
db.emp.updateMany(
  { ename: "smitha" },
  { $inc: { sal: 1000 } },
  { upsert: true },
);

// ?2. $max: specified value > current value
// update smith's salary to 1000
db.emp.updateMany({ ename: "smith" }, { $max: { sal: 2000 } });

// ?3. $min: specified value < current value
db.emp.updateMany({ ename: "smith" }, { $min: { sal: 1000 } });

// ?4. $mul:
db.emp.updateMany({ ename: "smith" }, { $mul: { sal: 2 } });

// condition is true, field is not available
db.emp.updateMany({ ename: "smith" }, { $mul: { salary1: 2 } }); // sets value as 0

// ?5. $set:
// update salary of smith to 5000
db.emp.updateMany({ ename: "smith" }, { $set: { sal: 5000 } });

db.emp.updateMany({ ename: "smith" }, { $set: { job: "salesman", sal: 800 } });

db.emp.updateMany({}, { $set: { gender: "male" } });

// ? 6. $unset:
db.emp.updateMany({}, { $unset: { salary1: "" } });

// ? 7. $rename:
db.emp.updateMany({ ename: "smith" }, { $rename: { salary: "earning" } });

// ?Schema Designing:

db.createCollection("user1", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["username", "password", "email", "phno"],
      properties: {
        username: {
          bsonType: "string",
          description: "username accepts only string",
        },
        password: {
          bsonType: "string",
          description: "password accepts only string",
        },
        email: {
          bsonType: "string",
          description: "email accepts only string",
        },
        phno: {
          bsonType: "number",
          description: "phno accepts only numbers",
        },
      },
    },
  },
});

db.user1.insertOne({
  username: "dingaRaja",
  password: "dingaLovesDingi",
  email: "dinga143@gmail.com",
  phno: 9876543210,
});

// ? to modify schema
db.runCommand({
  collMod: "user1",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "username",
        "password",
        "email",
        "phno",
        "skills",
        "address",
        "login",
      ],
      properties: {
        username: {
          bsonType: "string",
          description: "username accepts only string",
        },
        password: {
          bsonType: "string",
          description: "password accepts only string",
        },
        email: {
          bsonType: "string",
          description: "email accepts only string",
        },
        phno: {
          bsonType: "string",
          description: "phno accepts only string",
        },
        skills: {
          bsonType: "array",
          items: {
            bsonType: "string",
            description: "array accepts only strings",
          },
        },
        login: {
          bsonType: "bool",
          description: "login accepts only true or false",
        },
        address: {
          bsonType: "object",
          required: ["state", "pincode"],
          properties: {
            state: {
              bsonType: "string",
              description: "state accepts only string",
            },
            pincode: {
              bsonType: "number",
              description: "pincode accepts only numbers",
            },
          },
        },
      },
    },
  },
});

db.user1.insertOne({
  username: "dingaRaja",
  password: "dingaLovesDingi",
  email: "dinga143@gmail.com",
  phno: "9876543210",
  skills: ["js", "node", "mongo"],
  address: { state: "KA", pincode: 560076 },
  login: true,
});

// ? relationships:

// one to one relationship:
db.person.insertOne({ name: "abc", age: 23, phno: 867583654 });

db.person.insertOne({
  address: { state: "KA", city: "blr" },
  aadhar: 54637486535,
  Pan: "dhf45dcy5f",
});

db.person.updateOne(
  { name: "abc" },
  { $set: { prsnl_dtls: ObjectId("69f86bd09e7a5676513682d3") } },
);

// aggregation:
db.person.aggregate([
  {
    $lookup: {
      from: "person",
      localField: "prsnl_dtls",
      foreignField: "_id",
      as: "prsnl_dtls",
    },
  },
]);

// ? One to Many relationship:
db.person.insertOne({
  name: "tushar",
  age: 21,
  hobby: "Sleeping in Class",
});
// ObjectId('69f9b9631940ed936d3682d1')

db.bank.insertMany([
  {
    name: "cbi",
    ac_no: 345693648529447,
    branch: "madiwala",
  },
  {
    name: "votak",
    ac_no: 45675368927484,
    branch: "btm",
  },
  {
    name: "banara",
    ac_no: 6485583588923,
    branch: "jayadeva",
  },
]);
// ObjectId('69f9ba011940ed936d3682d2')
// ObjectId('69f9ba011940ed936d3682d3')
// ObjectId('69f9ba011940ed936d3682d4')

db.person.updateOne(
  { name: "tushar" },
  {
    $set: {
      Banks: [
        ObjectId("69f9ba011940ed936d3682d2"),
        ObjectId("69f9ba011940ed936d3682d3"),
        ObjectId("69f9ba011940ed936d3682d4"),
      ],
    },
  },
);

db.person.aggregate([
  {
    $lookup: {
      from: "bank",
      localField: "Banks",
      foreignField: "_id",
      as: "Banks",
    },
  },
]);

// ? Many to Many relationships:

db.authors.insertMany([
  {
    name: "mahi",
    age: 20,
    from: "KA",
  },
  {
    name: "syed",
    age: 21,
    from: "Blr",
  },
  {
    name: "aniket",
    age: 22,
    from: "Assam",
  },
]);

// ObjectId('69f9c2271940ed936d3682d5'), // mahi
// ObjectId('69f9c2271940ed936d3682d6'), // syed
// ObjectId('69f9c2271940ed936d3682d7') // aniket

db.books.insertMany([
  {
    name: "Node",
    price: 20000,
    duration: "20days",
  },
  {
    name: "Js",
    price: 10000,
    duration: "30days",
  },
  {
    name: "express",
    price: 25000,
    duration: "20days",
  },
  {
    name: "mongo",
    price: 15000,
    duration: "20days",
  },
]);

// ObjectId('69f9c2b81940ed936d3682d8'), //node
// ObjectId('69f9c2b81940ed936d3682d9'), // js
// ObjectId('69f9c2b81940ed936d3682da'), // express
// ObjectId('69f9c2b81940ed936d3682db') // mongo

db.authors.updateOne(
  { name: "aniket" },
  {
    $set: {
      books_wrote: [
        ObjectId("69f9c2b81940ed936d3682d9"),
        ObjectId("69f9c2b81940ed936d3682d8"),
        ObjectId("69f9c2b81940ed936d3682da"),
        ObjectId("69f9c2b81940ed936d3682db"),
      ],
    },
  },
);

db.books.updateOne(
  { name: "mongo" },
  {
    $set: {
      authors: [
        ObjectId("69f9c2271940ed936d3682d7"),
        ObjectId("69f9c2271940ed936d3682d5"),
      ],
    },
  },
);

db.authors.aggregate([
  {
    $lookup: {
      from: "books",
      localField: "books_wrote",
      foreignField: "_id",
      as: "books_wrote",
    },
  },
]);

db.books.aggregate([
  {
    $lookup: {
      from: "authors",
      localField: "authors",
      foreignField: "_id",
      as: "authors",
    },
  },
]);

// ? Aggregation:
// db.cn.aggregate([{stage1},{stage2},{stage3}])

// select ---> $project
// where ----> $match
// group by ---> $group
// order by ---> $sort
// join -------> $lookup
// subquery ---> pipeline
// having  ----> $match

db.emp.aggregate();

// ? match:
db.emp.aggregate([{ $match: { ename: "smith" } }]);
// Find employees whose salary is equal to 3000 (display only name and salary).
// Find employees who are not working as clerks (display name and job).
// Find employees with salary less than 2000 (display name and salary).
// Find employees with salary less than or equal to 1500 (display name and salary).
// Find employees with salary greater than 2500 (display name and salary).
// Find employees with salary greater than or equal to 3000 (display name and salary).
// Find employees who belong to department 10 or 20 (display name and department number).
// Find employees who do not belong to department 30 (display name and department number).
// Find employees whose job is manager (display name, job, and salary).
// Find employees whose salary is not equal to 3000 (display name and salary).
// Find employees whose employee number is greater than 7800 (display name and empno).
// Find employees whose employee number is less than or equal to 7654 (display name and empno).
// Find employees whose job is either clerk or analyst (display name and job).
// Find employees whose job is not manager or president (display name and job).

// Find employees whose salary is between 1000 and 3000 (inclusive) (display name and salary).
db.emp.aggregate([
  {
    $match: {
      sal: { $gte: 1000, $lte: 3000 },
    },
  },
  {
    $project: { _id: 0, ename: 1, sal: 1 },
  },
]);

// ? display employee details who are hired in 1982 without using new Date()

db.emp.aggregate([
  {
    $addFields: { year: { $year: "$hiredate" } },
  },
  {
    $match: { year: { $in: [1982, 1981] } },
  },
  {
    $project: {
      _id: 0,
      ename: 1,
      hiredate: 1,
      year: 1,
    },
  },
]);

// ? display employee details who are hired in december without using new Date()

db.emp.aggregate([
  {
    $addFields: { month: { $month: "$hiredate" } },
  },
  {
    $match: { month: 12 },
  },
  {
    $project: {
      _id: 0,
      ename: 1,
      hiredate: 1,
      month: 1,
    },
  },
]);

// ? display employee details who are hired on 17th day without using new Date()

db.emp.aggregate([
  {
    $addFields: { day: { $dayOfMonth: "$hiredate" } },
  },
  {
    $match: { day: 17 },
  },
  {
    $project: {
      _id: 0,
      ename: 1,
      hiredate: 1,
      day: 1,
    },
  },
]);

// ? $group:
db.emp.aggregate([
  {
    $group: {
      _id: null,
      maxSal: { $max: "$sal" },
      minSal: { $min: "$sal" },
      avgSal: { $avg: "$sal" },
      totalSal: { $sum: "$sal" },
      count: { $count: {} },
      count2: { $sum: 1 },
    },
  },
]);

// waqtd no.of employees who are working in each dept
db.emp.aggregate([
  {
    $group: {
      _id: "$deptno",
      no_of_emps: { $sum: 1 },
    },
  },
  {
    $project: {
      deptno: "$_id",
      no_of_emps: 1,
      _id: 0,
    },
  },
]);

// display total salary of salesman
db.emp.aggregate([
  {
    $match: { job: "salesman" },
  },
  {
    $group:{
      _id:null,
      totalSal:{$sum:'$sal'}
    }
  }
]);

// display avg salary based on the jobs
db.emp.aggregate([{
  $group:{
    _id:"$job",
    avgSal:{$avg:"$sal"}
  }
}])

// display no.of managers in each dept
db.emp.aggregate([
  {
    $match:{job:'manager'}
  },
  {
    $group:{
      _id:'$deptno',
      count:{$sum:1}
    }
  }
])

// ?having:

// db.cn.aggregate([
//   {
//   $group:{
//     _id:'grouping_key'
//   }
// },
// {
//   $match:{}
// }
// ])


// display number of employees of each dept who have atleast 4 members 

db.emp.aggregate([
  {
    $group:{
      _id:'$deptno',
      count:{$sum:1}
    }
  },
  {
    $match:{
      count:{$gte:4}
    }
  }
])

// display ename, salary who are earning more than their avg salary of dept
db.emp.aggregate([
  {
    $group:{
      _id:'$deptno',
      avgSal:{$avg:'$sal'},
      emp:{$push:'$$ROOT'}
    }
  },
  {
    $unwind:'$emp'
  },
  {
    $match:{$expr:{$gt:['$emp.sal',"$avgSal"]}}
  },
  {
    $project:{
      ename:'$emp.ename',
      sal:'$emp.sal',
      _id:0,
      deptno:"$_id",
      avgSal:1
    }
  }
])