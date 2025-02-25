import React from 'react';

interface IconCardProps {
    icon: string;
    alt: string;
    backgroundColor?: string;
  }
  
  export function IconCard({ 
    icon, 
    alt,
    backgroundColor = 'rgba(190, 72, 230, 0.1)' 
  }: IconCardProps) {
    return (
      <div style={{ 
        width: '75px', 
        height: '75px', 
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: backgroundColor,
        borderRadius: '12px',
        flexShrink: 0
      }}>
        <img src={icon} alt={alt} style={{ width: '32px', height: '32px' }} />
      </div>
    );
  }