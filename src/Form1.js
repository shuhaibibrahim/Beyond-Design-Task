import { AppBar, Button, Container, IconButton, TextField, Toolbar, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import MenuIcon from '@material-ui/icons/Menu';

export default function Form1(props) {

    const [myPlaceholder,setPlaceHolder] = useState('')
    const [myerror, setMyError] = useState(false)
    const [myHelpertext, setMyHelpertex] = useState('')
    const [phLength, setPhLength] = useState(props.values.phone===""?0:props.values.phone.length)
    const [myEmail, setMyEmail] = useState('')
    const [error, setError] = useState(false)

    const validateEmail = e => {

        const myemail=e.target.value

        if(!myemail.includes(' ')){
            var pattern= new RegExp(".+@[a-z]+.com")
            if(pattern.test(myemail))
                return true
            else    
                return false
        }
        return false
    }

    return (
        // <div style={{height:'100%',backgroundColor:'red', display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
        //         <div style={{color:'white', position:'absolute',top:'40%'}}>{name}</div>
        //         <input type="text" placeholder="Enter something" onChange={e=>setName(e.target.value)}/>
        // </div>
        <div style={styles.containerStyle}>
            <AppBar style={{position:'absolute', top:0}}>
                <Toolbar style={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <Typography variant="h6" >
                    Basic Information
                    </Typography>
                </Toolbar>
            </AppBar>
            <div  style={{width:'80%' , position:'absolute', top:80}}>
                <TextField 
                    value={props.values.name}
                    required 
                    id="standard-secondary" 
                    label="Name"
                    placeholder={myPlaceholder}
                    fullWidth
                    onChange={e=>{props.setValues({
                        ...props.values,
                        name:e.target.value}
                    )}}
                    onFocus={()=>{setPlaceHolder('Enter your name')}}
                    style={styles.formItems}
                    variant="outlined"
                />
                <TextField 
                    required 
                    id="standard-secondary" 
                    label="Email"
                    placeholder={myPlaceholder}
                    error={myerror}
                    fullWidth
                    value={props.values.email}
                    onChange={e=>{

                            props.setValues({
                                ...props.values,
                                email:e.target.value}
                            )
                            if(!validateEmail(e))
                            {
                                setMyError(true)
                                setError(true)
                                setMyHelpertex('Enter a valid email address')
                            }
                            else
                            {
                                setMyError(false)
                                setError(false)
                                setMyHelpertex('')
                            }
                        }
                    }
                    onFocus={()=>{setPlaceHolder('Enter your email')}}
                    type="email"
                    helperText={myHelpertext}
                    style={styles.formItems}
                    variant="outlined"
                />
                <PhoneInput
                    placeholder='Enter your phone number'
                    value={props.values.phone}
                    onChange={(value, country)=>{
                        var format=typeof(country.format)!=="undefined"?country.format:''
                            
                        var formatString=format.match(/\./g)
                        var len=formatString===null?0:formatString.length
                        setPhLength(len)

                        props.setValues({
                            ...props.values,
                            phone:value}
                        )    
                    }}
                    isValid={(value)=>{
                            if(value.length===phLength)
                            {
                                setError(false)
                                return true
                            }
                            setError(true)
                            return false
                    }}
                    defaultErrorMessage={`Must be ${phLength} digits`}
                    inputStyle={{width:'100%'}}
                    containerStyle={styles.formItems}
                    enableLongNumbers={true}
                />
                <div style={{alignSelf:'center', display:'flex', flexDirection:'row',alignItems:'center', justifyContent:'center'}}>
                    <div style={{height:0, border: '1px solid grey', width:'10%'}} />
                        <div style={{width:'30%', textAlign:'center', backgroundColor:'white'}}>Address</div>
                    <div style={{height:0, border: '1px solid grey', width:'70%'}} />
                </div>
                <div>
                    <TextField 
                        required 
                        id="standard-secondary" 
                        label="Apartment"
                        value={props.values.apartment}
                        placeholder={myPlaceholder}
                        fullWidth
                        onFocus={()=>{setPlaceHolder('Enter the apartment')}}
                        onChange={e=>{props.setValues({
                            ...props.values,
                            apartment:e.target.value}
                        )}}
                        style={styles.formItems}
                        variant="outlined"
                    />
                    <TextField 
                        required 
                        id="standard-secondary" 
                        label="House No."
                        value={props.values.houseNo}
                        placeholder={myPlaceholder}
                        fullWidth
                        onFocus={()=>{setPlaceHolder('Enter the house number')}}
                        onChange={e=>{props.setValues({
                            ...props.values,
                            houseNo:e.target.value}
                        )}}
                        style={styles.formItems}
                        variant="outlined"
                    />
                    <TextField 
                        value={props.values.city}
                        required 
                        id="standard-secondary" 
                        label="City"
                        placeholder={myPlaceholder}
                        fullWidth
                        onFocus={()=>{setPlaceHolder('Enter the city')}}
                        onChange={e=>{props.setValues({
                            ...props.values,
                            city:e.target.value}
                        )}}
                        style={styles.formItems}
                        variant="outlined"
                    />
                    <TextField 
                        required 
                        value={props.values.state}
                        id="standard-secondary" 
                        label="State"
                        placeholder={myPlaceholder}
                        fullWidth
                        onFocus={()=>{setPlaceHolder('Enter the state')}}
                        onChange={e=>{props.setValues({
                            ...props.values,
                            state:e.target.value}
                        )}}
                        style={styles.formItems}
                        variant="outlined"
                    />
                    <TextField 
                        required 
                        value={props.values.pin}
                        id="standard-secondary" 
                        label="PIN"
                        type='number'
                        placeholder={myPlaceholder}
                        fullWidth
                        onFocus={()=>{setPlaceHolder('Enter pin code')}}
                        onChange={e=>{props.setValues({
                            ...props.values,
                            pin:e.target.value}
                        )}}
                        style={styles.formItems}
                        variant="outlined"
                    />
                </div>
                <div 
                    style={styles.nextButton}>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={()=>{

                        var count=0;
                        var i=0
                        for(var item in props.values )
                        {   
                            i++; 
                            if(props.values[item.toString()]!=="")
                            {
                                count++
                            }
                            if(i>=8)
                                break;
                        }
                        if(count===8)
                        {
                            if(!error)
                                props.setFormNumber(f=>f+1)
                            else
                                alert("Please fill all the fields without error");

                        }
                        else
                            alert("Please fill all the required fields without error");
                    }}
                >
                    Next
                </Button>
                </div>
            </div>
        </div>
    )
}
const styles={

    containerStyle:{
        height:'100%', 
        display:'flex', 
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'center',
    },

    formItems: {
        marginBottom :10,
        marginTop:10
    },

    nextButton: {
        position: 'absolute',
        right: 0,
        paddingBottom:20
    }
}

