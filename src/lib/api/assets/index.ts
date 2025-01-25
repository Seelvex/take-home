import { AssetType } from '@/components/library/asset/types';
import assets from '@/lib/assets/assets.json';

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

/**
 * @todo implement dynamic filters
 */
export async function getAssets(
  filters: Partial<AssetType> & { types?: string[]; ids?: string[] },
) {
  let data = assets as AssetType[];

  if (filters.types) {
    data = data.filter((asset) => filters.types?.includes(asset.type));
  }

  if (filters.tags) {
    data = data.filter((asset) =>
      filters.tags?.every((tag) => asset.tags?.includes(tag)),
    );
  }

  if (filters.ids) {
    data = data.filter((asset) => filters.ids?.includes(asset._id));
  }

  if (filters.title) {
    return data.filter(
      (asset) =>
        filters.title &&
        asset.title
          .toLocaleLowerCase()
          .includes(filters.title.toLocaleLowerCase()),
    );
  }

  if (filters._id) {
    return data.filter((asset) => asset._id === filters._id);
  }

  return data;
}
