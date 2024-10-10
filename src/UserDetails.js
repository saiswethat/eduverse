import React, { createContext, useState } from 'react';

// Create a UserContext
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Simulate different static users with full details
  const users = {
    admin: {
      user_id: 'admin123',
      user_name: 'Admin User',
      email: 'admin@example.com',
      password: 'adminpass',
      user_type: 'admin',
      phone_number: '123-456-7890',
      profile_id: 'profile_admin_001',
    },
    student: {
      user_id: 'student456',
      user_name: 'Student User',
      email: 'student@example.com',
      password: 'studentpass',
      user_type: 'student',
      phone_number: '987-654-3210',
      profile_id: 'profile_student_002',
    },
    mentor: {
      user_id: 'mentor789',
      user_name: 'Mentor User',
      email: 'mentor@example.com',
      password: 'mentorpass',
      user_type: 'mentor',
      phone_number: '555-666-7777',
      profile_id: 'profile_mentor_003',
    },
  };

  // Set the initial user (default is 'student')
  const [user, setUser] = useState(users.student);

  // Function to switch between user roles
  const switchUser = (role) => {
    setUser(users[role]);
  };

  return (
    <UserContext.Provider value={{ user, switchUser }}>
      {children}
    </UserContext.Provider>
  );
};
