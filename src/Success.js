import './style.css'

export default function Success() {
  return (
    <div 
        style={{
            width:'100%', 
            height:'100%', 
            display:'flex', 
            alignItems:'center', 
            justifyContent:'center'
            }}
        className="successAnim"
    >
      <div style={{color:'green', fontSize:'3em'}}>Success</div>
    </div>
  );
}
