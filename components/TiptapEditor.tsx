'use client';

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import { useEffect } from 'react';

type Props = {
  content: object;
  onChange: (value: object) => void;
};

export default function TiptapEditor({
  content,
  onChange,
}: Props) {

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
    ],

    content,

    editorProps: {
      attributes: {
        class:
          'min-h-[400px] border border-white/10 rounded-2xl p-6 focus:outline-none text-white',
      },
    },

    onUpdate({ editor }) {
      onChange(editor.getJSON());
    },
  });

  useEffect(() => {

    if (
      editor &&
      content &&
      JSON.stringify(editor.getJSON()) !== JSON.stringify(content)
    ) {

      editor.commands.setContent(content);

    }

  }, [content, editor]);


  // image upload
  const addImage = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    const file = e.target.files?.[0];

    if (!file || !editor) return;

    const formData = new FormData();

    formData.append('file', file);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();

    editor
      .chain()
      .focus()
      .setImage({
        src: data.url,
      })
      .run();
  };

  return (
    <div className="space-y-4">

      {/* Upload Button */}
      <label className="bg-white text-black px-5 py-2 rounded-xl cursor-pointer inline-block">
        Upload Image

        <input
          type="file"
          accept="image/*"
          hidden
          onChange={addImage}
        />
      </label>

      <EditorContent editor={editor} />

    </div>
  );
}