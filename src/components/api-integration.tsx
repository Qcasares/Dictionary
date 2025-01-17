import { useStore } from '@/state/store';
import { useSocketManager } from '@/lib/socket-manager';

export function ApiIntegration() {
  const { apiKey, setApiKey } = useStore();
  const { connect, disconnect } = useSocketManager();

  const handleConnect = () => {
    connect(apiKey);
  };

  const handleDisconnect = () => {
    disconnect();
  };

  return (
    <div>
      <button onClick={handleConnect}>Connect</button>
      <button onClick={handleDisconnect}>Disconnect</button>
    </div>
  );
}