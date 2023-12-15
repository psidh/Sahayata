'use client'
import React, { useState } from 'react';

interface Feature {
  id: string;
  name: string;
  content: string;
}

const features: Feature[] = [
  { id: 'user-registration', name: 'User Registration', content: 'Account creation and access control' },
  { id: 'dumper-load-tracking', name: 'Dumper Load Tracking', content: 'Load status monitoring and management' },
  { id: 'notification-alerts', name: 'Notification Alerts', content: ' Real-time event notifications for users' },
  { id: 'offline-mode-access', name: 'Offline Mode Access', content: 'Functionality available without internet connection' },
  { id: 'multilingual-support', name: 'Multilingual Support', content: 'User interface in multiple languages' },
  { id: 'load-sensors', name: 'Load Sensors', content: 'Measurement and tracking vehicle loads' },
  { id: 'chat-option', name: 'Chat Feature', content: 'Integrated communication for user collaboration' },
];

const FeatureSlider: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const showFeature = (featureId: string) => {
    setSelectedFeature(featureId);
  };

  return (
    <div className="feature-container bg-gray-100 p-4">
      <div className="feature-bar flex space-x-4">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`feature cursor-pointer p-2 rounded ${selectedFeature === feature.id ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'}`}
            onClick={() => showFeature(feature.id)}
          >
            {feature.name}
          </div>
        ))}
      </div>

      {selectedFeature && (
        <div className="feature-content mt-4">
          <div className="text-gray-800">{features.find((feature) => feature.id === selectedFeature)?.content}</div>
        </div>
      )}
    </div>
  );
};

export default FeatureSlider;
