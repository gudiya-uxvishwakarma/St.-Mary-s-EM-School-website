// components/ResponsiveContainer.jsx
import React from 'react';

export default function ResponsiveContainer({ children }) {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-10 max-w-screen-xl mx-auto">
      {children}
    </div>
  );
}
