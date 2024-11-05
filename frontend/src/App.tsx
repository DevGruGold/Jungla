import { useState } from 'react';
import { AudioProvider } from './contexts/AudioContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AudioVisualizer } from './components/AudioVisualizer';
import { AudioControls } from './components/AudioControls';
import { AnimalTranslation } from './components/AnimalTranslation';

const queryClient = new QueryClient();

export default function App() {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <AudioProvider>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
          <main className="container mx-auto px-4 py-8">
            <div className="grid gap-8">
              <AudioVisualizer isRecording={isRecording} />
              <AudioControls 
                isRecording={isRecording} 
                onRecordingChange={setIsRecording}
              />
              <AnimalTranslation />
            </div>
          </main>
        </div>
      </AudioProvider>
    </QueryClientProvider>
  );
}