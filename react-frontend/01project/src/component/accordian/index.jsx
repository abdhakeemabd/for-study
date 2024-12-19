import { useState } from 'react'
import data from './data'
import './style.css'
export default function Accordian() {
    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState([])
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId){
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }
    function handleMultiSingleSelection(getCurrentId){
        let cpyMutiple = [...multiple];
        const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId)
        
        console.log(findIndexOfCurrentId);
        if(findIndexOfCurrentId === -1)cpyMutiple.push(getCurrentId)
        else cpyMutiple.splice(findIndexOfCurrentId, 1)
        setMultiple (cpyMutiple  )  
    }
    // function handleSingleSelection(getCurrentId){
    //     setSelected(getCurrentId === selected ? null :getCurrentId)
        
    // }
    console.log(selected, multiple);
    return (
        <div className="wrapper">
            <button onClick={() =>setEnableMultiSelection(!enableMultiSelection)}>
                enable muti selection
            </button>
            <div className="accordian">
                {data && data.length > 0 ? (
                  data.map((dataItem) => (
                    <div className='item'>
                        <div onClick={enableMultiSelection 
                            ? ()=> handleMultiSingleSelection(dataItem.id)
                            : () => handleSingleSelection(dataItem.id)
                            } className='title'>
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            enableMultiSelection ? 
                            multiple.indexOf(dataItem.id) !== -1  && 
                            <div className='content'>{dataItem.answer}</div>:
                            selected === dataItem.id && <div className='content'>{dataItem.answer}</div>

                        }
                        {/* {selected === dataItem.id ||multiple.indexOf(dataItem.id) !==-1 ?( 
                           <div className='content'>
                            {dataItem.answer}
                            </div>)
                           : null} */}
                    </div>
                ))
                )
                : (<div> No data found  </div>
                )
                }
            </div>
        </div>
    );
}
