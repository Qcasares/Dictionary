import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function ApiSettings() {
  const [apiEnabled, setApiEnabled] = useState(false);
  const [apiKey, setApiKey] = useState('sk_1234567890abcdef');
  const { toast } = useToast();

  const handleCopyApiKey = () => {
    navigator.clipboard.writeText(apiKey);
    toast({
      title: 'Copied!',
      description: 'API key copied to clipboard',
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <Label>API Access</Label>
          <p className="text-sm text-muted-foreground">
            Enable or disable API access to your data dictionary
          </p>
        </div>
        <Switch
          checked={apiEnabled}
          onCheckedChange={setApiEnabled}
        />
      </div>

      {apiEnabled && (
        <div className="space-y-4">
          <div>
            <Label>API Endpoint</Label>
            <div className="flex items-center gap-2">
              <Input
                value="https://api.yourdictionary.com/v1"
                readOnly
                className="font-mono"
              />
              <Button variant="outline" size="sm">
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </Button>
            </div>
          </div>

          <div>
            <Label>API Key</Label>
            <div className="flex items-center gap-2">
              <Input
                value={apiKey}
                readOnly
                className="font-mono"
              />
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleCopyApiKey}
              >
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </Button>
              <Button variant="outline" size="sm">
                Regenerate
              </Button>
            </div>
          </div>

          <div>
            <Label>API Documentation</Label>
            <div className="space-y-2">
              <Badge variant="secondary">GET /dictionaries</Badge>
              <Badge variant="secondary">GET /dictionaries/{'{id}'}</Badge>
              <Badge variant="secondary">POST /dictionaries</Badge>
              <Badge variant="secondary">GET /entries</Badge>
              <Badge variant="secondary">GET /entries/{'{id}'}</Badge>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}