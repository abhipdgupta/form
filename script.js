const inputs=document.getElementsByTagName('input');

for(let i=0;i<inputs.length;i++){
    inputs[i].onfocus=()=>{
        document.getElementsByTagName("label")[i].style.transform="translateY(10px)"
    }
    
}
