"use client"

import React, { useState, useEffect } from 'react';
import { InfluencerTableProps } from '@/interfaces';
import { useRouter } from 'next/navigation';


const formatFollowers = (followers: number): string => {
  if (followers >= 1000000) {
    return `+${(followers / 1000000).toFixed(2)}M`;
  } else if (followers >= 1000) {
    return `${(followers / 1000).toFixed(0)}k`;
  }
  return followers.toString();
};

const InfluencerTable: React.FC<InfluencerTableProps> = ({ influencers }) => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showFilters, setShowFilters] = useState(false);


  const sortedInfluencers = [...influencers].sort((a, b) => {
    if (b.trueScore !== a.trueScore) return b.trueScore - a.trueScore;
    return b.claims - a.claims;
  });

  const categories = ['All', ...new Set(influencers.flatMap(i => i.categories))];

  const filteredInfluencers = selectedCategory === 'All'
    ? sortedInfluencers
    : sortedInfluencers.filter(i => i.categories.includes(selectedCategory));

  useEffect(() => {
    const handleResize = () => {
      setShowFilters(window.innerWidth > 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleRowClick = (id: number) => {
    router.push(`/influencerDetail/${id}`);
  };

  return (
    <div className="relative">
      <div className="sticky top-0 z-10 pb-4">
        <div className="mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden bg-green-700 text-white px-4 py-2 rounded"
          >
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
        {showFilters && (
          <div className="overflow-x-auto">
            <div className="flex space-x-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-green-700 text-white'
                      : 'bg-gray-700 text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full ">
          <thead>
            <tr className=" text-white-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Rank</th>
              <th className="py-3 px-6 text-left">Influencer</th>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-left">True Score</th>
              <th className="py-3 px-6 text-left">Followers</th>
              <th className="py-3 px-6 text-left">Verified Claims</th>
            </tr>
          </thead>
          <tbody className="text-white-600 text-sm font-light">
            {filteredInfluencers.map((influencer, index) => (
              <tr key={influencer.id} 
                className="border-b border-green-200 hover:bg-gray-500"
                onClick={() => handleRowClick(influencer.id)}
                >
                <td className="py-3 px-6 text-left whitespace-nowrap">{index + 1}</td>
                <td className="py-3 px-6 text-left">{influencer.name}</td>
                <td className="py-3 px-6 text-left">{influencer.categories[0]}</td>
                <td className="py-3 px-6 text-left">{(influencer.trueScore * 100).toFixed(2)}%</td>
                <td className="py-3 px-6 text-left">{formatFollowers(influencer.totalSNFollowers)} followers</td>
                <td className="py-3 px-6 text-left">{influencer.claims}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InfluencerTable;