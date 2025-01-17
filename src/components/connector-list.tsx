import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus } from 'lucide-react';

const CONNECTORS = [
  {
    name: 'PostgreSQL',
    type: 'database',
    status: 'connected',
    description: 'Connect to PostgreSQL databases',
  },
  {
    name: 'MySQL',
    type: 'database',
    status: 'available',
    description: 'Connect to MySQL databases',
  },
  {
    name: 'Snowflake',
    type: 'data-warehouse',
    status: 'available',
    description: 'Connect to Snowflake data warehouses',
  },
  {
    name: 'REST API',
    type: 'api',
    status: 'connected',
    description: 'Connect to RESTful APIs',
  },
];

export function ConnectorList() {
  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Connector
        </Button>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {CONNECTORS.map((connector) => (
          <Card key={connector.name}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg">{connector.name}</CardTitle>
              <Badge variant={connector.status === 'connected' ? 'default' : 'secondary'}>
                {connector.status}
              </Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{connector.description}</p>
              <div className="mt-4">
                <Button variant="outline" size="sm">
                  {connector.status === 'connected' ? 'Manage' : 'Connect'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}