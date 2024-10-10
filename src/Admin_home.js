import React from 'react';
import Admin_Header from './Admin_header';
import './css/Admin_home.css'; 

function Admin_home() {
    return (
        <div className="main-page">
        <Admin_Header />
        <div className="content">
                <h2>Admin Dashboard</h2>
                <div className="admin-tabs">
                    <div className="tab">
                        <a href="/manage_users" className="tab-link">Manage Users</a>
                    </div>
                    <div className="tab">
                        <a href="/manage-groups" className="tab-link">Manage Groups</a>
                    </div>
                    <div className="tab">
                        <a href="/user-requests" className="tab-link">User Requests</a>
                    </div>
                    <div className="tab">
                        <a href="/quick-chat" className="tab-link">Quick Chat</a>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default Admin_home;
