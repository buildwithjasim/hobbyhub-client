import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import { Loader2 } from 'lucide-react';

const CreateGroup = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCreateGroup = e => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const groupName = form.groupName.value;
    const category = form.category.value;
    const description = form.description.value;
    const location = form.location.value;
    const maxMembers = form.maxMembers.value;
    const startDate = form.startDate.value;
    const image = form.image.value;

    const groupData = {
      groupName,
      category,
      description,
      location,
      maxMembers: parseInt(maxMembers),
      startDate,
      image,
      userName: user.displayName,
      userEmail: user.email,
    };

    fetch('https://hobbyhub-server-eight.vercel.app/groups', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(groupData),
    })
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        if (data.insertedId || data.acknowledged) {
          Swal.fire({
            icon: 'success',
            title: 'Group Created!',
            text: 'Your hobby group has been successfully created.',
          });
          form.reset();
          navigate('/myGroups');
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Something went wrong while creating the group.',
          });
        }
      })
      .catch(err => {
        setLoading(false);
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: err.message,
        });
      });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <Loader2 className="animate-spin text-indigo-600 w-10 h-10" />
      </div>
    );
  }
  return (
    <div className="max-w-3xl mx-auto p-4 bg-base-300 rounded-xl shadow-lg m-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        Create a New Group
      </h2>
      <form onSubmit={handleCreateGroup} className="space-y-4">
        <input
          type="text"
          name="groupName"
          placeholder="Group Name"
          className="input input-bordered w-full"
          required
        />
        <select
          name="category"
          className="select select-bordered w-full"
          required
        >
          <option disabled selected>
            Select Hobby Category
          </option>
          <option>Drawing & Painting</option>
          <option>Photography</option>
          <option>Video Gaming</option>
          <option>Fishing</option>
          <option>Running</option>
          <option>Cooking</option>
          <option>Reading</option>
          <option>Writing</option>
        </select>
        <textarea
          name="description"
          placeholder="Group Description"
          className="textarea textarea-bordered w-full"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Meeting Location"
          className="input input-bordered w-full"
          required
        />
        <input
          type="number"
          name="maxMembers"
          placeholder="Max Members"
          className="input input-bordered w-full"
          required
        />
        <input
          type="date"
          name="startDate"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="input input-bordered w-full"
          required
        />

        <input
          type="text"
          value={user.displayName}
          readOnly
          className="input input-bordered w-full bg-gray-100"
        />
        <input
          type="email"
          value={user.email}
          readOnly
          className="input input-bordered w-full bg-gray-100"
        />

        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create Group'}
        </button>
      </form>
    </div>
  );
};

export default CreateGroup;
