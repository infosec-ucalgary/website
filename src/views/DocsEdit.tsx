import { useEffect, useState } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import DeleteConfirmationModal from '../components/DeleteConfirmation';

export interface DocFile {
    title: string;
    description: string;
    category: string;
    filename: string;
}

function DocsEditPage() {
  const [docFiles, setDocFiles] = useState<DocFile[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [title, setTitle] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fileExists, setFileExists] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      fetchDocFiles();
    }
  }, [isLoggedIn]);

  useEffect(() => {
    // Check file existence whenever title, category, or description changes
    checkFileExists();
  }, [title, category, description]);

  const fetchDocFiles = async () => {
    try {
      const response = await axios.get('http://localhost:8000/docs');
      setDocFiles(response.data);
    } catch (error) {
      console.error('Error fetching doc files:', error);
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const hashedPassword = CryptoJS.SHA256(password).toString();
  
    try {
      const response = await axios.post('http://localhost:8000/login', { 
        username, 
        password: hashedPassword 
      });
      if (response.status === 200) {
        setIsLoggedIn(true);
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed');
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const checkFileExists = () => {
    if (!title || !category || !description) return;
    
    const existingFile = docFiles.find(
      (file) => file.title === title && 
                file.category === category && 
                file.description === description
    );
    setFileExists(!!existingFile);
  };

  const handleFileUpload = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedFile || !title || !category || !description) {
      alert('Please fill in all fields and select a file.');
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);

    try {
      await axios.post('http://localhost:8000/docs/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('File uploaded successfully');
      await fetchDocFiles();
      // Reset form
      setSelectedFile(null);
      setTitle('');
      setCategory('');
      setDescription('');
      setFileExists(false);
      
      // Reset file input
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('File upload failed');
    }
  };

  const handleOverwriteOrRename = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (!selectedFile) {
      alert('Please select a file.');
      return;
    }

    if (fileExists) {
      const confirmOverwrite = window.confirm(
        "A file with the same title, category, and description exists. Would you like to overwrite it?"
      );

      if (confirmOverwrite) {
        // Proceed with normal upload for overwrite
        await handleFileUpload(event);
      } else {
        // Create a new filename with timestamp to ensure uniqueness
        const timestamp = new Date().getTime();
        const fileExtension = selectedFile.name.split('.').pop();
        const newFilename = `${selectedFile.name.split('.')[0]}_${timestamp}.${fileExtension}`;
        
        // Create a new File object with the renamed filename
        const renamedFile = new File([selectedFile], newFilename, { 
          type: selectedFile.type 
        });
        
        // Update the selected file and upload
        setSelectedFile(renamedFile);
        
        // Create new FormData with renamed file
        const formData = new FormData();
        formData.append("file", renamedFile);
        formData.append("title", `${title} (${timestamp})`);
        formData.append("category", category);
        formData.append("description", description);

        try {
          await axios.post('http://localhost:8000/docs/upload', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
          });
          alert('File uploaded successfully with new name');
          await fetchDocFiles();
          // Reset form
          setSelectedFile(null);
          setTitle('');
          setCategory('');
          setDescription('');
          setFileExists(false);
          
          // Reset file input
          const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
          if (fileInput) fileInput.value = '';
        } catch (error) {
          console.error('Error uploading renamed file:', error);
          alert('File upload failed');
        }
      }
    } else {
      // If no file exists with same details, proceed with normal upload
      await handleFileUpload(event);
    }
  };

  const handleEdit = (title: string, description: string, category: string) => {
    // First, scroll to the upload form
    const uploadForm = document.querySelector('#upload-form');
    if (uploadForm) {
      uploadForm.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Set the form data
    setTitle(title);
    setCategory(category);
    setDescription(description);
    
    // Check if file exists with these details
    checkFileExists();
    
    // Optional: Provide visual feedback
    const feedbackMessage = document.createElement('div');
    feedbackMessage.textContent = 'Form populated with document details';
    feedbackMessage.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg';
    document.body.appendChild(feedbackMessage);
    
    // Remove the feedback message after 3 seconds
    setTimeout(() => {
      feedbackMessage.remove();
    }, 3000);
  };

  interface DeleteInfo {
    title: string;
    description: string;
    category: string;
  }
  
  // Add these state declarations with your other state
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [deleteInfo, setDeleteInfo] = useState<DeleteInfo | null>(null);
  
  // Update the delete handlers
  const handleDelete = (title: string, description: string, category: string) => {
    setDeleteInfo({ title, description, category });
    setDeleteModalOpen(true);
  };
  
  const handleConfirmDelete = async (): Promise<void> => {
    if (!deleteInfo) return;
    
    try {
      const response = await axios.post('http://localhost:8000/docs/delete', {
        title: deleteInfo.title,
        category: deleteInfo.category,
        description: deleteInfo.description
      });
      
      if (response.status === 200) {
        await fetchDocFiles();
        alert('File deleted successfully');
      }
    } catch (error) {
      console.error('Error deleting file:', error);
      alert('Failed to delete file');
    }
  };

  return (
    <section className="py-5 w-full text-white">
      <div className="px-4 mx-auto max-w-96">
        {!isLoggedIn ? (
          <form onSubmit={handleLogin} className="text-center mt-4">
            <h2 className="text-2xl font-bold">Login</h2>
            <div className="my-2 text-black">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>
            <div className="my-2 text-black">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white rounded p-2 w-full">
              Login
            </button>
          </form>
        ) : (
          <>
            <div className="text-white text-center text-4xl font-extrabold">File Manager</div>
            <form onSubmit={handleOverwriteOrRename} className="mt-4 text-black space-y-4">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border border-gray-300 rounded p-2 w-full"
                required
              />
              <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border border-gray-300 rounded p-2 w-full"
                required
              />
              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border border-gray-300 rounded p-2 w-full"
                rows={3}
                required
              ></textarea>
              <input
                type="file"
                onChange={handleFileChange}
                className="border border-gray-300 rounded p-2"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-white rounded p-2 w-full"
              >
                {fileExists ? 'Upload (Overwrite/Rename)' : 'Upload'}
              </button>
            </form>
            <div className="mt-8">
              <h2 className="text-2xl font-bold">Uploaded Files</h2>
              <ul className="mt-4 list-disc pl-5">
                {docFiles.map((file, index) => (
                  <li key={index} className="text-white">
                    <strong>Title:</strong> {file.title}<br />
                    <strong>Category:</strong> {file.category}<br />
                    <strong>Description:</strong> {file.description}<br />
                    <strong>Filename:</strong> {file.filename} <br/>
                    <button className=' p-2 bg-green-700 hover:bg-green-800' onClick={() => handleEdit(file.title,file.description,file.category)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </button>
                    <button className=' p-2 bg-rose-700 hover:bg-rose-900' onClick={() => handleDelete(file.title, file.description, file.category)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>

        {deleteInfo && (
            <DeleteConfirmationModal
                isOpen={deleteModalOpen}
                onClose={() => {
                setDeleteModalOpen(false);
                setDeleteInfo(null);
                }}
                onConfirm={handleConfirmDelete}
                title={deleteInfo.title}
                description={deleteInfo.description}
                category={deleteInfo.category}
            />
        )}
    </section>
  );
}

export default DocsEditPage;