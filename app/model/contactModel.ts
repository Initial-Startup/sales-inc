import { match } from "assert";
import { Schema } from "mongoose";
import mongoose from 'mongoose';

const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters long"],
        maxlength: [50, "Name must be less than 50 characters long"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Please enter a valid email address"]
    },
    message: {
        type: String,
        required: [true, "Message is required"],
    }
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);


export default Contact;