import { AssetType } from '@/components/library/asset/types';
/* import client, { DB_NAME } from '@/lib/mongodb';

const COLLECTION_NAME = 'assets';

export async function getAssets(filters: {
  searchTerms?: string;
  types: string[];
}) {
  try {
    const mongoClient = await client.connect();
    const data = await mongoClient
      .db(DB_NAME)
      .collection<AssetType>(COLLECTION_NAME)
      .find({
        ...(filters?.searchTerms
          ? { $text: { $search: filters.searchTerms } }
          : {}),
        type: { $in: filters.types },
      })
      .collation({ locale: 'en', strength: 2 })
      .limit(100)
      .toArray();
    return data.map((asset) => ({
      ...asset,
      _id: asset._id.toString(),
    }));
  } catch (e) {
    console.error(e);
    return [];
  }
} */

const ASSETS: AssetType[] = [
  {
    _id: '6794d6d4025446bd7728bf98',
    title: 'Title1',
    subTitle: 'SubTitle1',
    description: 'Desc item1',
    type: 'layout',
    tags: ['featured', 'tadsadsadsg4'],
    metrics: {
      Used: 2,
      Type: 'type1',
      'Pages no.': 3,
      'Last Updated': '2021-09-01',
    },
    url: 'test',
    previewUrl: 'test',
    businessQuestions: [
      {
        id: '1',
        title: 'Title1',
        description: 'Desc item1',
      },
      {
        id: '2',
        title: 'Title2',
        description: 'Desc item2',
      },
    ],
  },
  {
    _id: '6794d6d4025446bd7728bf983232',
    title: 'Kpi1',
    subTitle: 'SubTitle1 Kpi1',
    description: 'Desc Kpi1',
    type: 'kpi',
    tags: ['trending'],
    metrics: {
      'Total Profit': 100000,
      'Total Profit (Last Month)': 200000,
      'Total Profit (Last Year)': 300000,
    },
    url: 'test',
    previewUrl: 'test',
    businessQuestions: [
      {
        id: '1',
        title: 'Title1',
        description: 'Desc item1',
      },
      {
        id: '2',
        title: 'Title2',
        description: 'Desc item2',
      },
    ],
  },
];

export async function getAssets(filters: {
  searchTerms?: string;
  types: string[];
  tags?: string[];
}) {
  let data = ASSETS.filter((asset) => filters.types.includes(asset.type));
  if (filters.tags) {
    data = data.filter((asset) =>
      filters.tags?.every((tag) => asset.tags?.includes(tag)),
    );
  }
  if (filters.searchTerms) {
    return data.filter(
      (asset) =>
        filters.searchTerms &&
        asset.title
          .toLocaleLowerCase()
          .includes(filters.searchTerms.toLocaleLowerCase()),
    );
  }
  return data;
}
