import { promises as fs } from 'fs';
import path from 'path';
import FollowersStats from '@/components/FollowersStats';
import { InfluencersStatsProps } from '@/interfaces';


async function getInfluencerData(id: string): Promise<InfluencersStatsProps | null> {
  const jsonDirectory = path.join(process.cwd(), 'public/data');
  const fileContents = await fs.readFile(jsonDirectory + '/collection.json', 'utf8');
  const data: InfluencersStatsProps[] = JSON.parse(fileContents);
  return data.find(influencer => influencer.id.toString() === id) || null;
}

export default async function FollowersStatsPage({ params }: { params: { id: string } }) {
  const influencer = await getInfluencerData(params.id);

  if (!influencer) {
    return <div>Influencer not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <FollowersStats
              estimatedRevenueYearly={influencer.estimatedRevenueYearly}
              trueScore={influencer.trueScore}
              claims={influencer.claims}
              products={influencer.products}
              totalSNFollowers={influencer.totalSNFollowers} id={0}      />
    </div>
  );
}
