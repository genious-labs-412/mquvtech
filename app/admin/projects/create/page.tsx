'use client';

import { useState } from 'react';
import Image from 'next/image';
import TiptapEditor from '@/components/TiptapEditor';
import { JSONContent } from '@tiptap/react';


export default function CreateProjectPage() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState<JSONContent>({
    type: 'doc',
    content: [],
  });
  const [thumbnail, setThumbnail] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {

    try {

      setLoading(true);

      let thumbnailImage = '';

      // upload thumbnail
      if (thumbnail) {

        const formData = new FormData();

        formData.append('file', thumbnail);

        const uploadRes = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        const uploadData = await uploadRes.json();

        thumbnailImage = uploadData.url;
      }

      // save project
      const res = await fetch('/api/admin/projects', {

        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          title,
          content,
          thumbnailImage,
        }),
      });

      const data = await res.json();

      console.log(data);

      alert('Project Created Successfully');

      setTitle('');
      setContent({});
      setThumbnail(null);

    } catch (error) {

      console.log(error);

      alert('Something went wrong');

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <div className="max-w-5xl mx-auto space-y-8">

        {/* Header */}
        <div>
          <h1 className="text-5xl font-bold">
            Create Project
          </h1>

          <p className="text-white/40 mt-2">
            Add a new portfolio project
          </p>
        </div>

        {/* Title */}
        <div className="space-y-3">

          <label className="text-sm text-white/50">
            Project Title
          </label>

          <input
            type="text"
            placeholder="Enter project title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-[#111] border border-white/10 rounded-2xl px-6 py-5 text-2xl focus:outline-none focus:border-blue-500"
          />

        </div>

        {/* Thumbnail */}
        <div className="space-y-4">

          <label className="text-sm text-white/50">
            Thumbnail Image
          </label>

          <div className="border border-dashed border-white/10 rounded-3xl p-8 bg-[#0a0a0a]">

            <label className="cursor-pointer flex flex-col items-center justify-center gap-4">

              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) =>
                  setThumbnail(
                    e.target.files?.[0] || null
                  )
                }
              />

              {thumbnail ? (

                <div className="relative w-full h-72 rounded-2xl overflow-hidden">

                  <Image
                    src={URL.createObjectURL(thumbnail)}
                    alt="Thumbnail Preview"
                    fill
                    className="object-cover"
                  />

                </div>

              ) : (

                <div className="text-center">

                  <p className="text-white/40">
                    Click to upload thumbnail
                  </p>

                  <p className="text-xs text-white/20 mt-2">
                    PNG, JPG, WEBP
                  </p>

                </div>
              )}

            </label>

          </div>

        </div>

        {/* Editor */}
        <div className="space-y-3">

          <label className="text-sm text-white/50">
            Project Content
          </label>

          <TiptapEditor
            onChange={(value) => setContent(value as JSONContent)}
            content={content}
          />

        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-neutral-200 transition disabled:opacity-50"
        >
          {loading ? 'Publishing...' : 'Publish Project'}
        </button>

      </div>
    </div>
  );
}