'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function TestPage() {
  const [status, setStatus] = useState<string>('Testing connection...');
  const [details, setDetails] = useState<string>('');

  useEffect(() => {
    async function testConnection() {
      try {
        // Test basic connection
        const { data, error } = await supabase.from('bata').select('count').limit(1);
        
        if (error) {
          throw error;
        }

        // If we get here, connection is working
        setStatus('✅ Supabase connection successful!');
        setDetails(`Connection details:
- Table access: Working
- Response: ${JSON.stringify(data, null, 2)}`);
      } catch (error) {
        setStatus('❌ Supabase connection failed');
        setDetails(`Error details: ${(error as Error).message}`);
      }
    }
    testConnection();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Supabase Connection Test</h1>
      <p className="mb-2">{status}</p>
      <pre className="bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap">
        {details}
      </pre>
    </div>
  );
} 