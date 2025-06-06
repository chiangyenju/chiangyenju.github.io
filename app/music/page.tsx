"use client";

export default function Music() {
  const soundcloudUsername = 'chiangyenju';

  // Single track - Void (radio edit)
  const voidTrackUrl = `https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/${soundcloudUsername}/void-radio-edit&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false&show_artwork=true`;

  return (
    <section className="min-h-screen w-full bg-neutral-900 flex flex-col items-center justify-center">
      <div className="text-center mb-12">
        <h1 
          className="text-stone-100 text-4xl mb-4"
          style={{ 
            fontFamily: 'Helvetica Neue, Arial, sans-serif',
            fontWeight: '300'
          }}
        >
          Music
        </h1>
        <p 
          className="text-stone-100/60 text-lg"
          style={{ 
            fontFamily: 'Helvetica Neue, Arial, sans-serif',
            fontWeight: '300'
          }}
        >
          Currently under construction
        </p>
      </div>

      {/* SoundCloud Player Below */}
      <div className="w-full max-w-2xl px-4 sm:px-8">
        <div className="flex justify-center">
          <div className="w-full max-w-xl bg-neutral-900 rounded-lg p-4">
            <iframe
              width="100%"
              height="120"
              scrolling="no"
              frameBorder="no"
              src={voidTrackUrl}
              className="rounded-lg mx-auto block"
              style={{
                background: '#000000',
                border: 'none',
                filter: 'brightness(1) contrast(1)',
              }}
              title="SoundCloud Player - Void (radio edit)"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 