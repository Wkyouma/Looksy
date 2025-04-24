import React from 'react';

const Input = ({ label, type = 'text', value, onChange, name, placeholder, required = false }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-0 
        focus:border-2 focus:border-blue-500"
      />
    </div>
  );
};

export default Input;
