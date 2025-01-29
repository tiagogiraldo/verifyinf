import { promises as fs } from 'fs';
import path from 'path';
import InfluencerTable from '@/components/InfluencerTable';
import { InfluencerElement } from '@/interfaces';



async function getInfluencerData(): Promise<InfluencerElement[]> {
  const jsonDirectory = path.join(process.cwd(), 'public/data');
  const fileContents = await fs.readFile(jsonDirectory + '/collection.json', 'utf8');
  return JSON.parse(fileContents);
}

export default async function InfluencerTablePage() {
  const influencers = await getInfluencerData();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Influencer Rankings</h1>
      <InfluencerTable influencers={influencers} />
    </div>
  );
}
