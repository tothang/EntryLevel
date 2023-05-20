import * as mongoose from 'mongoose';

export const Session = new mongoose.Schema({
    name: String,
    status: String,
    id: String,
    start_date: Date,
    end_data: Date,
    program: [
        {
            type: String,
            ref: 'Program'
        }
    ],
});

