import React from 'react';

interface StreamingTextDisplayProps {
  text: string;
  isStreaming: boolean;
  className?: string;
}

export function StreamingTextDisplay({ text, isStreaming, className = '' }: StreamingTextDisplayProps) {
  return (
    <div className={`streaming-text ${className}`}>
      {text}
      {isStreaming && <span className="streaming-cursor">|</span>}
    </div>
  );
}
