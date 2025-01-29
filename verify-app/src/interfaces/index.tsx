

export interface Influencer {
    id: number;
    name: string;
    bio: string;
    categories: string[];
    trueScore: number;
    totalSNFollowers: number;
    claims: number;
    positive: number;
}

export interface InfluencerDetailProps {
    influencer: Influencer | null;
}

export interface StatCardProps {
    iconSrc: string;
    title: string;
    value: number | string;
    format: 'number' | 'percentage';
}

export interface InfluencerSummary {
    id: number;
    claims: number;
    positive: number;
    trueScore: number;
}

export interface InfluencersSummaryProps {
    influencers: InfluencerSummary[];
}

export interface InfluencersRow {
id: number;
claims: number;
positive: number;
trueScore: number;
}

export interface InfluencerElement {
    id: number;
    name: string;
    categories: string[];
    trueScore: number;
    totalSNFollowers: number;
    claims: number;
}

export interface InfluencerTableProps {
    influencers: InfluencerElement[];
}

export interface InfluencersStatsProps {
    id: number;
    estimatedRevenueYearly: number;
    trueScore: number;
    claims: number;
    products: string[];
    totalSNFollowers: number;
  }

  export interface InfluencerTab extends Influencer {
    products: string[];
    books: string[];
    userNames: {
      [key: string]: string;
    };
  }
  
export interface InfluencerTabsProps {
    influencere: InfluencerTab;
  }