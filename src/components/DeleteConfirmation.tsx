import React, { useState } from 'react';
import axios from 'axios';

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void>;
  title: string;
  description: string;
  category: string;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title, 
  description, 
  category 
}) => {
  const [confirmTitle, setConfirmTitle] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (confirmTitle === title) {
      setIsDeleting(true);
      await onConfirm();
      setIsDeleting(false);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Confirm Delete</h2>
        
        <div className="mb-4 text-gray-700">
          <p className="mb-2">You are about to delete:</p>
          <p><strong>Title:</strong> {title}</p>
          <p><strong>Category:</strong> {category}</p>
          <p><strong>Description:</strong> {description}</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Type "{title}" to confirm deletion:
            </label>
            <input
              type="text"
              value={confirmTitle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmTitle(e.target.value)}
              className="w-full border border-gray-300 rounded p-2 text-gray-900"
              placeholder="Enter title to confirm"
            />
          </div>
          
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              disabled={isDeleting}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={confirmTitle !== title || isDeleting}
              className={`px-4 py-2 rounded text-white ${
                confirmTitle === title && !isDeleting
                  ? 'bg-rose-600 hover:bg-rose-700'
                  : 'bg-rose-300 cursor-not-allowed'
              }`}
            >
              {isDeleting ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;