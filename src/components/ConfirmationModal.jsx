import React from 'react';

const ConfirmationModal = ({ candidateId, onCancel, onConfirm }) => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/40 p-6 rounded-xl shadow-xl max-w-sm w-full text-center">
        <h3 className="text-xl font-semibold mb-4 text-black">Confirm your vote</h3>
        <p className="mb-6 text-md text-black">
          Are you sure you want to vote for <strong>{candidateId}</strong>?
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-red-600 rounded hover:bg-red-800"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-800"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
