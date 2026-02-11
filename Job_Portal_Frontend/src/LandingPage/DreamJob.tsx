import { Avatar, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const DreamJob =()=>{
return(
    <div className="flex items-center px-16">
        <div className="flex flex-col w-[45%]">
            <div className="text-6xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400">Find your  <span    >dream</span>  <span>job</span>with us</div>
            <div className="text-lg text-mine-shaft-100">Good life begins with the good company. Start explore thousands of jobs in one place.</div>
            <div className="flex gap-3 mt-5">
            <TextInput className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
      variant="unstyled"
      label="Job Title"
      placeholder="Software Engineer"
    />
    <TextInput className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
      variant="unstyled"
      label="Job Type"
     
      placeholder="Fulltime"/>
<div className="flex items-center justify-center h-full w-20  bg-bright-sun-400 rounded-lg p-2 hover:bg-bright-sun-500">
<IconSearch className="h-[85%] w-[85%]"/>
</div>
            </div>
    
        </div>
        <div className="w-[55%] flex items-center justify-center">
<div className="relative w-[30rem] flex justify-center">
    <img src="/Boy.png" alt="boy" /></div>
    <div className=" absolute w-fit right-[8%] top-[52%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md ">
        <div className="text-center mb-1 text-sm text-mine-shaft-100 px-3 py-1 justify-center">10K+ got job</div>
    <Avatar.Group >
      <Avatar src="/avatar-8.png" />
      <Avatar src="avatar-9.png" />
      <Avatar src="avatar-7.png" />
      <Avatar>+9K</Avatar>
    </Avatar.Group>

    </div >
    <div className="absolute w-fit left-[51%] top-[33%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md gap-2 flex flex-col">
        <div className="flex gap-2 items-center">
              <div className=" w-14 h-10 p-1  bg-mine-shaft-900 rounded-lg">
               <img src="/Google.png" alt="" />
              </div>
              <div className="text-sm text-mine-shaft-100">
                <div>Software Engineer</div>
                <div className="text-mine-shaft-200 text-xs">New York</div>
              </div>
        </div>
        <div className="flex gap-2 justify-around text-mine-shaft-200 text-xs">
            <span>1 day ago</span>
            <span>120 Applicants</span>
        </div>
    </div>
        </div>
    </div>
);
}
export default DreamJob;