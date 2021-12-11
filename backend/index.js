let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let cors = require('cors');
let app = express();
app.use(cors());

// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

var subjects = [
    {
        "subjectID": "240-101",
        "subjectName": "Intro to Computer Programming",
        "credit": 3,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 0,
        "maximum": 40
    },
    {
        "subjectID": "240-203",
        "subjectName": "Computer Engineering Software Laboratory II",
        "credit": 1,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 0,
        "maximum": 40
    },
    {
        "subjectID": "240-204",
        "subjectName": "Computer Engineering Hardware Laboratory II",
        "credit": 1,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 0,
        "maximum": 50
    },
    {
        "subjectID": "240-205",
        "subjectName": "Electric Circuits",
        "credit": 3,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 0,
        "maximum": 30
    },
    {
        "subjectID": "240-206",
        "subjectName": "Intro to Computer Networks",
        "credit": 3,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 0,
        "maximum": 30
    },
    {
        "subjectID": "240-207",
        "subjectName": "Programming and Data Structures",
        "credit": 3,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 0,
        "maximum": 60
    },
    {
        "subjectID": "240-208",
        "subjectName": "Digital Logic and Design",
        "credit": 3,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 0,
        "maximum": 50
    },
    {
        "subjectID": "240-209",
        "subjectName": "Basic Electronics",
        "credit": 3,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 0,
        "maximum": 70
    },
    {
        "subjectID": "240-210",
        "subjectName": "Programming Technique",
        "credit": 2,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 0,
        "maximum": 60
    },
    {
        "subjectID": "240-211",
        "subjectName": "Software Engineering",
        "credit": 2,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 0,
        "maximum": 50
    },
    {
        "subjectID": "240-212",
        "subjectName": "Probability and Statistic",
        "credit": 3,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 0,
        "maximum": 60
    },
    {
        "subjectID": "240-213",
        "subjectName": "Discrete Mathematics",
        "credit": 2,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 0,
        "maximum": 60
    },
    {
        "subjectID": "240-214",
        "subjectName": "Data Communication and Networking",
        "credit": 3,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 0,
        "maximum": 60
    },
    {
        "subjectID": "240-215",
        "subjectName": "Computer Engineering Mathematics",
        "credit": 3,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 0,
        "maximum": 80
    },
    {
        "subjectID": "240-301",
        "subjectName": "Advanced Computer Engineering Laboratory I",
        "credit": 1,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 0,
        "maximum": 60
    },
    {
        "subjectID": "240-302",
        "subjectName": "Advanced Computer Engineering Laboratory II",
        "credit": 1,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 0,
        "maximum": 70
    },
    {
        "subjectID": "240-303",
        "subjectName": "Ethical, Legal and Social Issues",
        "credit": 1,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 0,
        "maximum": 60
    },
    {
        "subjectID": "240-304",
        "subjectName": "Computer Operating System",
        "credit": 3,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 0,
        "maximum": 60
    },
    {
        "subjectID": "240-305",
        "subjectName": "Database Systems",
        "credit": 3,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 0,
        "maximum": 45
    },
    {
        "subjectID": "240-306",
        "subjectName": "Wireless and Mobile Networks",
        "credit": 2,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 0,
        "maximum": 60
    },
    {
        "subjectID": "240-307",
        "subjectName": "Computer Architecture and Organization",
        "credit": 3,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 0,
        "maximum": 70
    },
    {
        "subjectID": "240-308",
        "subjectName": "Computer Engineering Project Preparation",
        "credit": 2,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 0,
        "maximum": 50
    },
    {
        "subjectID": "240-309",
        "subjectName": "Microcontroller and Interfacing",
        "credit": 3,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 0,
        "maximum": 60
    },
    {
        "subjectID": "240-310",
        "subjectName": "Algorithms: Design and Analysis",
        "credit": 3,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 0,
        "maximum": 71
    },
    {
        "subjectID": "240-311",
        "subjectName": "Distributed Computing and Web Technologies",
        "credit": 3,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 0,
        "maximum": 70
    },
    {
        "subjectID": "240-312",
        "subjectName": "Computer Security",
        "credit": 3,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 51,
        "maximum": 90
    }
];


//MongoDB
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27018,localhost:27019,localhost:27020?replicaSet=db_replica"

//to check that this subject is in your database
var isValidSubject = async (subject_id) => {
    if (subject_id.startsWith("240-")) {
        await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
            (err, db) => {
                if (err) throw err;
                var dbo = db.db("registration");
                dbo.collection("subjects").findOne({ "subjectID": subject_id }, (err, subject) => {
                    if (err) throw err;
                    if (subject != null) {
                        return true;
                    } else {
                        return false;
                    }
                });
            }
        );
    } else {
        return false;
    }
}

// app.use(cors());

//initialize web 
router.route('/')
    .get((req, res) => {
        res.send("Hello!, Welcome to RegisterApp API");
    }
    )






