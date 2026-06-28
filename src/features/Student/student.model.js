import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    age: {
      type: Number,
      min: 1,
    },
    course:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    cgpa:{
        type:Number,
        required:true
    },


  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);

export default Student;