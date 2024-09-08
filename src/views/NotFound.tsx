import React from "react";
import Layout from "../components/Layout";

const NotFound: React.FC = () => {
  return (
    <Layout>
      
        <div className="text-center">
          <h1>404 - Not Found</h1>
          <p>The page you're looking for does not exist.</p>
        </div>
    
    </Layout>
  );
};

export default NotFound;
