import { useMemo } from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface QualityMetricsProps {
  completeness: number;
  accuracy: number;
  consistency: number;
}

export function QualityMetrics({ completeness, accuracy, consistency }: QualityMetricsProps) {
  const overallScore = useMemo(() => {
    return Math.round((completeness + accuracy + consistency) / 3);
  }, [completeness, accuracy, consistency]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Data Quality Metrics</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between mb-2">
            <span>Completeness</span>
            <span>{completeness}%</span>
          </div>
          <Progress value={completeness} />
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <span>Accuracy</span>
            <span>{accuracy}%</span>
          </div>
          <Progress value={accuracy} />
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <span>Consistency</span>
            <span>{consistency}%</span>
          </div>
          <Progress value={consistency} />
        </div>
        <div className="pt-4 border-t">
          <div className="flex justify-between mb-2">
            <span className="font-medium">Overall Quality Score</span>
            <span className="font-medium">{overallScore}%</span>
          </div>
          <Progress value={overallScore} className="h-3" />
        </div>
      </CardContent>
    </Card>
  );
}