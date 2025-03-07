import { promises as fs } from 'fs';
import path from 'path';
import InfluencerTabs from '@/components/Tabs';
import { InfluencerTab, PageProps } from '@/interfaces';

async function getInfluencerData(id: string): Promise<InfluencerTab | null> {
  const jsonDirectory = path.join(process.cwd(), 'public/data');
  const fileContents = await fs.readFile(jsonDirectory + '/collection.json', 'utf8');
  const data: InfluencerTab[] = JSON.parse(fileContents);
  return data.find(influencer => influencer.id.toString() === id) || null;
}

export default async function InfluencerPage({ params }: PageProps) {
  const { id } = await params;
  const influencer = await getInfluencerData(id);

  if (!influencer) {
    return <div>Influencer not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <InfluencerTabs influencere={influencer} />
    </div>
  );
}
