import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

export function SchemaMapper() {
  const [sourceFields, setSourceFields] = useState([
    { id: '1', name: 'user_id', type: 'string' },
    { id: '2', name: 'email', type: 'string' },
    { id: '3', name: 'created_at', type: 'datetime' },
  ]);

  const [mappings, setMappings] = useState<Record<string, string>>({});

  const handleMappingChange = (sourceId: string, targetField: string) => {
    setMappings(prev => ({
      ...prev,
      [sourceId]: targetField,
    }));
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Source Schema</Label>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Field Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Map To</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sourceFields.map((field) => (
                <TableRow key={field.id}>
                  <TableCell>{field.name}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{field.type}</Badge>
                  </TableCell>
                  <TableCell>
                    <Input
                      value={mappings[field.id] || ''}
                      onChange={(e) => handleMappingChange(field.id, e.target.value)}
                      placeholder="Target field name"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div>
          <Label>Target Schema</Label>
          <div className="border rounded-md p-4">
            <pre className="text-sm">
              {JSON.stringify({
                mappings: Object.entries(mappings).map(([sourceId, targetField]) => ({
                  source: sourceFields.find(f => f.id === sourceId)?.name,
                  target: targetField,
                })),
              }, null, 2)}
            </pre>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button>Save Mappings</Button>
      </div>
    </div>
  );
}