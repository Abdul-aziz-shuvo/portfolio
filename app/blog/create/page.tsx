'use client'
import React, { FormEvent, useState } from "react";
import CkEditor from "@/app/components/CkEditor";
export default function page() {
  const [state, setState] = useState({
    title: '',
    content: ''
  });

  const [editorData, setEditorData] = useState<string>("");

  const handleOnUpdate = (editor: string, field: string): void => {
    if (field === "description") {
      console.log("Editor data field:", editor);
    }
  };


  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(state);
    await fetch('/api/blog/create', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    });
  }
  return <div>


    <div className="bg-white shadow-md rounded-lg w-full h-full p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Create a New Blog Post</h2>

      <form action="#" method="POST" onSubmit={(e) => onSubmit(e)} encType="multipart/form-data" className="space-y-6">

        <div>
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter blog title"
            className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={state.title} onChange={(e) => setState((state) => ({ ...state, title: e.target.value }))}
          />
        </div>


        <div>
          <label htmlFor="content" className="block text-gray-700 font-semibold mb-2">Content</label>
          <CkEditor
            editorData={editorData}
            setEditorData={setEditorData}
            handleOnUpdate={handleOnUpdate}
          />
        </div>

       


        <div>
          <button
            type="submit"
            className="shadow-lg bg-blue-950 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Publish Blog
          </button>
        </div>
      </form>
    </div>
  </div>;
}
