import React from 'react';

const CustomerListItem = ({ data }) => {
  const { name, sp, date } = data;
  return (
    <div className="w-full flex justify-between p-6 border-b text-sm text-text-100">
      <p className="flex gap-2 flex-1 items-center">
        <input type="checkbox" className="accent-sec-300 w-4 h-4" />
        {name}
      </p>
      <p className="text-text-200 flex flex-1">{date}</p>
      <p className="flex flex-1">{sp}</p>
      <p className="bg-sec-400 text-sec-300 px-2 rounded cursor-pointer">
        Delete
      </p>
    </div>
  );
};

export default CustomerListItem;
