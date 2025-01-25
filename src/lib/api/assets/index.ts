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
    description: 'Desc item1',
    type: 'layout',
  },
  {
    _id: '6794db86025446bd7728bf99',
    title: 'Title2',
    description: 'Desc item2',
    type: 'kpi',
  },
  {
    _id: '6794dbae025446bd7728bf9a',
    title: 'Title3',
    description: 'Desc item3',
    type: 'layout',
  },
];

export async function getAssets(filters: {
  searchTerms?: string;
  types: string[];
}) {
  return ASSETS.filter((asset) =>
    filters.types.includes(asset.type) && filters.searchTerms
      ? asset.title
          .toLocaleLowerCase()
          .includes(filters.searchTerms.toLocaleLowerCase())
      : true,
  );
}
