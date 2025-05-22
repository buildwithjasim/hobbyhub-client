import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';

const GroupDetails = () => {
  const { id } = useParams();
  const [group, setGroup] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/groups/${id}`)
      .then(res => res.json())
      .then(data => setGroup(data));
  }, [id]);

  const handleJoin = () => {
    const joinData = {
      groupId: group._id,
      userEmail: user.email,
      userName: user.displayName,
    };

    fetch('http://localhost:5000/joinGroup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(joinData),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire('Joined!', "You've joined the group!", 'success');
        } else {
          Swal.fire('Oops!', data.message || 'Could not join.', 'error');
        }
      });
  };

  if (!group) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  const startDatePassed = new Date(group.startDate) < new Date();

  return (
    <div className="max-w-3xl mx-auto p-6 bg-base-100 shadow-xl mt-10">
      <img
        src={group.imageUrl}
        alt={group.groupName}
        className="w-full h-60 object-cover rounded-lg mb-6"
      />
      <h2 className="text-3xl font-bold mb-4">{group.groupName}</h2>
      <p>
        <strong>Category:</strong> {group.category}
      </p>
      <p>
        <strong>Location:</strong> {group.location}
      </p>
      <p>
        <strong>Max Members:</strong> {group.maxMembers}
      </p>
      <p>
        <strong>Start Date:</strong> {new Date(group.startDate).toDateString()}
      </p>
      <p className="my-4">
        <strong>Description:</strong> {group.description}
      </p>
      {startDatePassed ? (
        <p className="text-red-500 font-semibold">
          This group is no longer active.
        </p>
      ) : (
        <button onClick={handleJoin} className="btn btn-primary mt-4">
          Join Group
        </button>
      )}
    </div>
  );
};

export default GroupDetails;
