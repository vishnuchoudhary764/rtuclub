
import Link from "next/link";


export default function Events({ events }) {
  
  return (
    
      <div className="grid p-10 justify-center grid-cols-1 md:grid-cols-2 rounded-2xl lg:grid-cols-5 gap-6  overflow-hidden lg:w-250 mx-auto">
       
        {events.map((event) => (
          <div key={event.id} className="bg-white shadow-md rounded-2xl p-3 hover:shadow-lg  ">
           
            <Link href={`/evens`}
 >
                <div className=" w-full overflow-hidden ">
            
                 <h3 className=" text-center  ">{event.title}</h3>

                </div>
            
            </Link>
            
          </div>
        ))}
      </div>
    
    
  );
}
