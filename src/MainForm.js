import { Container, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import 'react-phone-input-2/lib/material.css'
import Form1 from './Form1'
import Form2 from './Form2'
import Success from './Success'
import './style.css'

export default function MainForm() {

    const [formNumber, setFormNumber] = useState(1)
    const [values, setValues] = useState({
        name:"",
        email:"",
        phone:"",
        apartment:"",
        houseNo:"",
        city:'',
        state:"",
        pin:"",
        file:"",
        github:"",
        drive:""
    })

    console.log("values : ",values)
    const renderForm=()=>{
        switch (formNumber) {
            // case 1: return <Form1 
            //                 setFormNumber={setFormNumber}
            //                 values={values}
            //                 setValues={setValues}
            //             />
            //         break;
                            
            case 1: return <div className="componentAnim1">
                                <Form1 
                                    setFormNumber={setFormNumber}
                                    values={values}
                                    setValues={setValues}/>
                            </div>
                    break;
            case 2: return <div className="componentAnim2">
                                {<Form2 setFormNumber={setFormNumber}
                                setFormNumber={setFormNumber}
                                values={values}
                                setValues={setValues}
                                />}
                            </div>
                    break;
            case 3: return <Success/>
            default: break;
        }
    }

    const status=()=>{
        var count=0;
        for(var item in values)
            if(values[item.toString()]!=="")
            {
                count++
            }
        var percentage=(count*100)/22.2
        return(
            <div style={{height:3, backgroundColor:'transparent', width:'100%', position:"fixed", bottom:0, left:0}}>
                <div style={{width:`${percentage}%`, border:'3px solid green' }}/>
            </div>
        )
    }

    return(
        <div style={{height:'100%', position:'relative', display:'flex',flexDirection:'row', justifyContent:'center'}}>
            {renderForm()}
            {status()}
        </div>
    )
    
}
const styles={
    formItems:{
        marginBottom :10,
        marginTop:10
    }
}

