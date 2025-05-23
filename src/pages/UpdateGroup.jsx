import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthProvider';
import Swal from 'sweetalert2';

const hobbyCategories = [
  'Drawing & Painting',
  'Photography',
  'Video Gaming',
  'Fishing',
  'Running',
  'Cooking',
  'Reading',
  'Writing',
];

const UpdateGroup = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [groupData, setGroupData] = useState({
    groupName: '',
    category: '',
    description: '',
    location: '',
    maxMembers: '',
    startDate: '',
    imageURL: '',
    userName: user?.displayName || '',
    userEmail: user?.email || '',
  });

  useEffect(() => {
    fetch(`http://localhost:3000/groups/${id}`)
      .then(res => res.json())
      .then(data => {
        setGroupData({
          groupName: data.groupName,
          category: data.category,
          description: data.description,
          location: data.location,
          maxMembers: data.maxMembers,
          startDate: data.startDate.split('T')[0], // format for input[type=date]
          imageURL: data.imageURL,
          userName: data.userName,
          userEmail: data.userEmail,
        });
      });
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setGroupData({ ...groupData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    fetch(`http://localhost:3000/groups/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(groupData),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: 'Group details updated successfully.',
            timer: 2000,
            showConfirmButton: false,
          });
          navigate('/myGroups');
        }
      });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Update Group</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="font-semibold mb-1">Group Name</label>
          <input
            type="text"
            name="groupName"
            value={groupData.groupName}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Hobby Category</label>
          <select
            name="category"
            value={groupData.category}
            onChange={handleChange}
            required
            className="select select-bordered w-full"
          >
            <option value="">Select Category</option>
            {hobbyCategories.map(cat => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            name="description"
            value={groupData.description}
            onChange={handleChange}
            required
            className="textarea textarea-bordered w-full"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Meeting Location</label>
          <input
            type="text"
            name="location"
            value={groupData.location}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Max Members</label>
          <input
            type="number"
            name="maxMembers"
            value={groupData.maxMembers}
            onChange={handleChange}
            min="1"
            required
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={groupData.startDate}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Image URL</label>
          <input
            type="url"
            name="imageURL"
            value={groupData.imageURL}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">User Name</label>
          <input
            type="text"
            name="userName"
            value={groupData.userName}
            readOnly
            className="input input-bordered w-full bg-gray-200 cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">User Email</label>
          <input
            type="email"
            name="userEmail"
            value={groupData.userEmail}
            readOnly
            className="input input-bordered w-full bg-gray-200 cursor-not-allowed"
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateGroup;
