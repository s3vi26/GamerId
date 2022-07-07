"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
const aws_sdk_1 = require("aws-sdk");
const dynamoDb = new aws_sdk_1.DynamoDB.DocumentClient();
module.exports.create = (event, context, callback) => {
    const timestamp = new Date().getTime();
    const data = JSON.parse(event.body);
    if (typeof data.email !== "string" || typeof data.phone !== "string") {
        console.error("Validation Failed");
        callback(new Error("Couldn't create the user item."));
        return;
    }
    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Item: {
            gamerId: uuid.v1(),
            email: data.email,
            phone: data.phone,
            createdAt: timestamp,
            updatedAt: timestamp,
        },
    };
    // write the user to the database
    dynamoDb.put(params, (error, result) => {
        // handle potential errors
        if (error) {
            console.error(error);
            callback(new Error("Couldn't create the user item."));
            return;
        }
        // create a response
        const response = {
            statusCode: 200,
            body: JSON.stringify(params.Item),
        };
        callback(null, response);
    });
};
