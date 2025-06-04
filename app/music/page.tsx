"use client";

export default function Music() {
  const soundcloudUsername = 'chiangyenju';

  // Direct link to Void (radio edit) track - much smaller
  const voidTrackUrl = `https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/${soundcloudUsername}/void-radio-edit&color=%23333333&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false&buying=false&liking=false&download=false&sharing=false&show_playcount=false&show_bpm=false`;

  // Compact tracks playlist
  const tracksListUrl = `https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/${soundcloudUsername}/tracks&color=%23333333&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false&show_artwork=false&buying=false&liking=false&download=false&sharing=false&show_playcount=false&show_bpm=false`;

  return (
    <section className="min-h-screen w-full bg-black">
      <div className="max-w-2xl mx-auto px-4 sm:px-8 py-16 sm:py-24 lg:py-32">
        
        {/* Much Smaller SoundCloud Player */}
        <div className="relative mb-8">
          <iframe
            width="100%"
            height="120"
            scrolling="no"
            frameBorder="no"
            src={voidTrackUrl}
            className="rounded-lg"
            style={{
              background: 'transparent',
              border: 'none',
              filter: 'brightness(0.8) contrast(1.2)',
            }}
            title="SoundCloud Player - Void (radio edit)"
          />
        </div>

        {/* Compact Song Playlist */}
        <div className="relative">
          <div className="bg-gray-900/50 rounded-lg p-3">
            <iframe
              width="100%"
              height="200"
              scrolling="no"
              frameBorder="no"
              src={tracksListUrl}
              className="rounded-lg"
              style={{
                background: 'transparent',
                border: 'none',
                filter: 'brightness(0.9) contrast(1.1)',
              }}
              title="SoundCloud Tracks Playlist"
            />
          </div>
        </div>

      </div>
    </section>
  );
} 