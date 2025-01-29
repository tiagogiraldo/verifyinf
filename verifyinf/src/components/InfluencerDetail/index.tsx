import { InfluencerDetailProps } from '@/interfaces';


const InfluencerDetail: React.FC<InfluencerDetailProps> = ({ influencer }) => {
  if (!influencer) {
    return <div>Influencer not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{influencer.name}</h1>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {influencer.categories.map((category, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-white-200 text-white-700 rounded-full text-sm font-medium border-4 border-green-700"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Biography</h2>
        <p className="text-white-700">{influencer.bio}</p>
      </div>
    </div>
  );
};

export default InfluencerDetail;
