import React from 'react';

const PromptView = () => {
  return (
    <div className="space-y-6 font-poppins text-black-800 bg-gray-50 p-6 rounded-lg shadow-sm">
      <p className=" leading-relaxed">
        In a database, the N_name field is essential for storing names efficiently. 
        Defined as VARCHAR or NVARCHAR, it ensures compatibility across languages. 
        Proper indexing enhances search performance, while constraints like length limits 
        maintain data integrity. This field plays a crucial role in user records, 
        customer profiles, and identity management.
      </p>
      
      <p className="leading-relaxed">
        In database design, N_name type likely refers to a "Name" field with a variable 
        character (VARCHAR or NVARCHAR) data type, used to store names in a structured manner. 
        If the database supports Unicode (like NVARCHAR in SQL), it ensures compatibility 
        with multiple languages. Proper constraints, such as length limits and uniqueness, 
        help maintain data integrity.
      </p>
    </div>
  );
};

export default PromptView;