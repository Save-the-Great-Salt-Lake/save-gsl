export default function WhatCanIDo() {
  return (
    <section id="two" className="wrapper style3 fade-up">
      <div className="inner iframed">
        <div>
          <h2>It's Blowin' in the Wind</h2>
          <p>
            Fill out the form below to send an email to each of your government
            representatives!
          </p>
          <ul className="actions">
            <li>
              <a href="generic.html" className="button">
                Learn more
              </a>
            </li>
          </ul>
        </div>

        <iframe
          src="https://www.youtube.com/embed/lT14B_mKoZI"
          title="Now is the time to take action to save the Great Salt Lake"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </section>
  )
}
