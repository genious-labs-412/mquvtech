'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import TiptapEditor from '@/components/TiptapEditor';
import { useParams } from 'next/navigation';

export default function EditProjectPage() {

    const params = useParams();

    const id = params.id;

    const [title, setTitle] = useState('');
    const [content, setContent] = useState({});
    const [thumbnailImage, setThumbnailImage] = useState('');

    const [loading, setLoading] = useState(false);

    // fetch project
    useEffect(() => {

        const fetchProject = async () => {

            const res = await fetch(`/api/projects/${id}`, {
                cache: 'no-store',
            })

            const data = await res.json();

            setTitle(data.title);
            setContent(data.content);
            setThumbnailImage(data.thumbnailImage);

        };

        if (id) {
            fetchProject();
        }

    }, [id]);

    // update project
    const handleUpdate = async () => {

        try {

            setLoading(true);

            const res = await fetch(`/api/projects/${id}`, {

                method: 'PUT',

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

            alert('Project Updated');

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

                {/* title */}
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-[#111] border border-white/10 rounded-2xl px-6 py-5 text-2xl"
                />

                {/* thumbnail preview */}
                {thumbnailImage && (

                    <div className="relative w-full h-72 rounded-2xl overflow-hidden">

                        <Image
                            src={thumbnailImage}
                            alt="Thumbnail"
                            fill
                            className="object-cover"
                        />

                    </div>

                )}

                {/* editor */}
                <TiptapEditor
                    content={content}
                    onChange={setContent}
                />

                <button
                    onClick={handleUpdate}
                    disabled={loading}
                    className="bg-white text-black px-8 py-4 rounded-full"
                >
                    {loading ? 'Updating...' : 'Update Project'}
                </button>

            </div>
        </div>
    );
}