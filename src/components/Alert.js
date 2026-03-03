import React from 'react'

export default function Alert(props) {
  return (
    <div className="container" style={{height: "50px"}}>
   { props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>{props.alert.type}</strong> : {props.alert.msg}
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
      }
    </div>
  
  )
}


// export default function Alert({ alert }) {

//   if (!alert) return null;

//   return (
//     <div className="container"  style={{height: "50px"}}>
//       <div className="alert alert-warning alert-dismissible fade show" role="alert">
//         <strong>{alert.type}</strong> : {alert.msg}
//         <button 
//           type="button" 
//           className="btn-close" 
//           data-bs-dismiss="alert" 
//           aria-label="Close">
//         </button>
//       </div>
//     </div>
//   )
// }

