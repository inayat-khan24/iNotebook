import mongoose  from "mongoose";


const NotesSchema = new Schema({
title : {
    type:String,
    required:true
},
description: {
    type:String,
    required:true,
   
},
tag: {
    type:String,
    default:"General"
}
},{
    timestamps: true
})


export const notesModel = mongoose.model('notes',NotesSchema)