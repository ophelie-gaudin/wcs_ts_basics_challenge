"use strict";
//== BASICS ==//
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * (1) x is a string, b/c we’ve initialized it
 */
let x = "hello world";
/**
 * (2) reassignment is fine
 */
x = "hello mars";
/**
 * (3) but if we try to change type
 */
// x = 42;
/**
 * (4) let's look at const. The type is literally 'hello world'
 */
const y = "hello world";
let contactInfo = Math.random() > 0.5
    ? {
        // we can assign it to a HasPhoneNumber
        name: "Mike",
        phone: 3215551212,
    }
    : {
        // or a HasEmail
        name: "Mike",
        email: "mike@example.com",
    };
contactInfo.name; // NOTE: we can only access the .name property  (the stuff HasPhoneNumber and HasEmail have in common)
/**
 * (15) Intersection types
 */
let otherContactInfo = {
    // we _must_ initialize it to a shape that's asssignable to HasEmail _and_ HasPhoneNumber
    name: "Mike",
    email: "mike@example.com",
    phone: 3215551212,
};
otherContactInfo.name; // NOTE: we can access anything on _either_ type
otherContactInfo.email;
otherContactInfo.phone;
exports.default = {};
