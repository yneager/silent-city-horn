const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/project-data', (req, res) => {
  res.json({
    name: 'Silent City Horn',
    company: 'Acoustic Civility Technologies',
    tagline: 'Transforming Urban Soundscapes Through Acoustic Civility',
    description: 'A smart device that replaces aggressive car horn blasts with polite chimes while logging emergency alerts for city enforcement.',
    problem: {
      title: 'The Noise Pollution Crisis',
      stats: {
        averageHonks: '~418 times per year',
        hornFrequency: '300-600 Hz',
        decibels: '90-110 dB',
        healthImpact: 'Linked to stress, hearing loss, and sleep disruption'
      }
    },
    solution: {
      title: 'The Two-Tier System',
      tier1: { name: 'Civility Alert', volume: '60dB', description: 'Polite chime for everyday communication' },
      tier2: { name: 'Emergency Alert', volume: '110dB', description: 'High-volume alert for genuine safety needs' }
    },
    customerSegments: ['City Governments', 'Fleet Operators', 'Individual Drivers'],
    revenueStreams: ['Product Sales', 'Subscription Services'],
    distributionChannels: ['B2G', 'B2B', 'B2C']
  });
});

app.listen(PORT, () => {
  console.log(`Silent City Horn website running on port ${PORT}`);
});
