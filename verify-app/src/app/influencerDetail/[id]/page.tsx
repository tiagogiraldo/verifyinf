import { promises as fs } from 'fs';
import path from 'path';
import InfluencerDetail from '@/components/InfluencerDetail';
import FollowersStats from '@/components/FollowersStats';
import InfluencerTabs from '@/components/Tabs'
import { Influencer, InfluencerTab, InfluencersStatsProps } from '@/interfaces';

async function getInfluencerData(id: string): Promise<(Influencer & InfluencersStatsProps) | null> {
  const jsonDirectory = path.join(process.cwd(), 'public/data');
  const fileContents = await fs.readFile(jsonDirectory + '/collection.json', 'utf8');
  const data: (Influencer & InfluencersStatsProps)[] = JSON.parse(fileContents);
  return data.find(influencer => influencer.id.toString() === id) || null;
}

async function getInfluencerDataE(id: string): Promise<Influencer | null> {
  const jsonDirectory = path.join(process.cwd(), 'public/data');
  const fileContents = await fs.readFile(jsonDirectory + '/collection.json', 'utf8');
  const data: Influencer[] = JSON.parse(fileContents);
  return data.find(influencer => influencer.id.toString() === id) || null;
}

export default async function InfluencerDetailPage({ params }: { params: { id: string } }) {
  const influencer = await getInfluencerData(params.id);
  const influencere = await getInfluencerDataE(params.id);

  if (!influencer || !influencere) {
    return <div>Influencer not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <InfluencerDetail influencer={influencer} />
      <FollowersStats
        estimatedRevenueYearly={influencer.estimatedRevenueYearly}
        trueScore={influencer.trueScore}
        claims={influencer.claims}
        products={influencer.products}
        totalSNFollowers={influencer.totalSNFollowers}
        id={influencer.id}
      />
      <InfluencerTabs influencere={influencere as InfluencerTab} />
    </div>
  );
}

