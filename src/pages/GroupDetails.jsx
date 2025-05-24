import { useNavigate, useParams } from 'react-router';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import Swal from 'sweetalert2';

const GroupDetails = () => {
  const { id } = useParams();
  const [group, setGroup] = useState(null);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://hobbyhub-server-eight.vercel.app/groups/${id}`)
      .then(res => res.json())
      .then(data => setGroup(data));
  }, [id]);

  if (!group) {
    return (
      <div className="text-center py-20 text-gray-500">Group not found.</div>
    );
  }

  const startDatePassed = new Date(group.startDate) < new Date();

  const handleJoin = () => {
    Swal.fire({
      icon: 'success',
      title: 'successfully joined!',
      text: 'You are successfully joined.',
    });
    navigate('/groups');
  };
  return (
    <div className="max-w-3xl mx-auto p-6 bg-base-200 shadow-xl m-10 rounded-2xl">
      <img
        src={group.image}
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
