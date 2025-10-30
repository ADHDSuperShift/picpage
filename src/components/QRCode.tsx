import React from 'react';

interface QRCodeProps {
  value: string;
  size?: number;
}

const QRCode: React.FC<QRCodeProps> = ({ value, size = 200 }) => {
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(value)}`;
  
  return (
    <div className="inline-block p-4 bg-[#1F1F1F] rounded-lg border-4 border-[#D4AF37] shadow-xl">
      <img src={qrUrl} alt="QR Code" className="w-full h-full" />
    </div>
  );
};

export default QRCode;
