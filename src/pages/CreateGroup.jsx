import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import Swal from 'sweetalert2';

const CreateGroup = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleCreateGroup = async e => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const newGroup = {
      groupName: form.groupName.value,
      category: form.category.value,
      description: form.description.value,
      location: form.location.value,
      maxMembers: parseInt(form.maxMembers.value),
      startDate: form.startDate.value,
      imageUrl: form.imageUrl.value,
      userName: user.displayName,
      userEmail: user.email,
    };

    try {
      const res = await fetch('http://localhost:5000/groups', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newGroup),
      });
      const data = await res.json();

      if (data.insertedId) {
        Swal.fire('Success!', 'Group created successfully!', 'success');
        form.reset();
      }
    } catch (error) {
      Swal.fire('Error!', 'Something went wrong!', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Create a New Group</h2>
      <form onSubmit={handleCreateGroup} className="space-y-4">
        <input
          name="groupName"
          type="text"
          placeholder="Group Name"
          required
          className="input input-bordered w-full"
        />
        <select
          name="category"
          required
          className="select select-bordered w-full"
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
          placeholder="Description"
          required
          className="textarea textarea-bordered w-full"
        ></textarea>
        <input
          name="location"
          type="text"
          placeholder="Meeting Location"
          required
          className="input input-bordered w-full"
        />
        <input
          name="maxMembers"
          type="number"
          placeholder="Max Members"
          required
          className="input input-bordered w-full"
        />
        <input
          name="startDate"
          type="date"
          required
          className="input input-bordered w-full"
        />
        <input
          name="imageUrl"
          type="text"
          placeholder="Image URL"
          required
          className="input input-bordered w-full"
        />
        <input
          type="text"
          value={user?.displayName}
          readOnly
          className="input input-bordered w-full bg-gray-100"
        />
        <input
          type="email"
          value={user?.email}
          readOnly
          className="input input-bordered w-full bg-gray-100"
        />
        <button
          disabled={loading}
          type="submit"
          className="btn btn-primary w-full"
        >
          {loading ? 'Creating...' : 'Create Group'}
        </button>
      </form>
    </div>
  );
};

export default CreateGroup;
