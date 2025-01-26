import { TabType } from '@/components/library/asset/types';
import tabs from '@/lib/assets/tabs.json';

/* 
const COLLECTION_NAME = 'tabs';

export async function getTabs() {
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

export async function getTabs() {
  return tabs as TabType[];
}
