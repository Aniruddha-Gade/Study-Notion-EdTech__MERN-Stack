import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { getAllStudentsData } from '../../../services/operations/adminApi'
import { Table, Th, Thead, Tr, Td, Tbody } from 'react-super-responsive-table';
import IconBtn from '../../common/IconBtn';

import { VscAdd } from 'react-icons/vsc';
import user_logo from "../../../assets/Images/user.png";


// loading skeleton
const LoadingSkeleton = () => {
    return (<div className="flex p-5 flex-col gap-6 border-b border-2 border-b-richblack-500">
        <div className="flex flex-col sm:flex-row gap-5 items-center mt-7">
            <p className='h-[150px] w-[150px] rounded-full skeleton'></p>
            <div className="flex flex-col gap-2 ">
                <p className='h-4 w-[160px] rounded-xl skeleton'></p>
                <p className='h-4 w-[270px] rounded-xl skeleton'></p>
                <p className='h-4 w-[100px] rounded-xl skeleton'></p>
            </div>
        </div>
        <div className='flex gap-5'>
            <p className="h-7 w-full sm:w-1/2 rounded-xl skeleton"></p>
            <p className="h-7 w-full sm:w-1/2 rounded-xl skeleton"></p>
            <p className="h-7 w-full sm:w-1/2 rounded-xl skeleton"></p>
        </div>
    </div>)
}

