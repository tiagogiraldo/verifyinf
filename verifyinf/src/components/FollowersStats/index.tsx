import { InfluencersStatsProps } from '@/interfaces';
import Image from 'next/image';


const formatMoney = (amount: number): string => {
  if (amount >= 1000000) {
    return `$${(amount / 1000000).toFixed(1)}M`;
  } else if (amount >= 1000) {
    return `$${(amount / 1000).toFixed(0)}k`;
  }
  return `$${amount.toFixed(2)}`;
};

const formatFollowers = (followers: number): string => {
  if (followers >= 1000000) {
    return `${(followers / 1000000).toFixed(2)}M+`;
  } else if (followers >= 1000) {
    return `${(followers / 1000).toFixed(0)}k+`;
  }
  return `${followers}+`;
};

const FollowersStats: React.FC<InfluencersStatsProps> = ({
  estimatedRevenueYearly,
  trueScore,
  claims,
  products,
  totalSNFollowers,
}) => {
  return (
    <div className="flex flex-wrap justify-between gap-4">
      <div className="p-4 rounded-lg shadow-md flex-1 min-w-[200px] border-4 border-green-700">
        <div className="flex items-center justify-between mb-2">
          <Image src="/icons/vecteezy_3d-render-green-upward-arrow-icon-profit-arrow-illustration_44762348.png" alt="Yearly Revenue" width={40} height={40} />
          <h3 className="text-lg font-semibold">Yearly Revenue</h3>
        </div>
        <p className="text-2xl font-bold">{formatMoney(estimatedRevenueYearly)}</p>
        <p className="text-sm text-gray-600">Estimated earnings</p>
      </div>

      <div className="p-4 rounded-lg shadow-md flex-1 min-w-[200px] border-4 border-green-700">
        <div className="flex items-center justify-between mb-2">
          <Image src="/icons/vecteezy_green-dollar-icon-transparent-background_23630254.png" alt="True Score" width={40} height={40} />
          <h3 className="text-lg font-semibold">True Score</h3>
        </div>
        <p className="text-2xl font-bold">{(trueScore * 100).toFixed(2)}%</p>
        <p className="text-sm text-gray-600">Based on {claims} verified claims</p>
      </div>

      <div className="p-4 rounded-lg shadow-md flex-1 min-w-[200px] border-4 border-green-700">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">Products</h3>
        </div>
        <p className="text-2xl font-bold">{products.length}</p>
        <p className="text-sm text-gray-600">Recommended products</p>
      </div>

      <div className="p-4 rounded-lg shadow-md flex-1 min-w-[200px] border-4 border-green-700">
        <div className="flex items-center justify-between mb-2">
          <Image src="/icons/vecteezy_beautiful-meeting-glyph-vector-icon_17515738.jpg" alt="Followers" width={40} height={40} />
          <h3 className="text-lg font-semibold">Followers</h3>
        </div>
        <p className="text-2xl font-bold">{formatFollowers(totalSNFollowers)}</p>
        <p className="text-sm text-gray-600">Total followers</p>
      </div>
    </div>
  );
};

export default FollowersStats;
