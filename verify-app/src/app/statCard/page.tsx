
import { promises as fs } from 'fs';
import path from 'path';
import InfluencersSummary from '@/components/StatCardsRow';
import { InfluencersRow } from '@/interfaces';



async function getInfluencerData(): Promise<InfluencersRow[]> {
  const jsonDirectory = path.join(process.cwd(), 'public/data');
  const fileContents = await fs.readFile(jsonDirectory + '/collection.json', 'utf8');
  return JSON.parse(fileContents);
}

export default async function InfluencersPage() {
  const influencers = await getInfluencerData();

  return (
    <main>
      <InfluencersSummary influencers={influencers} />
    </main>
  );
}
