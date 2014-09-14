define(['./Base'], function (Base) {

    var left = {
        "firstName": "John",
        "lastName": "Smith",
        "isAlive": true,
        "age": 25,
        "height_cm": 167.6,
        "address": {
            "streetAddress": "21 2nd Street",
            "city": "New York",
            "state": "NY",
            "postalCode": "10021-3100"
        },
        "phoneNumbers": [
        ],
        "children": [],
        "spouse": null
    };

    var right = {
        "firstName": "John",
        "lastName": "Smith",
        "isAlive": true,
        "age": 25,
        "height_cm": 167.6,
        "address": {
            "streetAddress": "21 2nd Street",
            "city": "New York",
            "state": "NY",
            "zipCode": "10021-3100"
        },
        "phoneNumbers": [],
        "parents": [],
        "children": [],
        "middleName": "L"
    };

    var pojo = {
        "title": "Global Person",
        "owner": "jason",
        "left": left,
        "right": right,
        "delta": {},
        "version": "1.2.10",
        "modified": new Date()
    };
    var m1 = new Base(pojo);
    return m1;
});
