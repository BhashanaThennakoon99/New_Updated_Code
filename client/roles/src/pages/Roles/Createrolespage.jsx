import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ROLE_URL } from '../../utils/Constants';
const BASE_URL = process.env.REACT_APP_BASE_URL;

function Createrolespage() {
    const [values, setValues] = useState({
        rolecode: '',
        rolename: '',
        privileges: [], // Array to hold privileges
    });

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${BASE_URL}${ROLE_URL}`, values)
            .then(res => {
                console.log(res);
                navigate('/', { state: { roleName: values.rolename } }); // Navigate to Roleslist with role name
            })
            .catch(err => console.log(err));
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        // Update privileges array based on checkbox change
        setValues(prevState => ({
            ...prevState,
            privileges: checked ? [...prevState.privileges, name] : prevState.privileges.filter(item => item !== name)
        }));
    };

    return (
        <div className="App">
            <div className="parts" style={{ height: '830px', marginLeft: '350px', marginRight: '250px', padding: "17px", paddingBottom: "100px", marginTop: "15px", borderRadius: 10, border: '3px solid #B5A28C' }}>
                <div id="subTopic" style={{ backgroundColor: '#B5A28C', marginBottom: "30px", height: '60px', width: '1657px', borderRadius: 15, justifyContent: 'space-between', alignItems: 'center' ,paddingBottom:'20px'}}>
                    <h4 className="subheaderTitle" style={{ fontSize: '30px', padding: '13px' }}>Create Role</h4>
                    <div className='content-body' style={{ paddingTop: '50px', paddingLeft: "50px" }}>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <label htmlFor="rolecode" style={{ padding: '10px', fontSize: '26px' }}>Role Code:</label>
                                <input type="text" name='rolecode' className='form-control' placeholder='Enter Role Code' style={{ borderRadius: '13px', width: '700px', borderRadius: '13px', marginLeft: '16px', paddingTop: '10px', paddingBottom: '10px', fontSize: '21px' }}
                                    onChange={e => setValues({ ...values, rolecode: e.target.value })} />
                            </div>
                            <div className='mb-2'>
                                <label htmlFor="rolename" style={{ padding: '10px', fontSize: '26px' }}>Role Name:</label>
                                <input type="text" name='rolename' className='form-control' placeholder='Enter Role Name' style={{ borderRadius: '13px', width: '700px', borderRadius: '13px', marginLeft: '16px', paddingTop: '10px', paddingBottom: '10px', fontSize: '21px' }}
                                    onChange={e => setValues({ ...values, rolename: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <table className="table" style={{ width: '70%', marginLeft: '200px', borderCollapse: 'collapse', textAlign: "center" }}>
                                    <thead>
                                        <tr style={{ padding: '18px', fontSize: '27px' }}>
                                            <th style={{ width: '50%', fontSize: '1.2em', backgroundColor: '#B5A28C', height: '50px' }}>Privileges</th>
                                            <th style={{ width: '50%', fontSize: '1.2em', backgroundColor: '#B5A28C', height: '50px' }}>Grant</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <tr style={{ verticalAlign: 'middle' }}>
                                        <td style={{ fontSize: '24px', paddingTop: '20px' }}>Create Access</td>
                                        <td>
                                             <input className="form-check-input" type="checkbox" name="createAccess"
                                              checked={values.privileges.includes("createAccess")} onChange={handleCheckboxChange} style={{ width: '20px', height: '20px', border: '2px solid black' }} />
                                        </td>
                                    </tr>
                                    <tr style={{ verticalAlign: 'middle' }}>
                                        <td style={{ fontSize: '24px', paddingTop: '20px' }}>Update Access</td>
                                        <td>
                                             <input className="form-check-input" type="checkbox" name="updateAccess"
                                              checked={values.privileges.includes("updateAccess")} onChange={handleCheckboxChange} style={{ width: '20px', height: '20px', border: '2px solid black' }} />
                                        </td>
                                    </tr>
                                    <tr style={{ verticalAlign: 'middle' }}>
                                        <td style={{ fontSize: '24px', paddingTop: '20px' }}>View Access</td>
                                        <td>
                                            <input className="form-check-input" type="checkbox" name="viewAccess"
                                             checked={values.privileges.includes("viewAccess")} onChange={handleCheckboxChange} style={{ width: '20px', height: '20px', border: '2px solid black' }} />
                                        </td>
                                    </tr>
                                    <tr style={{ verticalAlign: 'middle' }}>
                                        <td style={{ fontSize: '24px', paddingTop: '20px' }}>Delete Access</td>
                                        <td>
                                            <input className="form-check-input" type="checkbox" name="deleteAccess"
                                             checked={values.privileges.includes("deleteAccess")} onChange={handleCheckboxChange} style={{ width: '20px', height: '20px', border: '2px solid black' }} />
                                        </td>
                                    </tr>      
                                    </tbody>
                                </table>
                            </div>
                            <button type="submit" className='btn btn-success' style={{ fontSize: '1.2em', marginLeft: '10px', marginTop: '20px', marginBottom: '33px', borderRadius: '9px', width: '80px', height: '38px', padding: '3px' }}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Createrolespage;
