import { Button, TextInput } from "@mantine/core";

const Subscribe=()=>{
    return <div className="mt-20 flex items-center bg-mine-shaft-900 mx-20 py-3 rounded-xl justify-around">
<div className="text-3xl w-2/5 text-center font-semibold text-mine-shaft-100">Never Wants to 
Miss Any  <span className="text-bright-sun-400"> Job News? </span> 
    </div>
    <div className="flex gap-4 rounded-xl bg-mine-shaft-700 px-4 py-1 items-center">
    <TextInput
    className="[&_input]:text-mine-shaft-100 font-semibold"
      variant="unstyled"
      placeholder="Your@email.com"
      size="lg"
      
    />
    <Button  className="!rounded-lg" size="sm" color="yellow" variant="filled">Subscribe</Button>
    </div>
    </div>
}
export default Subscribe;