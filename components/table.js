 const Table = () => {
     return(
        <div className="flex flex-col p-10">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Subject
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Credit
                    </th>
                    
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                <tr >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                            Internet
                            </div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                            3
                            </div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap ">
                        <button className='bg-red-400 text-red-50 rounded-lg flex-shrink-0 h-10 w-10' onClick={()=>{alert("Are you Delete?")}}>ลบ</button>
                    </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
     )
 }

 export default Table;