import * as mongoose from 'mongoose';

export const Session = new mongoose.Schema({
    name: String,
    status: String,
    id: String,
    program: [{ type: String, ref: 'Program' }],
});

