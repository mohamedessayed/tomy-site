import { useRef, useState, type JSX } from 'react'

// Example that explain useRef

export default function FocusInput():JSX.Element {

    const inputIdRef = useRef<null|HTMLInputElement>(null);

    const FocusInputClicked = ()=>{

        inputIdRef.current?.focus();
        
    }

  return (
    <div>

        <input type="text" className='w-full border p-2' ref={inputIdRef} placeholder='search'/>

        <button className='bg-primary_dark px-4 py-2 text-winter' onClick={FocusInputClicked}>search</button>

        
      
    </div>
  )
}

export const Counter: React.FC = ()=>{

    const refCount = useRef<number>(0);

    const[count,setCount] = useState<number>(0);

    const demo = ()=>{
        refCount.current +=1;

        console.log(refCount);
        
    }

    return <>

    <div>
        <p>useRef Count : {refCount.current}</p>
        <p>useState Count : {count}</p>

        <button className='bg-primary_dark px-4 py-2 text-winter' onClick={demo}>
            increment
        </button>
    </div>
    
    </>
}