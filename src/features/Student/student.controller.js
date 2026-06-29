import Student from "./student.model.js";

const createStudentController = async (data) => {
  try {
    

    let result = await Student.create(data)
    
  } catch (error) {
    return error
  }

}

const getAllStudents = async () => {
  try {
    const result = await Student.find({});
    

    return result;
  } catch (error) {
    throw error;
  }
};


const getSingleStudent = async ({id}) => {
  try {
    const result = await Student.findOne({ _id:id });

    
    return result;
  } catch (error) {
    throw error;
  }
};

export {
  createStudentController,
  getAllStudents,
  getSingleStudent
}