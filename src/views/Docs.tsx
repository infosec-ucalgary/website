import { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DocCard from '../components/DocCard';
import MarkdownRenderer from '../components/MarkdownRender';

function Docs() {
  const [docFiles, setDocFiles] = useState<string[]>([]);
  const [dFile, setDFile] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    fetchDocFiles();
  }, []);

  const fetchDocFiles = async () => {
    try {
      const response = await axios.get('http://localhost:8000/docs');
      console.log(response.data);
      setDocFiles(response.data);
    } catch (error) {
      console.error('Error fetching doc files:', error);
    }
  };

  const fetchFile = async (file: string) => {
    try {
      const response = await axios.get(`http://localhost:8000/docs/${encodeURIComponent(file)}`);
      console.log(response.data);
      setDFile(response.data);
    } catch (error) {
      console.error('Error fetching doc file contents:', error);
    }
  };
  

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleFileUpload = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedFile) {
      alert('Please select a file to upload');
      return;
    }
    
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      await axios.post('http://localhost:8000/docs/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('File uploaded successfully');
      fetchDocFiles();  // Refresh the document list
      setSelectedFile(null); // Reset the file input
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleFileClick = (file : string) => {
    fetchFile(file);
  };

  return (
    <section className="py-5 w-full">
      <div className="container mx-auto px-4">
        <div className="text-white text-center text-4xl font-extrabold">
          Docs
        </div>
        <form onSubmit={handleFileUpload} className="mt-4">
          <input 
            type="file" 
            onChange={handleFileChange} 
            className="border border-gray-300 rounded p-2"
          />
          <button 
            type="submit" 
            className="ml-2 bg-blue-500 text-white rounded p-2"
          >
            Upload
          </button>
        </form>
        
        {dFile ? (
          <div className="mt-8 bg-gray-800 p-4 rounded text-white">
            <MarkdownRenderer markdownText={dFile}  />
            <button
              onClick={() => setDFile("")}
              className=" mt-10 p-2 bg-like-lavendar rounded-md text-black"
            >
              Back
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {docFiles.map((file, index) => (
              <DocCard key={index} title={file} description="test" category="test" link={() => handleFileClick(file)} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Docs;