const AllStudents = () => {

    const { token } = useSelector(state => state.auth)
    const [allStudents, setAllStudents] = useState([])
    const [studentsCount, setStudentsCount] = useState();
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    // fetch all Students Details
    useEffect(() => {
        const fetchAllStudents = async () => {
            setLoading(true)
            const { allStudentsDetails, studentsCount } = await getAllStudentsData(token)
            setAllStudents(allStudentsDetails)
            setStudentsCount(studentsCount);
            setLoading(false)
        }

        fetchAllStudents()
    }, [token])



    return (
        <div className=''>
            <div className="mb-14 flex items-center justify-between">
                <h1 className="text-4xl font-medium text-richblack-5 font-boogaloo text-center sm:text-left">All Students Details</h1>

                <IconBtn text="Add Students" onclick={() => navigate("")}>
                    <VscAdd />
                </IconBtn>
            </div>

            <Table className="rounded-xl border-2 border-richblack-500 ">
                <Thead>
                    <Tr className="flex gap-x-10 rounded-t-md border-b border-2 border-b-richblack-500 px-6 py-2">
                        <Th className="flex-1 text-left text-sm font-medium uppercase text-richblack-100">
                            Students : {studentsCount}
                        </Th>

                        <Th className="mr-[10%]  text-center ml-4 text-sm font-medium uppercase text-richblack-100 ">
                            ACTIVE
                        </Th>
                        <Th className="mr-[7%] text-sm font-medium uppercase text-richblack-100">
                            APPROVED
                        </Th>
                    </Tr>
                </Thead>

                <Tbody>
                    {
                        loading ? <>
                            <LoadingSkeleton />
                            <LoadingSkeleton />
                            <LoadingSkeleton />
                        </>
                            // if No Data Available
                            :
                            !allStudents ? <div className='text-5xl py-5 bg-yellow-800 text-white text-center'>No Data Available</div>
                                :
                                allStudents.map((temp) =>
                                (<div
                                    key={temp._id}
                                    className='border-x border-2 border-richblack-500 '
                                >
                                    <Tr className="flex gap-x-10 px-6 py-8">
                                        <Td className="flex flex-1 gap-x-2">
                                            <img
                                                src={temp.image != "/" ? temp.image : user_logo}
                                                alt="student"
                                                className="h-[150px] w-[150px] rounded-full "
                                            />
                                            <div className="flex flex-col justify-between">
                                                <p className="text-lg font-semibold text-richblack-5">
                                                    <div className='text-sm font-normal'>
                                                        <p className='text-base font-bold'>{temp.firstName + " " + temp.lastName}</p>
                                                        <p>{temp.email}</p>

                                                        <p>
                                                            gender:{" "}
                                                            {temp.additionalDetails.gender
                                                                ? temp.additionalDetails.gender
                                                                : "Not define"}
                                                        </p>
                                                        <p>
                                                            Mobile No:{" "}
                                                            {temp.additionalDetails.contactNumber
                                                                ? temp.additionalDetails.contactNumber
                                                                : "No Data"}
                                                        </p>
                                                        <p>
                                                            DOB:{" "}
                                                            {temp.additionalDetails.dateOfBirth
                                                                ? temp.additionalDetails.dateOfBirth
                                                                : "No Data"}
                                                        </p>
                                                    </div>
                                                </p>
                                            </div>
                                        </Td>
                                        <Td className="mr-[11.5%] text-sm font-medium text-richblack-100">
                                            {temp.active ? "Active" : "Inactive"}
                                        </Td>
                                        <Td className="mr-[8%] text-sm font-medium text-richblack-100">
                                            {temp.approved ? "Approved" : "Not Approved"}
                                        </Td>
                                    </Tr>


                                    {temp && temp.courses && temp.courses.length ? (
                                        <Tr className="flex gap-x-10 px-6 pb-5">
                                            <p className="text-yellow-50 ">All Enrolled Courses</p>
                                            <div className='grid grid-cols-5 gap-y-5'>
                                                {temp.courses.map((course) => (
                                                    <div className="text-white text-sm" key={course._id}>
                                                        <p>{course.courseName}</p>
                                                        <p className="text-sm font-normal">Price: ₹{course.price}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </Tr>
                                    ) : (
                                        <div className="px-6 text-white mb-4">Not Purchased any course</div>
                                    )}

                                </div>
                                )
                                )}
                </Tbody>
            </Table>
        </div>

        // <div className=''>
        //     <div className="mb-14 flex items-center justify-between">
        //         <h1 className="text-3xl font-medium text-richblack-5">
        //             All Student Details
        //         </h1>
        //         <IconBtn text="Add Students" onclick={() => navigate("")}>
        //             <VscAdd />
        //         </IconBtn>
        //     </div>

        //     <table className="rounded-xl border-2 border-richblack-500 ">
        //         <thead>
        //             <tr className="flex gap-x-10 rounded-t-md border-b border-2 border-b-richblack-500 px-6 py-2">
        //                 <th className="flex-1 text-left text-sm font-medium uppercase text-richblack-100">
        //                     Students : {studentsCount}
        //                 </th>

        //                 <th className="mr-[10%]  text-center ml-4 text-sm font-medium uppercase text-richblack-100 ">
        //                     ACTIVE
        //                 </th>
        //                 <th className="mr-[7%] text-sm font-medium uppercase text-richblack-100">
        //                     APPROVED
        //                 </th>
        //             </tr>
        //         </thead>

        //         <tbody>
        //             {
        //                 loading ? <>
        //                     <LoadingSkeleton />
        //                     <LoadingSkeleton />
        //                     <LoadingSkeleton />
        //                 </>
        //                     :

        //                     allStudents.map((temp) =>
        //                     (<div
        //                         key={temp._id}
        //                         className='border-x border-2 border-richblack-500 '
        //                     >
        //                         <tr className="flex gap-x-10 px-6 py-8">
        //                             <td className="flex flex-1 gap-x-2">
        //                                 <img
        //                                     src={temp.image != "/" ? temp.image : user_logo}
        //                                     alt="student"
        //                                     className="h-[150px] w-[150px] rounded-full "
        //                                 />
        //                                 <div className="flex flex-col justify-between">
        //                                     <p className="text-lg font-semibold text-richblack-5">
        //                                         <div className='text-sm font-normal'>
        //                                             <p className='text-base font-bold'>{temp.firstName + " " + temp.lastName}</p>
        //                                             <p>{temp.email}</p>

        //                                             <p>
        //                                                 gender:{" "}
        //                                                 {temp.additionalDetails.gender
        //                                                     ? temp.additionalDetails.gender
        //                                                     : "Not define"}
        //                                             </p>
        //                                             <p>
        //                                                 Mobile No:{" "}
        //                                                 {temp.additionalDetails.contactNumber
        //                                                     ? temp.additionalDetails.contactNumber
        //                                                     : "No Data"}
        //                                             </p>
        //                                             <p>
        //                                                 DOB:{" "}
        //                                                 {temp.additionalDetails.dateOfBirth
        //                                                     ? temp.additionalDetails.dateOfBirth
        //                                                     : "No Data"}
        //                                             </p>
        //                                         </div>
        //                                     </p>
        //                                 </div>
        //                             </td>
        //                             <td className="mr-[11.5%] text-sm font-medium text-richblack-100">
        //                                 {temp.active ? "Active" : "Inactive"}
        //                             </td>
        //                             <td className="mr-[8%] text-sm font-medium text-richblack-100">
        //                                 {temp.approved ? "Approved" : "Not Approved"}
        //                             </td>
        //                         </tr>


        //                         {temp && temp.courses && temp.courses.length ?
        //                             <tr className="flex gap-x-10 px-6 pb-5">
        //                                 <p className="text-yellow-50 ">All Enrolled Courses</p>
        //                                 <div className='grid grid-cols-5 gap-y-5'>
        //                                     {temp.courses.map((course) => (
        //                                         <div className="text-white text-sm" key={course._id}>
        //                                             <p>{course.courseName}</p>
        //                                             <p className="text-sm font-normal">Price: ₹{course.price}</p>
        //                                         </div>
        //                                     ))}
        //                                 </div>
        //                             </tr>
        //                             :
        //                             <div className="px-6 text-white mb-4">Not Purchased any course</div>
        //                         }

        //                     </div>
        //                     ))}
        //         </tbody>
        //     </table>
        // </div>
    );
}

export default AllStudents