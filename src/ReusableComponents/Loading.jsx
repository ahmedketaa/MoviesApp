import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; 
import styles from './card.module.css'
export default function Loading(){
  const arr=[1,2,3,4,5,6,7,8,9,10,11,12]
  return (
    <div className="container">
      <div className="d-flex flex-wrap ">
     {arr.map((ele,index)=>(
       <div key={index} className="col-md-3 ">
       <div className="card w-100 mb-3 bg-dark m-3" style={{ width: '18rem' ,color:"gray" }}>
       <Skeleton baseColor='gray' height={180} width="100%" />
       <div className={styles.cardBody}>
         <h5 className={styles.cardTitle}><Skeleton baseColor='gray' width={120} /></h5>
         <p className="card-text"><Skeleton  baseColor='gray'  count={3} /></p>
         {/* <Link to="#" className="btn btn-primary"><Skeleton width={100} /></Link> */}
       </div>
       </div>
     </div>
     ))}
     </div>
    </div>
  );
};

 ;
