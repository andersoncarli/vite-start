import React from 'react';

interface HelloProps {
  who: string;
}

const Hello: React.FC<HelloProps> = ({ who }) => {
  return <h1 className="text-3xl font-bold text-blue-600">Hello {who}!</h1>;
};

export default Hello;