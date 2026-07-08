import Student from "./student.model.js";
import { createStudentSchema,updateStudentSchema } from "./student.validation.js";
import { createValidationError, createNotFoundError, createInternalServerError } from "../../shared/errors/GraphQLErrors.js";

const createStudentController = async (data) => {
  try {

    const result = createStudentSchema.safeParse(data);
    if (!result.success) {
      return createValidationError(
        result.error.issues.map((err) => err.message).join(", ")
      );
    }

    const student = await Student.create(result.data);

    return student;

  } catch (error) {
    return createInternalServerError("An unexpected error occurred while creating the student.");
  }

}

const getAllStudentsController = async () => {
  try {
    const result = await Student.find({});


    return result;
  } catch (error) {
    throw error;
  }
};


const getSingleStudentController = async ({ id }) => {
  try {
    const result = await Student.findOne({ _id: id });


    if (!result) {
      return createNotFoundError("Student not found");
    }

    return result;
  } catch (error) {
    return createInternalServerError("An unexpected error occurred while fetching the student.");
  }
};

const searchStudentController = async ({ name }) => {
  try {
    const result = await Student.find({
      name: { $regex: name, $options: "i" }
    });


    return result;
  } catch (error) {
    throw error;
  }
};

const studentsByDepartmentController = async ({ department }) => {
  try {
    const result = await Student.find({
      department: {
        $regex: department,
        $options: "i"
      }
    });

    return result;
  } catch (error) {
    throw error;
  }
};

const topStudentsController = async () => {
  try {
    const result = await Student.find({
      cgpa: { $gt: 8 }
    });

    return result;
  } catch (error) {
    throw error;
  }
};


const updateStudentController = async ({ id, input }) => {
  try {
    const result = updateStudentSchema.safeParse(input);
    

    if (!result.success) {
      return createValidationError(
        result.error.issues.map((err) => err.message).join(", ")
      );
    }

    const student = await Student.findByIdAndUpdate(
      id,
      {
        $set: result.data,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!student) {
      return createNotFoundError("Student not found");
    }

    return student;
  } catch (error) {
    return createInternalServerError("An unexpected error occurred while updating the student.");
  }
};


const deleteStudentController = async ({ id }) => {
  
  try {
    const student = await Student.findByIdAndDelete(id);

    if (!student) {
      return createNotFoundError("Student not found");
    }

    return student; // Returns the deleted document
  } catch (error) {
    return createInternalServerError("An unexpected error occurred while deleting the student.");
  }
};


export {
  createStudentController,
  getAllStudentsController,
  getSingleStudentController,
  searchStudentController,
  studentsByDepartmentController,
  topStudentsController,
  updateStudentController,
  deleteStudentController
}