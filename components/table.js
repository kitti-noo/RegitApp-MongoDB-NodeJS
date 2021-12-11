import axios from "axios";
import useSWR, { mutate } from "swr";
import { useState } from "react";
import fetch from "isomorphic-unfetch"
// import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify';


 const URL = `http://localhost/api/regist`
 const fetcher = url => axios.get(url).then(res => res.data);

 export default function Table () {
   const {data} = useSWR(URL,fetcher);
   const [subjects , setSubjects] = useState({})
   const [subject, setSubject] = useState({})
   const [subid , setId] = useState('')
   const [subjectname, setSubjectname] = useState('')
   const [credit, setCredit ] = useState(0);
   
   if(!data){
      console.log(data);
      return <div ><h1>Loading...</h1></div>
   }
   const getSubjects = async() =>{
     let result = await axios.get(`${URL}`);
     mutate(URL)
   }
   const deleteSubject = async (id) => {
    let answer = window.confirm("Do you want to delete it?")
    if (answer === true) {
      let result = await axios.delete(`${URL}/${id}`)//
      
    }
    
      mutate(URL)
   }
      
   
    
   const printSubjects = (subject) =>{
     console.log(subject);
     if(subject && subject.length){
        return(subject.map((item,index)=>(
            <table key={index}   className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Subject-ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Subject
                      </th>
                      <th
                        scope="col"
                        className="px-8 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider "
                      >
                        <a className="pl-10">Credit</a>
                      </th>
                      
                    </tr>
              </thead>
              <tbody>
              <tr >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                            {item.subjectID}
                            </div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-20">
                            {item.subjectName}
                            </div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 pl-10">
                            <a className="pl-5">{item.credit}</a>
                            </div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap ">
                        <button className='bg-red-400 text-red-50 rounded-lg flex-shrink-0 h-10 w-90 p-2' onClick={() => deleteSubject(item.subjectID)}>withdraw</button>
                    </td>
                </tr>
              </tbody>
            </table>
          )
        ))
     }
   }
   return(
    <div className="flex flex-col p-10">
    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">

        {printSubjects(data)}

         </div>
           </div>
         </div>
      </div>
   )

}