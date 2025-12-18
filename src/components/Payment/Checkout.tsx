import { useMemo, useState } from "react";

const CalcFunction = (num: number): number => {

   


    return 250 * num

}

const CalcTaxFunction = (num: number): number => {



    return num * 0.14

}

const Checkout: React.FC = ()=>{

    const [count,setCount] = useState<number>(1);
    const [text,setText] = useState<string>("");

    const result = useMemo(():number=>{
        return CalcFunction(count)
    },[count])


    const taxs = useMemo(():number=>{
        return CalcTaxFunction(result)
    },[count])

    return<>

    <div>
        <p>calcution Result: {result} EGP</p>
        <p>taxs Result: {taxs} EGP</p>
        <p>total Result: {(taxs + result)} EGP</p>

        <button className='bg-primary_dark px-4 py-2 text-winter' onClick={()=>setCount((perv)=>perv+1)}>
            increment
        </button>

        <input type="text" className="border w-full"  value={text} onChange={(e)=>setText(e.target.value)} placeholder="write your name"></input>
    </div>
    
    
    </>

}

export default Checkout;