const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScknCexv0axo8y7datTsuDEd4UdpdhDgMcx5i4DlPgT_aLgxg/viewform';
const FORM_EMBED_URL = `${FORM_URL}?embedded=true`;

export default function SignUp() {
  return (
    <main className="page">
      <section className="section signup-section">
        <h1 className="page-title">Sign Up</h1>
        <p className="section-text signup-intro">
          Join ILREF workshops and stay in the loop. Fill out the form below or use the button to open it in a new tab.
        </p>
        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary signup-cta"
        >
          Open form in new tab
        </a>
        <div className="form-embed-wrapper">
          <iframe
            src={FORM_EMBED_URL}
            width="100%"
            height="900"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="ILREF sign-up form"
            loading="lazy"
          >
            Loading…
          </iframe>
        </div>
      </section>
    </main>
  );
}
