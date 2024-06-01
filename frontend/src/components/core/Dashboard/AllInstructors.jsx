import { useEffect, useState } from "react";
import { VscAdd } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";

import { getAllInstructorDetails } from "../../../services/operations/adminApi";

import IconBtn from "../../common/IconBtn";




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


function AllInstructors() {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [allInstructorDetails, setAllInstructorDetails] = useState([]);
  const [instructorsCount, setInstructorsCount] = useState();
  const [loading, setLoading] = useState(false)



  useEffect(() => {
    const fetchInstructorsData = async () => {
      setLoading(true)
      const { allInstructorsDetails, instructorsCount } = await getAllInstructorDetails(token);
      if (allInstructorsDetails) {
        setAllInstructorDetails(allInstructorsDetails);
        setInstructorsCount(instructorsCount)
      }
      setLoading(false)
    };

    fetchInstructorsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="mb-14 flex items-center justify-between text-white">
        <h1 className="text-4xl font-medium text-richblack-5 font-boogaloo text-center sm:text-left">All Instructors Details</h1>

        <IconBtn text="Add Instructor" onclick={() => navigate("")}>
          <VscAdd />
        </IconBtn>
      </div>

      <Table className="rounded-xl border-2 border-richblack-500 ">
        <Thead>
          <Tr className="flex gap-x-10 rounded-t-md border-b border-b-richblack-500 px-6 py-2">
            <Th className="flex-1 text-left text-sm font-medium uppercase text-richblack-100">
              Instructors : {instructorsCount}
            </Th>

            <Th className=" ml-4 text-sm font-medium uppercase text-richblack-100">
              Status
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
              !allInstructorDetails ? <div className='text-5xl py-5 bg-yellow-800 text-white text-center'>No Data Available</div>
                :
                allInstructorDetails?.map((instructor) => (
                  <div
                    key={instructor._id}
                    className='border-x border-2 border-richblack-500 '
                  >
                    <Tr className="flex gap-x-10 px-6 py-8">
                      <Td className="flex flex-1 gap-x-2">
                        <img
                          src={instructor.image}
                          alt="student"
                          className="h-[150px] w-[150px] rounded-full "
                        />
                        <div className="flex flex-col justify-between">
                          <p className="text-lg font-semibold text-richblack-5">
                            <div className='text-sm font-normal'>
                              <p className='text-base font-bold capitalize'>{instructor.firstName + " " + instructor.lastName}</p>
                              <p>{instructor.email}</p>

                              <p>
                                Gender:{" "}
                                {instructor.additionalDetails.gender
                                  ? instructor.additionalDetails.gender
                                  : "Not define"}
                              </p>
                              <p>
                                Mobile No:{" "}
                                {instructor.additionalDetails.contactNumber
                                  ? instructor.additionalDetails.contactNumber
                                  : "No Data"}
                              </p>
                              <p>
                                DOB:{" "}
                                {instructor.additionalDetails.dateOfBirth
                                  ? instructor.additionalDetails.dateOfBirth
                                  : "No Data"}
                              </p>
                            </div>
                          </p>
                        </div>
                      </Td>
                      <Td className="mr-[11.5%] text-sm font-medium text-richblack-100">
                        {instructor.active ? "Active" : "Inactive"}
                      </Td>
                      <Td className="mr-[8%] text-sm font-medium text-richblack-100">
                        {instructor.approved ? "Approved" : "Not Approved"}
                      </Td>
                    </Tr>


                    {instructor.courses.length ? (
                      <Tr className="flex gap-x-10 px-6 pb-5">
                        <p className="text-yellow-50 ">Built Courses</p>
                        <div className='grid grid-cols-5 gap-y-5'>
                          {instructor.courses.map((course) => (
                            <div className="text-white text-sm" key={course._id}>
                              <p>{course.courseName}</p>
                              <p className="text-sm font-normal">Price: ₹{course.price}</p>
                            </div>
                          ))}
                        </div>
                      </Tr>)
                      :
                      <div className="px-6 text-white mb-4">Not Purchased any course</div>
                    }
                  </div>

                ))}
        </Tbody>
      </Table>
    </div>
  );
}

export default AllInstructors;