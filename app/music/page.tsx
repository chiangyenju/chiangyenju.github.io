"use client";

import { useState } from 'react';

export default function Music() {
  const [selectedWidget, setSelectedWidget] = useState<'playlist' | 'likes' | 'tracks'>('playlist');

  // Replace 'your-username' with your actual SoundCloud username
  const soundcloudUsername = 'your-username';

  const widgets = {
    playlist: {
      title: 'Latest Releases',
      description: 'My newest EDM tracks and productions',
      url: `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/${soundcloudUsername}/playlists&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`
    },
    tracks: {
      title: 'All Tracks',
      description: 'Complete collection of my EDM productions',
      url: `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/${soundcloudUsername}/tracks&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`
    },
    likes: {
      title: 'Liked Tracks',
      description: 'Music that inspires my sound and creativity',
      url: `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/${soundcloudUsername}/favorites&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`
    }
  };

  return (
    <section className="min-h-screen w-full bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 sm:py-24 lg:py-32">
        
        {/* Hero Section */}
        <div className="text-center mb-16 sm:mb-24">
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight" 
            style={{ 
              fontFamily: 'Georgia, serif',
              fontWeight: '300',
              letterSpacing: '0.01em'
            }}
          >
            Music & Sound
          </h1>
          <p 
            className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
            style={{ 
              fontFamily: 'Helvetica Neue, Arial, sans-serif',
              fontWeight: '200',
              letterSpacing: '0.01em'
            }}
          >
            Electronic dance music productions, beats, and sonic explorations. 
            Creating immersive soundscapes that blend digital creativity with emotional depth.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10">
            <div className="flex space-x-2">
              {Object.entries(widgets).map(([key, widget]) => (
                <button
                  key={key}
                  onClick={() => setSelectedWidget(key as 'playlist' | 'likes' | 'tracks')}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm font-light transition-all duration-300 ${
                    selectedWidget === key
                      ? 'bg-white/10 text-white shadow-lg'
                      : 'text-white/60 hover:text-white/80 hover:bg-white/5'
                  }`}
                  style={{ 
                    fontFamily: 'Helvetica Neue, Arial, sans-serif',
                    fontWeight: '300',
                    letterSpacing: '0.02em'
                  }}
                >
                  {widget.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Description */}
        <div className="text-center mb-8">
          <h2 
            className="text-lg sm:text-xl text-white/90 mb-2"
            style={{ 
              fontFamily: 'Helvetica Neue, Arial, sans-serif',
              fontWeight: '300',
              letterSpacing: '0.01em'
            }}
          >
            {widgets[selectedWidget].title}
          </h2>
          <p 
            className="text-sm sm:text-base text-white/60"
            style={{ 
              fontFamily: 'Helvetica Neue, Arial, sans-serif',
              fontWeight: '300',
              letterSpacing: '0.01em'
            }}
          >
            {widgets[selectedWidget].description}
          </p>
        </div>

        {/* SoundCloud Widget */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-4 sm:p-8 border border-white/10">
            <iframe
              width="100%"
              height="400"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src={widgets[selectedWidget].url}
              className="rounded-2xl"
              title={`SoundCloud ${widgets[selectedWidget].title}`}
            />
          </div>
        </div>

        {/* Setup Instructions (Remove after setup) */}
        <div className="max-w-2xl mx-auto mt-16 p-6 bg-amber-500/10 border border-amber-500/20 rounded-2xl">
          <h3 className="text-amber-200 text-lg font-medium mb-3">
            🔧 Setup Required
          </h3>
          <p className="text-amber-100/80 text-sm leading-relaxed mb-4">
            To complete the SoundCloud integration:
          </p>
          <ol className="text-amber-100/80 text-sm space-y-2 list-decimal list-inside">
            <li>Replace <code className="bg-amber-500/20 px-1 rounded">'your-username'</code> in the code with your actual SoundCloud username</li>
            <li>Test the widgets to ensure they load correctly</li>
            <li>Remove this setup section once everything works</li>
          </ol>
          <p className="text-amber-100/60 text-xs mt-4">
            Note: You can also customize the widget colors and features by modifying the URL parameters.
          </p>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="flex justify-center">
            <div 
              className="w-2 h-2 bg-white/60 rounded-full"
              style={{ 
                animation: 'musicPulse 2s ease-in-out infinite',
                boxShadow: '0 0 8px rgba(255, 255, 255, 0.4)'
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* CSS for music pulse animation */}
      <style jsx>{`
        @keyframes musicPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
} 