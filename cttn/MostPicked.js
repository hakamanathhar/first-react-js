
import React from 'react';

export default function MostPicked(props) {
    let mostPicker 
        <section className="container">
            <h4 className="mb-3">Most Picked</h4>
            <div className="row">
                {
                    props.data.map((item,index) => {
                        if(index === 0){
                            return(
                                <div className="col-4">
                                    <div className="card h-100">Card 1</div>
                                </div>
                            );
                        } else {
                            return(
                                
                                        <div className="col-6">
                                            <div className="card">Card 2</div>                    
                                        </div>
                                        <div className="col-6">
                                            <div className="card">Card 3</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="card">Card 4</div>
                                        </div>
                                        <div className="col-6">
                                            <div className="card">Card 5</div>
                                        </div>
                                   
                            );
                        }
                    })
                }

                <div className="col-4">
                        <div className="card h-100">Card 1</div>
                    </div>
            </div>
        </section>
    
    return ();
}

