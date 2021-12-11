import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Table from '../components/table'
import Search from '../components/Search'
import axios from "axios";
import useSWR, { mutate } from "swr";
import { useState } from "react";

const URL = `http://localhost/api/subjects`
const URL2 = `http://localhost/api/regist`
const fetcher = url => axios.get(url).then(res => res.data);
export default function Home() {
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
                  return 
              }else if (item.subjectID.toLowerCase().includes(search.toLowerCase())){
                  return item.subjectID;
              }else if (item.subjectName.toLowerCase().includes(search.toLowerCase())){
                  return item.model;
              }
              
              }).map((item,index)=>{
                                  
                  return(
                      <div  className="p-2 rounded-md border-black"key={index}>
                          <br></br>
                          <button className='bg-green-400 text-green-50 rounded-lg py-2 px-3  float-right ' onClick={()=>{addSubject(item.subjectID)}}>Add</button>
                          <div><b>subjectID:</b> {item.subjectID}</div>
                          <div> <b>subjectName:</b> {item.subjectName} </div>
                          <div><b>credit:</b> {item.credit} credit</div>
                          
                          
                      </div>
                  )
              })}
                      </div>
                  </div> 
              
          )
      }
  }
  return (
    <div className='pt-10 pl-3'>
        <div className="flex justify-center ">
              <h1 className='flex text-center font-extrabold text-2xl'>Search your subject</h1><br></br><br></br>
            </div> 
          <div className="flex justify-center ">
            
                <div className="flex border-2 border-gray-200 rounded  ">
                  <input type="text" className="px-4 py-2 w-80" placeholder="Search..."onChange={(e)=>{setSearch(e.target.value)}}/>
                                
                </div>                  
                                                  
          </div>          
            <div className='justify-center'>    
              <div className="flex float-none justify-center">
                      {printSubject()}
              </div>
            </div>
            <br></br><br></br>
     <center> <div div className='bg-slate-100 rounded-lg shadow-2xl w-3/4 '>
        <header className='font-extrabold text-center text-2xl pt-5'>List Subject</header>
        
        <Table/>
      
        
      </div></center><br></br><br></br>
      
      
        
    </div>
  )
}
