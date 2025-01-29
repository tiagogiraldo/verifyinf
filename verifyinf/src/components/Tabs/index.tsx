'use client';

import { InfluencerTabsProps } from '@/interfaces';
import { useState, useMemo } from 'react';

const InfluencerTabs: React.FC<InfluencerTabsProps> = ({ influencere }) => {
  const availableTabs = useMemo(() => {
    const tabs = [];
    if (Array.isArray(influencere?.products) && influencere.products.length > 0) {
      tabs.push({ id: 'products', label: 'Products' });
    }
    if (Array.isArray(influencere?.books) && influencere.books.length > 0) {
      tabs.push({ id: 'books', label: 'Books' });
    }
    if (influencere?.userNames && Object.keys(influencere.userNames).length > 0) {
      tabs.push({ id: 'socialNetworks', label: 'Social Networks' });
    }
    return tabs;
  }, [influencere]);

  const [activeTab, setActiveTab] = useState(availableTabs[0]?.id || '');

  if (!influencere) {
    return <div>No influencer data available</div>;
  }

  if (availableTabs.length === 0) {
    return <div>No tab data available for this influencer</div>;
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'products':
        return (
          <ul className="list-disc pl-5">
            {Array.isArray(influencere.products) ? (
              influencere.products.map((product, index) => (
                <li key={index}>{product}</li>
              ))
            ) : (
              <li>No products available</li>
            )}
          </ul>
        );
      case 'books':
        return (
          <ul className="list-disc pl-5">
            {Array.isArray(influencere.books) ? (
              influencere.books.map((book, index) => (
                <li key={index}>{book}</li>
              ))
            ) : (
              <li>No books available</li>
            )}
          </ul>
        );
      case 'socialNetworks':
        return (
          <ul className="list-disc pl-5">
            {influencere.userNames && Object.keys(influencere.userNames).length > 0 ? (
              Object.entries(influencere.userNames).map(([network, username]) => (
                <li key={network}>
                  <span className="font-bold">{network}:</span> {username}
                </li>
              ))
            ) : (
              <li>No social networks available</li>
            )}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex border-b">
        {availableTabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-2 px-4 ${
              activeTab === tab.id
                ? 'border-b-2 border-green-500 text-white-500'
                : 'text-white-700 hover:text-green-500'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default InfluencerTabs;