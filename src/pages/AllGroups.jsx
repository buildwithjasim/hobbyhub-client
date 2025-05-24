import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Loader2 } from 'lucide-react';
const AllGroups = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://hobbyhub-server-eight.vercel.app/groups')
      .then(res => res.json())
      .then(data => {
        setGroups(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <Loader2 className="animate-spin text-indigo-600 w-10 h-10" />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">All Hobby Groups</h2>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map(group => (
          <div key={group._id} className="card bg-base-200 shadow-xl">
            <img
              src={group.image}
              alt={group.groupName}
              className="h-56 w-full object-cover"
            />

            <div className="card-body">
              <h2 className="card-title">{group.groupName}</h2>
              <p>
                <strong>Category:</strong> {group.category}
              </p>
              <p>
                <strong>Location:</strong> {group.location}
              </p>
              <p>
                <strong>Start Date:</strong>{' '}
                {new Date(group.startDate).toDateString()}
              </p>
              <div className="card-actions justify-end">
                <Link
                  to={`/group/${group._id}`}
                  className="btn btn-sm btn-primary"
                >
                  See More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllGroups;
