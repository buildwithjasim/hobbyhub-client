import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyGroups = () => {
  const { user } = useContext(AuthContext);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myGroups?email=${user.email}`)
      .then(res => res.json())
      .then(data => setGroups(data));
  }, [user.email]);

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This will permanently delete the group.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/groups/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              setGroups(groups.filter(group => group._id !== id));
              Swal.fire('Deleted!', 'Group has been deleted.', 'success');
            }
          });
      }
    });
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">My Created Groups</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Group Name</th>
              <th>Category</th>
              <th>Start Date</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {groups.map(group => (
              <tr key={group._id}>
                <td>{group.groupName}</td>
                <td>{group.category}</td>
                <td>{new Date(group.startDate).toDateString()}</td>
                <td>{group.location}</td>
                <td className="space-x-2">
                  <Link to={`/updateGroup/${group._id}`}>
                    <button className="btn btn-sm btn-warning">Update</button>
                  </Link>
                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => handleDelete(group._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {groups.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            You haven't created any groups yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyGroups;
