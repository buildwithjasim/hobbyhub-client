import { useEffect, useState } from 'react';

const FeaturedGroups = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetch('/groups.json')
      .then(res => res.json())
      .then(data => setGroups(data.slice(0, 3)));
  }, []);

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Featured Groups
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {groups.map(group => (
          <div
            key={group.id}
            className="card bg-white shadow-lg p-4 rounded-xl"
          >
            <img
              src={group.image}
              alt={group.name}
              className="rounded-md mb-3 h-48 w-full object-cover"
            />
            <h3 className="text-xl font-bold">{group.name}</h3>
            <p className="text-gray-600">{group.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedGroups;
