import { useState, useCallback } from 'react';

export function useStreamingText() {
  const [streamedText, setStreamedText] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);

  const streamText = useCallback((text: string, speed: number = 30) => {
    setIsStreaming(true);
    setStreamedText('');

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setStreamedText((prev) => prev + text[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsStreaming(false);
      }
    }, speed);

    return () => clearInterval(interval);
  }, []);

  const clearText = useCallback(() => {
    setStreamedText('');
    setIsStreaming(false);
  }, []);

  return {
    streamedText,
    isStreaming,
    streamText,
    clearText,
  };
}
