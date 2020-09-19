const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String },
    authors: { type: String },
    description: { type: String },
    image: { data: Buffer, contentType: String },
    link: { type: String },
});

const Documents = mongoose.model("Documents", bookSchema);

module.exports = Documents;
