import { MetadataField } from './metadata-field';

interface DictionaryListProps {
  metadata: MetadataField[];
}

export function DictionaryList({ metadata }: DictionaryListProps) {
  return (
    <div className="space-y-4">
      {metadata.map((field) => (
        <div key={field.key} className="p-4 border rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">{field.key}</h3>
              <p className="text-sm text-muted-foreground">{field.value}</p>
            </div>
            <span className="text-sm text-muted-foreground">{field.type}</span>
          </div>
        </div>
      ))}
    </div>
  );
}