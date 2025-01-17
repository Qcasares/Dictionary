import { useStore } from '@/state/store';
import { useSocketManager } from '@/lib/socket-manager';

export function ApiIntegration() {
  const { apiKey, setApiKey } = useStore();
  const { connect, disconnect } = useSocketManager();

  return (
    <div>
      {/* API integration UI */}
    </div>
  );
}