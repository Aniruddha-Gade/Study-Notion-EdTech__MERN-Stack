import { apiConnector } from "../apiConnector"
import { adminEndPoints } from './../apis';
const { GET_ALL_STUDENTS_DATA_API, GET_ALL_INSTRUCTORS_DATA_API } = adminEndPoints


// ================ get all Students Data  ================
export async function getAllStudentsData(token) {

    let result = []
    try {
        const response = await apiConnector("GET", GET_ALL_STUDENTS_DATA_API, null, {
            Authorization: `Bearer ${token}`,
        })
        console.log("GET_ALL_STUDENTS_DATA_API RESPONSE............", response)
        result = response?.data
    } catch (error) {
        console.log("GET_ALL_STUDENTS_DATA_API ERROR............", error)
        // toast.error("Could not get all students data")
    }
    return result
}



// ================ get all Instructor Data  ================
export async function getAllInstructorDetails(token) {
    let result = []
    try {
        const response = await apiConnector("GET", GET_ALL_INSTRUCTORS_DATA_API, null, {
            Authorization: `Bearer ${token}`,
        })
        console.log("GET_ALL_INSTRUCTORS_DATA_API RESPONSE............", response)
        result = response?.data
    } catch (error) {
        console.log("GET_ALL_INSTRUCTORS_DATA_API ERROR............", error)
    }
    return result
}