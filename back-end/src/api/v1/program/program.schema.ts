import * as mongoose from 'mongoose';

export const ProgramSchema = new mongoose.Schema({
    display_title: String,
    thumbnail_img_url: String,
    short_title: String,
});

