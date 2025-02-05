const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    branch: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
