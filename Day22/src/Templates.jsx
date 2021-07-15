import React from "react";

function Templates({ templates, setMeme }) {
  return (
    <div>
      {templates.map((template) => (
        <div
          key={template.id}
          className="template"
          onClick={() => setMeme(template)}
        >
          <div
            className="image"
            style={{
              backgroundImage: `url(${template.url})`,
            }}
          ></div>
        </div>
      ))}
    </div>
  );
}

export default Templates;
