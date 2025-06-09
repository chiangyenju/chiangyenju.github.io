"use client";

export default function Music() {
  const soundcloudUsername = 'chiangyenju';

  // Single track - Void (radio edit)
  const voidTrackUrl = `https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/${soundcloudUsername}/void-radio-edit&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false&show_artwork=true`;

  return (
    <section>
      <div>
        <h1>Music</h1>
        <p>Currently under construction</p>
      </div>

      <div>
        <div>
          <div>
            <iframe
              width="100%"
              height="120"
              scrolling="no"
              frameBorder="no"
              src={voidTrackUrl}
              title="SoundCloud Player - Void (radio edit)"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 