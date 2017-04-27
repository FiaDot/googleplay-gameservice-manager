// notice

//var s3 = new AWS.S3();
/*
var AWS = require("aws-sdk");

var dynamoDB = new AWS.DynamoDB();


var docClient = new AWS.DynamoDB.DocumentClient();


exports.handler = (event, context, callback) => {
    console.log('event:', JSON.stringify(event));

    var appId = event.appId || 'any'; 
    // var bundleVer = event.bundleVer || '0';
    // var appVer = event.ver | '1.0';

    var desc = '';


    context.succeed(desc);
    //callback(null, 'Hello from Lambda ' + name);
};
*/

var AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: "AKIAIWQUA6MFQEJDQ23A",
    secretAccessKey: "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",
    region: "ap-northeast-2",
    endpoint: "http://localhost:8000"
});


var db = new AWS.DynamoDB();


exports.handler = (event, context, callback) => {
    console.log('event:', JSON.stringify(event));

    // var appId = 'mmc';// event.appId || 'mmc'; 
    // var bundleVer = event.bundleVer || '0';
    // var appVer = event.ver | '1.0';

    var desc = 'test';

    var params = {
        TableName: 'Notice',
        Key : {
            "appId" : 
            {
                "S":'mmc'
            }
        },
        AttributesToGet: [
            "regDate"
        ]
        
    };
    
    db.getItem(params, function(err, data) {
        if ( err ) {
            console.log(err, err.stack);
            //callback('err:' + err);
        }
        else {
            console.log(data);
            //callback(data);
        }
        
        // return next();
    });


    callback(null, desc);
    
    //callback(null, appId + '=' + desc);
    //context.succeed(desc);
    //callback(null, 'Hello from Lambda ' + name);
};


