import React, { useState } from 'react'
import MainForm from './MainForm'
import './style.css'

export default function Main() {

    return(
        <div style={{display:'flex',flexDirection:'row', height:'100%'}}>
            <div style={styles.sideDiv}>
                <div className="textAnim1" style={{fontSize:'3em'}}>
                Beyond Design
                </div>
                <br/>
                <div className="textAnim2" >
                Internship Task
                </div>
            </div>
            <div style={{width:'50%', position:'absolute',left:'50%',height:'100%'}}>
            <MainForm/>
            </div>
        </div>
    )
    
}
const styles={
    sideDiv: {
        height:'100%', 
        width:'50%',
        backgroundColor:'black', 
        position:'fixed',
        color:'white',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    }
}

