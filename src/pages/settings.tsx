import { SettingsForm } from '@/components/settings-form';

export default function SettingsPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Settings</h1>
      </div>
      
      <div className="mt-8">
        <SettingsForm />
      </div>
    </div>
  );
}