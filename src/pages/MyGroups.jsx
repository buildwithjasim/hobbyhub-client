import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
const MyGroup = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

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
              setGroups(prev => prev.filter(group => group._id !== id));
            }
          });
      }
    });
  };

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

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="table w-full">
          <thead className="bg-indigo-100 text-indigo-700">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Start Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {groups.map(group => (
              <tr key={group._id} className="hover:bg-gray-50">
                <td>
                  <img
                    src={group.image}
                    alt={group.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="font-semibold">{group.name}</td>
                <td className="line-clamp-2 text-gray-600">
                  {group.description}
                </td>
                <td>{group.category}</td>
                <td>{new Date(group.startDate).toLocaleDateString()}</td>
                <td>
                  <div className="flex gap-2">
                    <Link
                      to={`/group/${group._id}`}
                      className="btn btn-sm bg-indigo-500 text-white hover:bg-indigo-600"
                    >
                      View
                    </Link>
                    <Link
                      to={`/update-group/${group._id}`}
                      className="btn btn-sm bg-yellow-500 text-white hover:bg-yellow-600"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(group._id)}
                      className="btn btn-sm bg-red-500 text-white hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyGroup;
