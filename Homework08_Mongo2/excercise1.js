1- db.restaurant.find().pretty();
2- db.restaurant.find({}, {'restaurant_id':true, 'name':true, 'district':true,'cuisine':true}).pretty();
3- db.restaurant.find({}, {'restaurant_id':true, '_id': false, 'name':true, 'district':true,'cuisine':true}).pretty();
4- db.restaurant.find({}, {'restaurant_id':true, '_id': false, 'name':true, 'district':true,'address.zipcode':true}).pretty();
5- db.restaurant.find({'district':'Bronx'}).pretty();
6- db.restaurant.find({'district':'Bronx'}).limit(5).pretty();
7- db.restaurant.find({'district':'Bronx'}).skip(5).limit(5).pretty();
8- db.restaurant.find({'address.coord.0' : {$lt: -95.754168} }).pretty();
9-  db.restaurant.find({'cuisine' : {$ne: 'American'}, 'grades.score': {$gt: 70}, 'address.coord.0' : {$lt: -65.754168} }).pretty();
10. db.restaurant.find({name: {$regex:/^Wil/}},{'id': true, name:true, district: true,cuisine:true }).pretty();
11. db.restaurant.find({name: {$regex:'ces$'}},{'id': true, name:true, district: true,cuisine:true }).pretty();
12. db.restaurant.find({name: {$regex:'Reg'}},{'id': true, name:true, district: true,cuisine:true }).pretty();
13. db.restaurant.find({'cuisine': {$in: ['American ', 'Chinese']}}).pretty()
14. db.restaurant.find({'district' : {$in: ['Staten Island', 'Queens','Bronx', 'Brooklyn']}},{'restaurant_id': true, name:true, district: true, cuisine:true }).pretty();
15. db.restaurant.find({'district' : {$nin: ['Staten Island', 'Queens','Bronx', 'Brooklyn']}},{'restaurant_id': true, name:true, district: true, cuisine:true }).pretty();
16. db.restaurant.find({'grades.score':{$lte: 10}},{}).pretty();
17. db.restaurant.find({'address.coord.1':{$gt : 42, $lt : 52}},{'_id':false,'restaurant_id': true, name:true, address: true }).pretty();
18. db.restaurant.find({},{}).sort({'name':-1}).pretty(); //ascending
19. db.restaurant.find({},{}).sort('name',1).pretty(); //descending
20. db.restaurant.find({},{}).sort({'name':1, 'cuisine':-1}).pretty();
21. db.restaurant.find({'address.street': {$exists: false}},{}).count()>0;
22. db.restaurant.find({'address.coord': {$type: 'number'}},{}).pretty();
23.  db.restaurant.find({'name': {$regex: /^Mad/}},{'_id':false, name: true, district: true, 'address.coord':true, 'cuisine': true }).pretty();