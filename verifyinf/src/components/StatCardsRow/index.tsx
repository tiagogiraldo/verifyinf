import { InfluencersSummaryProps } from '@/interfaces';
import StatCard from '../StatCard';



const InfluencersSummary: React.FC<InfluencersSummaryProps> = ({ influencers }) => {
  const activeInfluencers = influencers.length;
  const totalClaims = influencers.reduce((sum, influencer) => sum + influencer.claims, 0);
  const weightedTrueScore = influencers.reduce((sum, influencer) => sum + influencer.trueScore * (influencer.positive + influencer.claims), 0) / 
                            influencers.reduce((sum, influencer) => sum + influencer.positive + influencer.claims, 0) * 100;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard 
          iconSrc= "/vecteezy_beautiful-meeting-glyph-vector-icon_17515738.jpg"
          title="Active Influencers"
          value={activeInfluencers}
          format="number"
        />
        <StatCard 
          iconSrc="/vecteezy_a-green-check-mark-on-a-white-background_50750209.jpg"
          title="Claim Verified"
          value={totalClaims}
          format="number"
        />
        <StatCard 
          iconSrc="/vecteezy_business-finance-vector-icon_23913210.jpg"
          title="Average True Score"
          value={weightedTrueScore}
          format="percentage"
        />
      </div>
    </div>
  );
};

export default InfluencersSummary;
