import { cache } from 'react';
import { firestore } from '@/lib/firebase';
import { collection, getDocs, limit, query, where } from '@firebase/firestore';
import { FirestoreQueryFilter } from '@/lib/global.types';
import { AssetType } from '@/components/library/asset/types';

export const getAssets = cache(
  async (filters: FirestoreQueryFilter<AssetType>[]) => {
    const queryConstraints = filters.map((filter) => {
      return where(filter.field, filter.operator, filter.value);
    });

    const assetsRef = collection(firestore, 'assets');
    const q = query(assetsRef, ...queryConstraints, limit(100));
    const querySnapshot = await getDocs(q);

    const assets = querySnapshot.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() }) as AssetType,
    );

    console.log('getAssets', assets);
    if (!assets) return [];
    return assets;
  },
);
