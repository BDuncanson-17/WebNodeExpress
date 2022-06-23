'use strict';
var express = require('express');
var router = express.Router();

var getData = function () {
    var data = {
        'item1': './WebNodeExpress\public\images\France_1.jpg',
        'item2': './WebNodeExpress\public\images\France_2.jpg',
        'item3': './WebNodeExpress\public\images\France_3.jpg',
    }
    return data;
}
/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express', "data": getData() });
});

module.exports = router;
