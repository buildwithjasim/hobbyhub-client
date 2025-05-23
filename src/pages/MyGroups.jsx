import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Loader2 } from 'lucide-react';

import Swal from 'sweetalert2';

const MyGroup = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won’t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/groups/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your group has been deleted.', 'success');
              setGroups(groups.filter(group => group._id !== id));
            }
          });
      }
    });
  };

  useEffect(() => {
    fetch('http://localhost:3000/groups')
      .then(res => res.json())
      .then(data => {
        setGroups(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <Loader2 className="animate-spin text-indigo-600 w-10 h-10" />
      </div>
    );
  }

  if (groups.length === 0) {
    return (
      <div className="text-center text-gray-500 py-10">
        <p>No groups created yet.</p>
        <Link
          to="/create-group"
          className="text-indigo-600 underline mt-4 block"
        >
          Create One
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">
        My Groups
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, index) => (
          <motion.div
            key={group._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl duration-300"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {group.name}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {group.description}
              </p>

              <div className="flex justify-between items-center">
                <Link
                  to={`/group/${group._id}`}
                  className="text-indigo-600 hover:underline"
                >
                  View
                </Link>
                <div className="flex gap-3">
                  <Link
                    to={`/update-group/${group._id}`}
                    className="px-3 py-1 rounded-md bg-indigo-500 text-white text-sm hover:bg-indigo-600"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(group._id)}
                    className="px-3 py-1 rounded-md bg-red-500 text-white text-sm hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyGroup;
