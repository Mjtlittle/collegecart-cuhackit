import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  return (
    <div className="App">
      <form>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
  
          <input
            type="file"
            value={selectedFile}
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
        </form>
      </div>
    )
  }

  const FileUploader = ({onFileSelect}) => {
      const fileInput = useRef(null)
      const handleFileInput = (e) => {
        onFileSelect(e.target.files[0])
      }
      return(
        <div className="file-uploader">
          <input type='file' onChange={handleFileInput}>
          </input>
        </div>
      )

  }

