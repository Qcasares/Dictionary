import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ConnectorList } from './connector-list.tsx';
import { SchemaMapper } from './schema-mapper.tsx';
import { ApiSettings } from './api-settings.tsx';

export function ApiIntegration() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">API Integration</Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>API Integration Hub</DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="connectors" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="connectors">Connectors</TabsTrigger>
            <TabsTrigger value="mapping">Schema Mapping</TabsTrigger>
            <TabsTrigger value="api">API Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="connectors">
            <ConnectorList />
          </TabsContent>
          
          <TabsContent value="mapping">
            <SchemaMapper />
          </TabsContent>
          
          <TabsContent value="api">
            <ApiSettings />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}