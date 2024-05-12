import React, { useState } from 'react';
import { doctec, orgs } from './data'; // Assuming data.js is in the same directory
import { Link } from 'react-router-dom';
import ggImage from '../assets/gg.png';


const Delete = () => {
    const [users, setUsers] = useState(doctec);
    const [organizations, setOrganizations] = useState(orgs);

    const deleteUser = (index) => {
        const updatedUsers = [...users];
        updatedUsers.splice(index, 1);
        setUsers(updatedUsers);
    };

    const deleteOrganization = (index) => {
        const updatedOrganizations = [...organizations];
        updatedOrganizations.splice(index, 1);
        setOrganizations(updatedOrganizations);
    };

    return (
        <div className="review-org-sub">
            <header>
                <img src={ggImage} alt="gg logo" style={{}} />
                <h1 className='poetsen-one-regular' style={{ marginLeft: '75px' }}>Delete Account</h1>
                <Link className='button-primary2' to="/admin">Admin Dashboard</Link>
            </header>

            <h1 className='noto-serif' style={{ marginTop: '150px', paddingRight: '1155px' }}>All Users</h1>
            <div className="table-wrapper" style={{ paddingTop: '0px' }}>
                <table className="fl-table" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Type</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>{user.type}</td>
                                <td>{user.phone}</td>
                                <td>{user.address}</td>
                                <td>
                                    <button onClick={() => deleteUser(index)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            <h1 className='noto-serif' style={{ marginTop: '150px', paddingRight: '1000px' }}>All Organizations</h1>
            <div className="table-wrapper" style={{}}>
                <table className="fl-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Organization Name</th>
                            <th>Organization Type</th>
                            <th>Phone</th>
                            <th>Area</th>
                            <th>Governorate</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {organizations.map((organization, index) => (
                            <tr key={index}>
                                <td>{organization.name}</td>
                                <td>{organization.email}</td>
                                <td>{organization.gender}</td>
                                <td>{organization.organizationName}</td>
                                <td>{organization.organizationType}</td>
                                <td>{organization.phone}</td>
                                <td>{organization.area}</td>
                                <td>{organization.governorate}</td>
                                <td>
                                    <button onClick={() => deleteOrganization(index)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Delete;
