import { AppBar, Button, Container, InputAdornment, TextField, Toolbar, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import './style.css'
import '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import LinkIcon from '@material-ui/icons/Link';

export default function Form2(props) {

    const [myPlaceholder,setPlaceHolder] = useState('')
    const [file, setFile] = useState(null)

    const handleFileInput = (e) => {
        // handle validations
        const file = e.target.files[0];
        if (file.size > 25*1024*1024 || !file.type.includes('pdf') )
          alert("Please choose pdf files of size less than 25MB");
        else 
        {
            props.setValues({
                ...props.values,
                file:file})
            setFile(file)
        }
        console.log(file)
    };

    return (
        <div style={styles.containerStyle}>
            <AppBar position="absolute" style={{position:'absolute', top:0}}>
                <Toolbar style={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <Typography variant="h6" >
                    Sample of Work
                    </Typography>
                </Toolbar>
            </AppBar>
            <div  style={{width:'100%', position:'relative'}}>
            
                <div style={styles.fileInput}>
                    <div style={{width:'70%', overflowX:'auto', alignItems:'center' }}>
                        {props.values.file===""?'Choose a file':props.values.file.name}
                    </div>
                    <input type="file" name="file" id="file" className="inputfile" onChange={handleFileInput}/>
                    <label htmlFor="file" >
                        <div style={{display:'flex', flexDirection:'row', alignItems:'center', height:'100%'}}>
                            <FontAwesomeIcon icon={faUpload} />
                        </div>        
                    </label>
                </div>
               
                <TextField
                    value={props.values.github}
                    id="input-with-icon-textfield"
                    type="url"
                    label="Github Link"
                    fullWidth
                    style={styles.formItems}
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <LinkIcon/>
                        </InputAdornment>
                    ),
                    }}
                    onChange={e=>{props.setValues({
                        ...props.values,
                        github:e.target.value}
                    )}}
                />

                <TextField
                    value={props.values.drive}
                    id="input-with-icon-textfield"
                    type="url"
                    label="Google Drive Links"
                    fullWidth
                    style={styles.formItems}
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <LinkIcon/>
                        </InputAdornment>
                    ),
                    }}
                    onChange={e=>{props.setValues({
                        ...props.values,
                        drive:e.target.value}
                    )}}
                />
                <br/>
                <Button 
                    variant="contained" 
                    color="primary" 
                    style={styles.prevButton}
                    onClick={()=>{
                        props.setFormNumber(f=>f-1)
                    }}
                >
                    Previous
                </Button>

                <Button 
                    variant="contained" 
                    color="primary" 
                    style={styles.submitButton}

                    onClick={()=>{

                        var count=0;
                        for(var item in props.values )
                        {   
                            if(props.values[item.toString()]!=="")
                            {
                                count++
                            }
                        }
                        if(count===11)
                        {
                            props.setFormNumber(f=>f+1)
                        }
                        else
                            alert("Please fill all the required fields");
                    }}
                >
                    Submit
                </Button>
                
            </div>
        </div>
    )
}
const styles={

    containerStyle: {
        height:'100%', 
        display:'flex', 
        flexDirection:'column', 
        alignItems:'center', 
        justifyContent:'center'
    },

    formItems: {
        marginBottom :10,
        marginTop:10
    },

    fileInput: {
        marginBottom :10,
        marginTop:10,
        border:'1px solid grey',
        padding:10,
        borderRadius:5,
        position:'relative',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center'
    },

    prevButton: {
        position: 'absolute',
        left: 0
    },

    submitButton: {
        position: 'absolute',
        right: 0
    }
}

