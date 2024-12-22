import React, { useRef } from "react";
import { useDropzone } from "react-dropzone";

const SelectImage = (props) => {
  const { required, name } = props;

  const hiddenInputRef = useRef(null);

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop: (incomingFiles) => {
      if (hiddenInputRef.current) {
        // Munge the file into the hidden input field
        const dataTransfer = new DataTransfer();
        incomingFiles.forEach((v) => {
          dataTransfer.items.add(v);
        });
        hiddenInputRef.current.files = dataTransfer.files;
      }
    },
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="container border-2 text-center rounded-xl">
      <div {...getRootProps({ className: "dropzone" })}>
        {/* Hidden input for form submission */}
        <input
          type="file"
          name="photo"
          required={required}
          style={{ display: "none" }}
          ref={hiddenInputRef}
        />
        {/* Dropzone input */}
        <input {...getInputProps()} />
        <p>Drag & drop an image here</p>
        <div className="flex justify-center">
          <div className="divider border-none w-1/2 flex">or</div>
        </div>
        <button type="button" className="btn">
          Select Image
        </button>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </div>
  );
};

export default SelectImage;
