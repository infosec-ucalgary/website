import { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DocCard from '../components/DocCard';
import MarkdownRenderer from '../components/MarkdownRender';

interface DocFile {
  title: string;
  description: string;
  category: string;
  filename: string;
}

function Docs() {
  const [docFiles, setDocFiles] = useState<DocFile[]>([]);
  const [selectedDoc, setSelectedDoc] = useState<{
    content: string;
    metadata: DocFile | null;
  }>({ content: "", metadata: null });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    fetchDocFiles();
  }, []);

  const fetchDocFiles = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get('/api/docs');
      setDocFiles(response.data);
    } catch (error) {
      console.error('Error fetching doc files:', error);
      setError('Failed to load document list. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const fetchFile = async (doc: DocFile) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(
        `/api/docs/${encodeURIComponent(doc.filename)}`, 
        { responseType: 'text' }
      );
      setSelectedDoc({
        content: response.data,
        metadata: doc
      });
    } catch (error) {
      console.error('Error fetching doc file contents:', error);
      setError('Failed to load document content. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    setSelectedDoc({ content: "", metadata: null });
    setError(null);
  };

  // Group documents by category
  const groupedDocs = docFiles.reduce((acc: Record<string, DocFile[]>, doc) => {
    const category = doc.category || 'Uncategorized';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(doc);
    return acc;
  }, {});

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-like-lavendar"></div>
      </div>
    );
  }

  return (
    <section className="py-5 w-full min-h-screen bg-gray-900">
      <div className="px-4 max-w-7xl mx-auto">
        <h1 className="text-white text-center text-4xl font-extrabold mb-8">
          Documentation
        </h1>

        {error && (
          <div className="bg-red-500 text-white p-4 rounded-md mb-6">
            {error}
          </div>
        )}

        {selectedDoc.content ? (
          <div 
            className="mt-8 bg-gray-800 p-6 rounded-lg text-white"
            data-aos="fade-up"
          >
            {selectedDoc.metadata && (
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">{selectedDoc.metadata.title}</h2>
                <p className="text-gray-400 mb-2">{selectedDoc.metadata.description}</p>
                <span className="inline-block bg-like-lavendar text-black px-3 py-1 rounded-full text-sm">
                  {selectedDoc.metadata.category}
                </span>
              </div>
            )}
            <div className="prose prose-invert max-w-none">
              <MarkdownRenderer markdownText={selectedDoc.content} />
            </div>
            <button
              onClick={handleBack}
              className="mt-8 px-6 py-2 bg-like-lavendar rounded-md text-black hover:bg-opacity-90 transition-colors"
            >
              Back to Documents
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {Object.entries(groupedDocs).map(([category, docs]) => (
              <div key={category} data-aos="fade-up">
                <h2 className="text-white text-2xl font-bold mb-4 pl-2">
                  {category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {docs.map((doc, index) => (
                    <DocCard
                      key={`${doc.filename}-${index}`}
                      title={doc.title}
                      description={doc.description}
                      category={doc.category}
                      link={() => fetchFile(doc)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Docs;