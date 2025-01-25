import { TabType } from '@/components/library/asset/types';

/* export async function getTabs() {
  try {
    const mongoClient = await client.connect();
    const data = await mongoClient
      .db(DB_NAME)
      .collection<TabType>(COLLECTION_NAME)
      .find({})
      .limit(10)
      .toArray();
    console.log('getTabs', data);
    return data.map((tab) => ({
      ...tab,
      _id: tab._id.toString(),
    }));
  } catch (e) {
    console.error(e);
    return [];
  }
} */

const TABS: TabType[] = [
  {
    _id: '6794cb08025446bd7728bf97',
    label: 'Featured',
    sections: [
      {
        id: '1',
        title: 'Featured',
        description: 'desc featured',
        allowedTypes: ['layout', 'kpi', 'storyboard'],
        tags: ['featured'],
      },
      {
        id: '2',
        title: 'Trending KPIs',
        description: 'desc Trending',
        allowedTypes: ['kpi'],
        tags: ['trending'],
      },
    ],
  },
  {
    _id: '6794edf4025446bd7728bf9c',
    label: 'KPI',
    sections: [
      { id: '1', title: 'KPI', description: 'desc KPI', allowedTypes: ['kpi'] },
    ],
  },
  {
    _id: '6794edf4025446bd7728bf9d',
    label: 'Layout',
    sections: [
      {
        id: '1',
        title: 'Layout',
        description: 'desc Layout',
        allowedTypes: ['layout'],
      },
    ],
  },
  {
    _id: '6794edf4025446bd7728bf9e',
    label: 'Storyboard',
    sections: [
      {
        id: '1',
        title: 'Storyboard',
        description: 'desc Storyboard',
        allowedTypes: ['storyboard'],
      },
    ],
  },
];

export async function getTabs() {
  return TABS;
}
