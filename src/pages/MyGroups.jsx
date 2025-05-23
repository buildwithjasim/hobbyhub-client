import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Loader2 } from 'lucide-react';
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

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto rounded-lg shadow">
        <table className="w-full text-left border-collapse">
          <thead className="bg-indigo-100 text-indigo-700">
            <tr>
              <th className="p-3">Image</th>
              <th className="p-3">Name</th>
              <th className="p-3">Description</th>
              <th className="p-3">Category</th>
              <th className="p-3">Start Date</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {groups.map(group => (
              <tr key={group._id} className="hover:bg-gray-50">
                <td className="p-3">
                  <img
                    src={group.image}
                    alt={group.groupName}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="p-3 font-semibold">{group.groupName}</td>
                <td className="p-3 text-gray-600 line-clamp-2">
                  {group.description}
                </td>
                <td className="p-3">{group.category}</td>
                <td className="p-3">
                  {new Date(group.startDate).toLocaleDateString()}
                </td>
                <td className="p-3">
                  <div className="flex gap-2">
                    <Link
                      to={`/group/${group._id}`}
                      className="btn btn-sm bg-indigo-500 text-white hover:bg-indigo-600"
                    >
                      Info
                    </Link>
                    <Link
                      to={`/updateGroup/${group._id}`}
                      className="btn btn-sm bg-yellow-500 text-white hover:bg-yellow-600"
                    >
                      Update
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

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {groups.map(group => (
          <div
            key={group._id}
            className="bg-white p-4 rounded-lg shadow space-y-2"
          >
            <div className="flex gap-4 items-center">
              <img
                src={group.image}
                alt={group.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h2 className="text-lg font-semibold text-indigo-700">
                  {group.groupName}
                </h2>
                <p className="text-sm text-gray-600">{group.category}</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm">{group.description}</p>
            <p className="text-sm text-gray-500">
              Start Date: {new Date(group.startDate).toLocaleDateString()}
            </p>
            <div className="flex gap-2 justify-end">
              <Link
                to={`/group/${group._id}`}
                className="btn btn-xs bg-indigo-500 text-white hover:bg-indigo-600"
              >
                Info
              </Link>
              <Link
                to={`/updateGroup/${group._id}`}
                className="btn btn-xs bg-yellow-500 text-white hover:bg-yellow-600"
              >
                Update
              </Link>
              <button
                onClick={() => handleDelete(group._id)}
                className="btn btn-xs bg-red-500 text-white hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyGroup;
