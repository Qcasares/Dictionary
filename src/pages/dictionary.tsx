import { useStore } from '@/store/store';
import { DictionaryList } from '@/components/dictionary-list';

export default function DictionaryPage() {
  const { metadata } = useStore();

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dictionary</h1>
      </div>
      
      <div className="mt-8">
        <DictionaryList metadata={metadata} />
      </div>
    </div>
  );
}