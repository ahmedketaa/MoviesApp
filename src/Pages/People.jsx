import React, { useState, useEffect } from 'react';
import Loading from '../ReusableComponents/Loading';
import { getPeople } from '../Utilities';
import PersonCard from '../ReusableComponents/PersonCard';

export default function People(){
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPeople=()=>{
        getPeople(page).then(res=> { setPeople(res.data.results);
            setLoading(false)
            console.log(res.data.results);
            
         }

        ).catch(err=>{ console.log(err); }).finally()
    }
    // const fetchPeople = async () => {
    //   const response = await getPeople(page);
    //   setPeople(response.data.results);
    //   console.log(response.data.results);
      
    //   setLoading(false);
    // };
    fetchPeople();
  }, [page]);

  if (loading) return <Loading />;

  return (
    <div className="container">
        <h2 className='mb-3'>Popular People</h2>
      <div className="row">
        {people.map(person => (
          <div className="col-md-3" key={person.id}>
             <PersonCard person={person} />
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-between">
        <button onClick={() => setPage(page - 1)} disabled={page === 1} className="btn btn-primary">Previous</button>
        <button onClick={() => setPage(page + 1)} className="btn btn-primary">Next</button>
      </div>
    </div>
  );
};

