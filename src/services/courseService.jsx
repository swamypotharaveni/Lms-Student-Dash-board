import api from "./api";

export const getEnrolledCourses = async () => {
  const response = await api.get("courses/enrolled_courses/");
  return response.data;
};

export const getAllCourses =async()=>{
    const response =await api.get('courses/all_courses/');
    return response.data;
}
