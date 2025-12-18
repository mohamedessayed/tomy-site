import React, { useCallback, useState } from "react";

type ButtonComponentProps = {
    title: string;
    clickFun: ()=> void;
}


const Button : React.FC <ButtonComponentProps> = React.memo(({title, clickFun}) => {

    console.log("child is re-render");
    

    return <>
        <button className='bg-primary_dark px-4 py-2 text-winter' 
        onClick={clickFun}>
            {title}
        </button>
    </>
})


const ParentDemo: React.FC = ()=>{

    const [count,setCount] = useState<number>(0);
    const [text,setText] = useState<string>("");
    
    const increment = useCallback(():void=>{
        setCount(count + 1);
    },[count])

    return <>
    

    <div>
        <p>counter Result: {count} EGP</p>

        <Button clickFun={increment} title="Increment" />

        <input type="text" className="border w-full"  value={text} onChange={(e)=>setText(e.target.value)} placeholder="write your name"></input>
    </div>
    
    </>
}


export default ParentDemo;