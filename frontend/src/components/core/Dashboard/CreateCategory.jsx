import { useEffect, useState } from "react";
import { createNewCategory, fetchCourseCategories } from "../../../services/operations/courseDetailsAPI";
import IconBtn from '../../common/IconBtn';
import { IoIosAdd } from "react-icons/io";
import { useSelector } from "react-redux";


// loading skeleton
const LoadingSkeleton = () => {
  return (<div className="flex  flex-col gap-6 ">
    <p className="h-7 w-1/2 rounded-xl skeleton"></p>
    <p className="h-7 w-1/2 rounded-xl skeleton"></p>
    <p className="h-7 w-1/2 rounded-xl skeleton"></p>
    <p className="h-7 w-1/2 rounded-xl skeleton"></p>
  </div>)
}


const CreateCategory = () => {

  const { token } = useSelector((state) => state.auth);
  const [subLinks, setSubLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  const [description, setDescription] = useState('');


  const fetchSublinks = async () => {
    try {
      setLoading(true)
      const res = await fetchCourseCategories();
      setSubLinks(res);
    }
    catch (error) {
      console.log("Could not fetch the category list = ", error);
    }
    setLoading(false)
  }


  useEffect(() => {
    fetchSublinks();
  }, [])

  // create new category
  const handleCreateCategory = async () => {
    await createNewCategory(newCategory, description, token)
  };



  return (
    <div className="border-[1px] border-richblack-700 rounded-2xl bg-richblack-800 p-8 px-7 sm:px-12">
      <h1 className="mb-14 text-4xl font-medium text-richblack-5 font-boogaloo text-center sm:text-left">Create Category</h1>

      <div className='flex gap-5 items-center '>
        <div className="flex flex-col w-1/2 gap-5">
          <input
            type='text'
            placeholder="Enter new category name"
            onChange={(e) => setNewCategory(e.target.value)}
            className="text-white pl-4 w-full h-10 bg-transparent border-2 border-yellow-500 focus:border-none outline-yellow-10 rounded-2xl"
          />
          <input
            type='text'
            placeholder="Enter description of category"
            onChange={(e) => setDescription(e.target.value)}
            className="text-white pl-4 w-full h-20 bg-transparent border-2 border-yellow-500 focus:border-none outline-yellow-10 rounded-2xl"
          />
        </div>

        <IconBtn
          text="Add"
          onclick={handleCreateCategory}
          disabled={!newCategory || !description}
        >
          <IoIosAdd />
        </IconBtn>
      </div>

      <div className="mt-10 flex flex-col gap-6 text-white">
        {
          loading ?
            <LoadingSkeleton />
            :

            subLinks?.map((subLink, i) => (
              <p key={i}>{subLink.name}</p>
            ))}
      </div>


    </div>
  )
}

export default CreateCategory