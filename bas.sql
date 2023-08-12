CREATE DATABASE node;
use node;


CREATE TABLE users(
    id int NOT NULL AUTO_INCREMENT,
    uid varchar(30) NOT NULL,
    name varchar(30) ,
    psword varchar(30) NOT NULL,
    age varchar(30) ,
    gen varchar(30) ,
    country varchar(30) ,
    email varchar(30) ,
    in_date datetime DEFAULT current_timestamp,

    PRIMARY KEY (id)
);


INSERT INTO users(uid,name,psword,age,gen,country,email)
    values("lls","steve","123",42,"여","uzbekistan","lsdf@google.co.kr"),
    ("asd","alice","123",33,"여","USA","lvvcdf@google.co.kr"),
    ("ees","billy","1234",67,"남","korea","lsaaaf@google.co.kr"),
    ("abv","mike","1w3",19,"여","japan","lsasdsdf@google.co.kr"),
    ("ewq","andy","12e",25,"남","china","nssf@google.co.kr");




#mysql -u root -p -h localhost

use login_lecture;
desc users;
select * from users;
