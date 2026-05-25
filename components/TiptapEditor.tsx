'use client';

import { useEditor, EditorContent, Content } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';

interface TiptapEditorProps {
  content: Content;
  onChange: (value: Content) => void;
}

export default function TiptapEditor({
  content,
  onChange,
}: TiptapEditorProps) {

  const editor = useEditor({

    extensions: [
      StarterKit,
      Image,
    ],

    content,

    editorProps: {
      attributes: {
        class:
          'min-h-[400px] rounded-2xl border border-white/10 bg-[#111] p-6 text-white focus:outline-none prose prose-invert max-w-none',
      },
    },

    onUpdate({ editor }) {

      onChange(editor.getJSON());
    },
  });

  // add image manually
  const addImage = () => {

    const url = window.prompt('Enter image URL');

    if (url) {

      editor
        ?.chain()
        .focus()
        .setImage({ src: url })
        .run();
    }
  };

  if (!editor) {
    return null;
  }

  return (

    <div className="space-y-4">

      {/* Toolbar */}
      <div className="flex flex-wrap gap-3 border border-white/10 bg-[#0a0a0a] p-4 rounded-2xl">

        <button
          onClick={() =>
            editor.chain().focus().toggleBold().run()
          }
          className={`px-4 py-2 rounded-xl text-sm transition ${
            editor.isActive('bold')
              ? 'bg-white text-black'
              : 'bg-[#111] text-white'
          }`}
        >
          Bold
        </button>

        <button
          onClick={() =>
            editor.chain().focus().toggleItalic().run()
          }
          className={`px-4 py-2 rounded-xl text-sm transition ${
            editor.isActive('italic')
              ? 'bg-white text-black'
              : 'bg-[#111] text-white'
          }`}
        >
          Italic
        </button>

        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({
              level: 1,
            }).run()
          }
          className={`px-4 py-2 rounded-xl text-sm transition ${
            editor.isActive('heading', { level: 1 })
              ? 'bg-white text-black'
              : 'bg-[#111] text-white'
          }`}
        >
          H1
        </button>

        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({
              level: 2,
            }).run()
          }
          className={`px-4 py-2 rounded-xl text-sm transition ${
            editor.isActive('heading', { level: 2 })
              ? 'bg-white text-black'
              : 'bg-[#111] text-white'
          }`}
        >
          H2
        </button>

        <button
          onClick={() =>
            editor.chain().focus().toggleBulletList().run()
          }
          className={`px-4 py-2 rounded-xl text-sm transition ${
            editor.isActive('bulletList')
              ? 'bg-white text-black'
              : 'bg-[#111] text-white'
          }`}
        >
          Bullet List
        </button>

        <button
          onClick={() =>
            editor.chain().focus().toggleOrderedList().run()
          }
          className={`px-4 py-2 rounded-xl text-sm transition ${
            editor.isActive('orderedList')
              ? 'bg-white text-black'
              : 'bg-[#111] text-white'
          }`}
        >
          Ordered List
        </button>

        <button
          onClick={addImage}
          className="px-4 py-2 rounded-xl text-sm bg-blue-600 hover:bg-blue-500 transition"
        >
          Add Image
        </button>

      </div>

      {/* Editor */}
      <EditorContent editor={editor} />

    </div>
  );
}