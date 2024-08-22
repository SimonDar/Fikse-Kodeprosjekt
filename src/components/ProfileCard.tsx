import React, { useState } from 'react';

interface ProfileCardProps {
  name: string;
  title: string;
  avatarUrl: string;
  bio: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, title, avatarUrl, bio }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:h-full md:w-48" src={avatarUrl} alt={name} />
        </div>
        
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
          <h1 className="block mt-1 text-lg leading-tight font-medium text-black">{name}</h1>
          <p className="mt-2 text-gray-500">{bio}</p>
          <button
            onClick={toggleFollow}
            className={`mt-4 px-4 py-2 text-sm font-medium leading-5 rounded-full focus:outline-none focus:shadow-outline ${
              isFollowing ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
            }`}
          >
            {isFollowing ? 'Unfollow' : 'Follow'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