/*---------------------------------------------- Admin ----------------------------------------------*/
//add subject
router.route('/add-subject')
    .post((req, res) => {
        MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
            (err, db) => {
                if (err) throw err;
                var dbo = db.db("course");
                dbo.collection("subjects").insertOne({
                    "subjectID": req.body.subjectID,
                    "subjectName": req.body.subjectName,
                    "credit": req.body.credit,
                    "departure": req.body.departure,
                    "faculty": req.body.faculty,
                    "registered": req.body.registered,
                    "maximum": req.body.maximum
                }, (err, subject) => {
                    dbo.collection("subjects").findOne({ "subjectID": req.body.subjectID }, (err, subject) => {
                        if (err) throw err;
                        res.json(subject);
                        db.close();
                    });
                });
            }
        );
    })

//add all
router.route('/add-all')
    .get((req, res) => {
        MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
            (err, db) => {
                if (err) throw err;
                var dbo = db.db("course");
                dbo.collection('subjects').insertMany(subjects);
                res.send(subjects);
            }
        );
    })
//delete all
router.route('/delete-all')
    .get((req, res) => {
        MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
            (err, db) => {
                if (err) throw err;
                var dbo = db.db("course");
                dbo.collection('subjects').drop();
                res.send("All Subjects are deleted.");
            }
        );
    })

//get all subjects in database
router.route('/subjects')
    .get((req, res) => {
        MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
            (err, db) => {
                if (err) throw err;
                var dbo = db.db("course");
                dbo.collection("subjects").find({}).toArray((err, subjects) => {
                    if (err) throw err;
                    res.send(subjects);
                    db.close();
                })
            }
        );
    })

//to get subject by id
var subj
router.route('/subjects/:id')
    .get((req, res) => {
        var subject_id = req.params.id;
        if (isValidSubject(subject_id)) {
            MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
                (err, db) => {
                    if (err) throw err;
                    var dbo = db.db("course");
                    dbo.collection("subjects").findOne({ "subjectID": subject_id }, (err, subject) => {
                        if (err) throw err;
                        res.json(subject);
                        subj = subject
                        db.close();
                    });
                }
            );
        } else {
            res.status(404).send("Cannot find this course.");
        }
    })

    // delete subject
    .delete((req, res) => {

        var subject_id = req.params.id;
        if (isValidSubject(subject_id)) {
            MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
                (err, db) => {
                    if (err) throw err;
                    var dbo = db.db("course");
                    dbo.collection("subjects").findOne({ "subjectID": subject_id }, (err, subject) => {
                        if (err) throw err;
                        if (subject == null) {
                            res.send("It is null")
                        }
                        else {
                            dbo.collection('subjects').deleteOne(subject);
                            res.send("Delete this subject");
                        }
                    });
                }
            );
        } else {
            res.status(404).send("Cannot find this course.");
        }
    })




/*--------------------------------- Client ---------------------------------------*/
router.route('/regist')
    // show registration subject
    .get((req, res) => {
        MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
            (err, db) => {
                if (err) throw err;
                var dbo = db.db("registration");
                dbo.collection("subjects").find({}).toArray((err, subjects) => {
                    if (err) throw err;
                    res.json(subjects);
                    db.close();
                })
            }
        );
    })

router.route('/regist/:id')
    // add registration subject
    .post((req, res) => {
        
        var subject_id = req.params.id;

        MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
            (err, db) => {
                if (err) throw err;
                var dbo = db.db("course");
                dbo.collection("subjects").findOne({ "subjectID": subject_id }, (err, subject) => {
                    if (err) throw err;
                    subj = subject
                });
            }
        );
        if (isValidSubject(subject_id)) {
            MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
                (err, db) => {
                    if (err) throw err;
                    var dbo = db.db("registration");
                    dbo.collection("subjects").findOne({ "subjectID": subject_id }, (err, subject) => {
                        if (err) throw err;
                        //console.log(subject);
                        if (subject == null) {
                            dbo.collection("subjects").insertOne(subj)
                            //console.log(subj);
                            res.json(subj)
                        }
                        else {
                            res.send("duplicate")
                        }
                    });



                })
        }
    })
    // remove subject
    .delete((req, res) => {

        var subject_id = req.params.id;
        if (isValidSubject(subject_id)) {
            MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
                (err, db) => {
                    if (err) throw err;
                    var dbo = db.db("registration");
                    dbo.collection("subjects").findOne({ "subjectID": subject_id }, (err, subject) => {
                        if (err) throw err;
                        //console.log(subject);
                        if (subject == null) {
                            res.send("It is null")
                        }
                        else {
                            dbo.collection('subjects').deleteOne(subject);
                            res.send("Delete this subject");
                        }

                    });
                }
            );
        } else {
            res.status(404).send("Cannot find this course.");
        }
    })



app.use("*", (req, res) => res.status(404).send('404 Not found'));
app.listen(80, () => console.log('server is running...'))

// var mongo = require('mongodb');

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });