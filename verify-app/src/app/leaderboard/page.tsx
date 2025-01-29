import InfluencersPage from '../statCard/page';
import InfluencerTablePage from '../influencersTable/page';

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Influencer Dashboard</h1>
      <InfluencersPage />
      <div className="mt-8">
        <InfluencerTablePage />
      </div>
    </div>
  );
}