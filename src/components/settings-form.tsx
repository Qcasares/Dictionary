import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const settingsSchema = z.object({
  apiKey: z.string().min(1, 'API Key is required'),
  syncInterval: z.number().min(1).max(60),
});

type SettingsFormValues = z.infer<typeof settingsSchema>;

export function SettingsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SettingsFormValues>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      apiKey: '',
      syncInterval: 5,
    },
  });

  const onSubmit = (data: SettingsFormValues) => {
    console.log('Settings updated:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="apiKey">API Key</Label>
        <Input
          id="apiKey"
          {...register('apiKey')}
          className={errors.apiKey ? 'border-destructive' : ''}
        />
        {errors.apiKey && (
          <p className="text-sm text-destructive">{errors.apiKey.message}</p>
        )}
      </div>
      
      <div>
        <Label htmlFor="syncInterval">Sync Interval (minutes)</Label>
        <Input
          id="syncInterval"
          type="number"
          {...register('syncInterval', { valueAsNumber: true })}
          className={errors.syncInterval ? 'border-destructive' : ''}
        />
        {errors.syncInterval && (
          <p className="text-sm text-destructive">{errors.syncInterval.message}</p>
        )}
      </div>
      
      <Button type="submit">Save Settings</Button>
    </form>
  );
}