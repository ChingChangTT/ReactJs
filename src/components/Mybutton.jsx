export function Button(props){
    console.log(props);
    return <button className={props.style ? props.style :"p-5 text-xs "} style={btnStyle}>{props.tittle ? props.tittle:"Defuatl"}</button>
}
const btnStyle= {
    color:"white",
    // width:"100px",
    height:"50px",
    backgroundColor:"blue",
    border:"none",
    borderRadius:"5px",
    // margin:"10px",  

};
export function btnLogin(){
    return <button className="">Login</button>
}