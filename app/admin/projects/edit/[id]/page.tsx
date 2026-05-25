'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import TiptapEditor from '@/components/TiptapEditor';
import { JSONContent } from '@tiptap/react';

export default function EditProjectPage() {

  const params = useParams();

  const id = params.id as string;

  const [title, setTitle] = useState('');
  const [content, setContent] =
    useState<JSONContent>({
      type: 'doc',
      content: [],
    });

  const [thumbnailImage, setThumbnailImage] =
    useState('');

  const [thumbnail, setThumbnail] =
    useState<File | null>(null);

  const [loading, setLoading] =
    useState(false);

  // fetch project
  useEffect(() => {

    async function fetchProject() {

      const res = await fetch(
        `/api/admin/projects/${id}`
      );

      const data = await res.json();

      setTitle(data.title);

      setContent(data.content);

      setThumbnailImage(
        data.thumbnailImage
      );
    }

    if (id) {
      fetchProject();
    }

  }, [id]);

  // update project
  const handleUpdate = async () => {

    try {

      setLoading(true);

      let imageUrl = thumbnailImage;

      // upload new thumbnail
      if (thumbnail) {

        const formData = new FormData();

        formData.append('file', thumbnail);

        const uploadRes = await fetch(
          '/api/upload',
          {
            method: 'POST',
            body: formData,
          }
        );

        const uploadData =
          await uploadRes.json();

        imageUrl = uploadData.url;
      }

      // update project
      const res = await fetch(
        `/api/admin/projects/${id}`,
        {
          method: 'PUT',

          headers: {
            'Content-Type':
              'application/json',
          },

          body: JSON.stringify({
            title,
            content,
            thumbnailImage: imageUrl,
          }),
        }
      );

      const data = await res.json();

      console.log(data);

      alert('Project updated');

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

        <h1 className="text-5xl font-bold">
          Edit Project
        </h1>

        {/* Title */}
        <input
          type="text"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="w-full bg-[#111] border border-white/10 rounded-2xl px-6 py-5 text-2xl"
        />

        {/* Thumbnail */}
        <div className="space-y-4">

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setThumbnail(
                e.target.files?.[0] || null
              )
            }
          />

          {(thumbnailImage || thumbnail) && (
            <div className="relative w-full h-72 rounded-2xl overflow-hidden">

              <Image
                src={
                  thumbnail
                    ? URL.createObjectURL(
                        thumbnail
                      )
                    : thumbnailImage
                }
                alt="Thumbnail"
                fill
                sizes="100vw"
                className="object-cover"
              />

            </div>
          )}
        </div>

        {/* Editor */}
        <TiptapEditor
          content={content}
          onChange={(value) =>
            setContent(
              value as JSONContent
            )
          }
        />

        {/* Button */}
        <button
          onClick={handleUpdate}
          disabled={loading}
          className="bg-white text-black px-8 py-4 rounded-full font-bold"
        >
          {loading
            ? 'Updating...'
            : 'Update Project'}
        </button>

      </div>
    </div>
  );
}