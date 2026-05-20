'use client';

import { useRouter } from 'next/navigation';

type Props = {
  id: string;
  api: string;
  message?: string;
};

export default function DeleteButton({
  id,
  api,
  message = 'Deleted successfully',
}: Props) {

  const router = useRouter();

  const handleDelete = async () => {

    const confirmDelete = confirm(
      'Are you sure?'
    );

    if (!confirmDelete) return;

    try {

      const res = await fetch(
        `${api}/${id}`,
        {
          method: 'DELETE',
        }
      );

      if (!res.ok) {
        throw new Error('Delete failed');
      }

      alert(message);

      router.refresh();

    } catch (error) {

      console.log(error);

      alert('Something went wrong');
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="border border-red-500/30 text-red-400 px-4 py-2 rounded-xl text-sm hover:bg-red-500/10 transition"
    >
      Delete
    </button>
  );
}