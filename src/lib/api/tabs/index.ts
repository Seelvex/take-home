import { cache } from 'react';
import { firestore } from '@/lib/firebase';
import { collection, getDocs, limit, query, where } from '@firebase/firestore';
import { FirestoreQueryFilter } from '@/lib/global.types';
import { Tab } from '@/components/shared/tabs/types';

export const getTabs = cache(async (filters: FirestoreQueryFilter<Tab>[]) => {
  const queryConstraints = filters.map((filter) => {
    return where(filter.field, filter.operator, filter.value);
  });

  const tabsRef = collection(firestore, 'tabs');
  const q = query(tabsRef, ...queryConstraints, limit(100));
  const querySnapshot = await getDocs(q);

  const tabs = querySnapshot.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() }) as Tab,
  );

  console.log('getTabs', tabs);
  if (!tabs) return [];
  return tabs.sort((a, b) => a.label.localeCompare(b.label));
});
