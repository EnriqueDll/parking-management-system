import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <div className="p-2">
      <h3 className="text-3xl font-bold underline">About</h3>
    </div>
  );
}
