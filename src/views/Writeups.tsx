import { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import WriteupCard from "../components/WriteupCard";
import MarkdownRenderer from "../components/MarkdownRender";
import { WriteupFile } from "./WriteupsEdit";

const api =
  process.env.NODE_ENV === "production" ? "/api" : "http://localhost:8000";

function Writeups() {
  const [writeupFiles, setWriteFiles] = useState<WriteupFile[]>([]);
  const [selectedWrite, setSelectedWrite] = useState<{
    content: string;
    metadata: WriteupFile | null;
  }>({ content: "", metadata: null });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    fetchWriteupFiles();
  }, []);

  const fetchWriteupFiles = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${api}/writeups`);
      setWriteFiles(response.data);
    } catch (error) {
      console.error("Error fetching doc files:", error);
      setError("Failed to load document list. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const fetchFile = async (doc: WriteupFile) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(
        `${api}/writeups/${encodeURIComponent(doc.filename)}`,
        { responseType: "text" },
      );
      setSelectedWrite({
        content: response.data,
        metadata: doc,
      });
    } catch (error) {
      console.error("Error fetching doc file contents:", error);
      setError("Failed to load document content. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    setSelectedWrite({ content: "", metadata: null });
    setError(null);
  };

  // Group documents by category
  const groupedWriteups = writeupFiles.reduce(
    (acc: Record<string, WriteupFile[]>, doc) => {
      const category = doc.category || "Uncategorized";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(doc);
      return acc;
    },
    {},
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-like-lavendar"></div>
      </div>
    );
  }

  return (
    <section className="py-5 w-full min-h-screen">
      <div className="px-4 max-w-7xl mx-auto">
        {error && (
          <div className="bg-red-500 text-white p-4 rounded-md mb-6">
            {error}
          </div>
        )}

        {selectedWrite.content ? (
          <div
            className="mt-8 bg-gray-800 p-6 rounded-lg text-white"
            data-aos="fade-up"
          >
            {selectedWrite.metadata && (
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">
                  {selectedWrite.metadata.title}
                </h2>
                <strong>{selectedWrite.metadata.author}</strong>
                <p className="text-gray-400 mb-2">
                  {selectedWrite.metadata.description}
                </p>
                <span className="inline-block bg-like-lavendar text-black px-3 py-1 rounded-full text-sm">
                  {selectedWrite.metadata.category}
                </span>
              </div>
            )}
            <div className="prose prose-invert max-w-none">
              <MarkdownRenderer markdownText={selectedWrite.content} />
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
            {Object.entries(groupedWriteups).map(([category, writeups]) => (
              <div key={category} data-aos="fade-up">
                <h2 className="text-white text-2xl font-bold mb-4 pl-2">
                  {category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {writeups.map((writeup, index) => (
                    <WriteupCard
                      key={`${writeup.filename}-${index}`}
                      title={writeup.title}
                      author={writeup.author}
                      description={writeup.description}
                      category={writeup.category}
                      link={() => fetchFile(writeup)}
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

export default Writeups;
