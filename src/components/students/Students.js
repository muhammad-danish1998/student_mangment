import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Avatar from '../layout/Avatar'
import { useFirestore } from "react-redux-firebase";


const Students = () => {
    const firestore = useFirestore();
    const [student, setStudent] = useState(null);


    const loadStudent = async () => {
        try {
            const docRef = firestore.collection('students').doc(id);
            const result = await docRef.get();
            if (result.exists) {
                setStudent(result.data());
            }
            else {
                console.log('No Such Student')
            }
        } catch (error) {
            console.log("error : ", error);
        }
    };
    const { id } = useParams();
    useEffect(() => {
        loadStudent();
    }, []);

    if (!student) {
        return <h1>Loading ...</h1>
    }
    return (
        <div className="container">
            <div className="py-4">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="card card-body shadow">
                            <div className="row">
                                <div className="col-md-4">

                                    <Avatar url={`https://i.pravatar.cc/150?img=${id}`} alt='user' />
                                </div>
                                <div className="col-md-8">
                                    <ul className="list-group">
                                        <li
                                            className="d-flex justify-content-between align-items-center list-group-item list-group-item-action"
                                        >
                                            <h3 className="m-0">{student.name}</h3>
                                            <Link className="btn btn-primary" to={`/studentForm/${id}`}>
                                                edit profile
                        </Link>
                                        </li>
                                        <li className="list-group-item">
                                            <p>email: {student.email}</p>
                                            <p>phone: {student.phone}</p>
                                            <p>class: {student.standard}</p>
                                            <p>address 1: {student.address1}</p>
                                            <p>address 2: {student.address2}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Students
