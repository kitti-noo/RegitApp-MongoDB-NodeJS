import axios from "axios";
import useSWR, { mutate } from "swr";
import { useState } from "react";

const URL = `http://localhost/api/subjects`
const URL2 = `http://localhost/api/regist`
const fetcher = url => axios.get(url).then(res => res.data);

const Search = () => {
    const {data} = useSWR(URL,fetcher);
    const {data2} = useSWR(URL2,fetcher);
    const [search , setSearch] = useState('');
    const [credit , setCredit] = useState(0);
    const getSubjectregist = async () =>{
        let result = await axios.get(`${URL}`);
        console.log(result);
        mutate(URL)
    }
    const addSubject = async(id)=>{
        // let get = await axios.get(`${URL}/${id}`);
        let result = await axios.post(`${URL2}/${id}`);
        mutate(URL2)
        let count_credit =0;
        count_credit += data.credit+count_credit

    }
    // const getSubjects= async()=>{
    //     let result = axios.getaxios.get(`${URL}/add-all`);
    //     mutate()
    //     // result.data
    // }
    const deleteSubject = async (id) => {
        let answer = window.confirm("Do you want to delete it?")
        if (answer === true) {
          let result = await axios.delete(`http://localhost/api/regist/${id}`)// {subjectID,subjectName,credit,departure,faculty,registered,maximum }
          count_credit -= data.credit+count_credit
        }
        
          mutate(`http://localhost/api/regist`)
    }
    const printSubject= () =>{
        if (data && data.length) {
            return(
                <div>
                   <div>
               {data.filter((item)=>{
                if (search =="") { console.log(item.credit);
                    return //(<div >{item}</div>);
                }else if (item.subjectID.toLowerCase().includes(search.toLowerCase())){
                    return item.subjectID;
                }else if (item.subjectName.toLowerCase().includes(search.toLowerCase())){
                    return item.model;
                }
                
                }).map((item,index)=>{
                    // if(item.subjectID === data2.subjectID){
                    //     return(
                    //         <div  className="p-2 rounded-md border-black"key={index}>
                    //         <br></br>
                    //         <div><b>subjectID:</b> {item.subjectID}</div>
                    //         <div> <b>subjectName:</b> {item.subjectName} </div>
                    //         <div><b>credit:</b> {item.credit} credit</div>
                    //         <div className="float-rigth">
                    //         <button className='bg-red-400 text-red-50 rounded-lg flex-shrink-0 h-10 w-90 p-2' onClick={() => deleteSubject(item._id)}>withdraw</button>
                    //         <button className='bg-blue-400 text-blue-50 rounded-lg py-2 px-4  float-right'>Info</button>
                                                       
                    //         </div>
                            
                    //     </div>
                    //     )
                    // }
                   
                    return(
                        <div  className="p-2 rounded-md border-black"key={index}>
                            <br></br>
                            <button className='bg-green-400 text-green-50 rounded-lg py-2 px-4  float-right ' onClick={()=>{addSubject(item.subjectID)}}>Add</button>
                            <div><b>subjectID:</b> {item.subjectID}</div>
                            <div> <b>subjectName:</b> {item.subjectName} </div>
                            <div><b>credit:</b> {item.credit} credit</div>
                            {/* <div className="float-rigth"> */}
                            
                            {/* <button className='bg-blue-400 text-blue-50 rounded-lg py-2 px-4  float-right'>Info</button> */}
                                                       
                            {/* </div> */}
                            
                        </div>
                    )
                })}
                        </div>
                    </div> 
                
            )
        }
    }

    return(
        <div >
                       
            <div className="flex  ">
                        <div className="flex border-2 border-gray-200 rounded  ">
                            <input type="text" className="px-4 py-2 w-80" placeholder="Search..."onChange={(e)=>{setSearch(e.target.value)}}/>
                            {/* <button className="px-4 text-white bg-gray-600 border-l " >
                                Search
                            </button> */}
                         </div>                             
            </div>           
            <div className="float-left flex">
                {printSubject()}
            </div>
             
        </div>
      
            
    )
}
export default Search;