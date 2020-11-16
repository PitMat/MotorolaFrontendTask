const name = document.getElementById('name');
const email = document.getElementById('email');
const form = document.getElementById('form');
const textarea= document.getElementById('textarea')
const errorElement = document.getElementById('error');
const btn = document.querySelector('sendBtn');
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regTxt = /\s/g



form.addEventListener('submit',(e)=>{
    let messages = []
    if(name.value === '' || name.value ==null){
        messages.push('Name is required')
    }else if(regTxt.test(name.value)){
        messages.push('Whitespace characters in Name')
    } else if( name.value===""){
        btn.disabled=false;
    }

    if(email.value===''){
        messages.push('Email is required')
    }else if(!re.test(email.value)){
        messages.push('Incorect Email')
    }else if(regTxt.test(email.value)){
        messages.push('Whitespace characters in Email')
    }
    

   
    
    if(textarea.value==''|| textarea.value==null){
        messages.push('Empty text area')
    }

 
    if(messages.length>0){
e.preventDefault()
errorElement.innerText=messages.join(',')
}



})

