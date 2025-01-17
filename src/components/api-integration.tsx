import { useStore } from '@/store/store';
import { useSocketManager } from '@/lib/socket-manager';
import { useToast } from '@/hooks/use-toast';

export function ApiIntegration() {
  const { apiKey, setApiKey } = useStore();
  const { toast } = useToast();
  const { connect, disconnect } = useSocketManager();

  const handleConnect = () => {
    if (!apiKey) {
      toast({
        title: 'Error',
        description: 'API key is required',
        variant: 'destructive',
      });
      return;
    }
    connect(apiKey);
  };

  const handleDisconnect = () => {
    disconnect();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <input
          type="text"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Enter API key"
          className="flex-1"
        />
        <button onClick={handleConnect}>Connect</button>
        <button onClick={handleDisconnect}>Disconnect</button>
      </div>
    </div>
  );
}