import React from 'react';

export default function CreateGroup() {
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
}
