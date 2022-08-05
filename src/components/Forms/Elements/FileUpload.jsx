import React, { useMemo, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  minHeight: "150px",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
  cursor: "pointer",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};
const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const closeButton = {
  position: "absolute",
  marginLeft: "62px",
  backgroundColor: "transparent",
  color: "black",
  border: "none",
  cursor: "pointer",
};

const previewStyle = {
  marginTop: "5px",
  // minHeight:'125px',
  color: "#bdbdbd",
};
const dropHeaderStyle = {
  color: "#000",
  fontSize: "20px",
  opacity: "1",
  fontWeight: "300",
  textAlign: "center",
};
const dropTextStyle = {
  color: "#bdbdbd",
  fontSize: "16px",
  textAlign: "center",
};

function FileUpload(props) {
  const [files, setFiles] = useState([]);
  const [hasFileUploaded, setHasFileUploaded] = useState(false);
  const [fileLimitPrompt, setFileLimitPrompt] = useState(false);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      let temp_file = files;
      temp_file.push(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      setFiles(temp_file);
      setHasFileUploaded(true);
    },
  });

  const removeFile = (file, e) => () => {
    let removefile = files.splice(files.indexOf(file), 1);
    let leftFiles = files
      .map((i) => i[0].path)
      .filter(function (val) {
        return removefile.map((i) => i[0].path).indexOf(val) == -1;
      });
    leftFiles.forEach(leftImages);
    if (imagesLeft.length === 0) {
      setHasFileUploaded(false);
    }
    setFiles(imagesLeft);
    e.stopProgagation();
  };
  let imagesLeft = [];
  function leftImages(leftFile) {
    let newArray = files.filter((item) => item[0].path == leftFile);
    newArray.map((val) => {
      imagesLeft.push(val);
    });
  }

  const thumbs = files.map((file) => (
    <div style={thumb} key={file[0].name} className="thumb">
      <div style={thumbInner}>
        <img src={file[0].preview} style={img} />
      </div>
      <button style={closeButton} onClick={removeFile(file)}>
        <i className="pg-icon ">close</i>
      </button>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  return (
    <section className="container file-upload">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        {hasFileUploaded ? (
          <div className="w-100 d-flex files">
            <aside>
              {/* <p style={previewStyle}>Uploaded file shows here</p> */}
              {thumbs}
            </aside>
          </div>
        ) : (
          <div>
            <p style={dropHeaderStyle}>
              Drop files <strong>to upload</strong>
            </p>
            <p style={dropTextStyle}>or click here</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default FileUpload;
