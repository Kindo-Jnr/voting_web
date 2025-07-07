import React from 'react';

const CandidateCard = ({ candidate, isSelected, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className={`p-5 border rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-105
        ${isSelected ? 'border-primary bg-blue-50' : 'border-gray-200'}`}
    >
      <h3 className="text-lg font-semibold">{candidate.name}</h3>
    </div>
  );
};

export default CandidateCard;
