import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface QualityIssue {
  id: string;
  field: string;
  type: 'completeness' | 'accuracy' | 'consistency';
  description: string;
  status: 'open' | 'in-progress' | 'resolved';
}

export function QualityWorkflow() {
  const [issues, setIssues] = useState<QualityIssue[]>([
    {
      id: '1',
      field: 'customer_name',
      type: 'completeness',
      description: 'Missing values in 15% of records',
      status: 'open',
    },
  ]);

  const handleResolve = (id: string) => {
    setIssues(prev => 
      prev.map(issue => 
        issue.id === id ? { ...issue, status: 'resolved' } : issue
      )
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Quality Workflow</Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Quality Improvement Workflow</DialogTitle>
        </DialogHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Field</TableHead>
              <TableHead>Issue Type</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {issues.map(issue => (
              <TableRow key={issue.id}>
                <TableCell>{issue.field}</TableCell>
                <TableCell>
                  <Badge variant={issue.type === 'completeness' ? 'default' : issue.type === 'accuracy' ? 'secondary' : 'destructive'}>
                    {issue.type}
                  </Badge>
                </TableCell>
                <TableCell>{issue.description}</TableCell>
                <TableCell>
                  <Badge variant={issue.status === 'open' ? 'destructive' : issue.status === 'in-progress' ? 'secondary' : 'default'}>
                    {issue.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  {issue.status !== 'resolved' && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleResolve(issue.id)}
                    >
                      Resolve
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
}