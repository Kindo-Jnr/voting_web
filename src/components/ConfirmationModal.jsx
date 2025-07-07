import React from 'react';

const ConfirmationModal = ({ candidateId, onCancel, onConfirm }) => {
  return (
    <div className="fixed inset-0 bg-ehite bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg text-center w-96">
        <h2 className="text-xl font-bold mb-4 text-black">Confirm Your Vote</h2>
        <p className="mb-6 text-black">Are you sure you want to vote for <strong>{candidateId}</strong>?</p>
        <div className="flex justify-center gap-4">
          <button onClick={onCancel} className="bg-red-600 px-4 py-2 rounded hover:bg-red-300">Cancel</button>
          <button onClick={onConfirm} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-300">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
