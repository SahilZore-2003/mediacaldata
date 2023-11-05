import React, { useState } from 'react';
import Login from './Login';


const Data = ({ data }) => {

    const [showLogin, setShowLogin] = useState(false)

    console.log(data)

    const {
        name, age, affected_side, condition, disease, gender, img, mail, percentage, phone, speciality, id

    } = data[0];

    let progresspercent = `${percentage}`/100*170+50;



    return (
        <div className='data-container'>

            {
                showLogin ? <div className='container'><Login /></div> : <>
                    <nav>
                        <i className="fa-solid fa-arrow-left" onClick={() => { setShowLogin(true) }}></i>
                        <h1>View Patient</h1>
                    </nav>
                    <section>
                        <div className='left'>
                            <div>
                                <div className="usercontainer">
                                    <div className='userinfo'>
                                        <h2>{name} {gender}/{age}</h2>
                                        <p>Patient ID : {id}</p>
                                    </div>
                                    <img src={
                                        img
                                    } />
                                </div>

                                <div className="graph">
                                    <h1 className='center'>Goal Reached</h1>
                                    <div className="flex">
                                        <div className="progress" style={{transform:`rotate(${progresspercent}deg`}}>

                                        </div>
                                    </div>
                                    <h2>{percentage}%</h2>
                                </div>
                            </div>

                        </div>
                        <div className='right'>
                            <div>
                                <span>Phone NO.</span>
                                <span>
                                    <i className="fa-solid fa-phone"></i>{phone}</span>
                            </div>
                            <div>
                                <span>Mail ID.</span>
                                <span>
                                    <i className="fa-regular fa-envelope"></i>{mail}</span>
                            </div>
                            <div>
                                <span>Affected Side</span>
                                <span>
                                    <i className="fa-solid fa-user-doctor"></i>{affected_side}</span>
                            </div>
                            <div>
                                <span>Condition</span>
                                <span>
                                    <i className="fa-solid fa-star-of-life"></i>{condition}</span>
                            </div>
                            <div>
                                <span>Speciality</span>
                                <span>
                                    <i className="fa-brands fa-accessible-icon"></i>{speciality}</span>
                            </div>
                        </div>
                    </section>
                    <div className="history">
                        <div>
                            <i className="fa-solid fa-chart-line"></i>
                            Medical History
                        </div>
                        <div>
                            {
                                disease.map((e) => e).join(" ")
                            }
                        </div>
                    </div>
                </>
            }

        </div>
    )
}

export default Data
