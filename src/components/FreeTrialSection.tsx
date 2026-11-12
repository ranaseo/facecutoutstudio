import { SITE } from "@/lib/site";

const SUBJECT = "Free trial: 3 face cutouts";
const BODY = [
  "Hi Face Cutout Studio,",
  "",
  "I'd like to try 3 free files. My 3 customer photos are attached.",
  "",
  "Shop link: ",
  "What I sell: ",
  "Product and print size: ",
  "Printer or cutting machine: ",
].join("\n");

const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;
const whatsapp = SITE.whatsapp
  ? `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi Face Cutout Studio, I'd like to try 3 free files. I sell: ")}`
  : null;

export function FreeTrialSection() {
  return (
    <section id="free" aria-labelledby="free-h" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="cta-final">
          <div className="cta-copy">
            <span className="eyebrow">Free trial</span>
            <h2 id="free-h">Send 3 photos. Get 3 print-ready cutouts free.</h2>
            <p>Use real customer photos from your shop. If the files aren&apos;t better than what you have now, you&apos;ve lost nothing.</p>
            <ul>
              <li>No card needed</li>
              <li>Delivered within 24 hours</li>
              <li>Files are yours to keep</li>
            </ul>
          </div>
          <div className="contact-card">
            <h3>How to send your photos</h3>
            <ol>
              <li>Pick 3 real customer photos.</li>
              <li>Tell us the product, print size and your shop link.</li>
              <li>Send them by email{whatsapp ? " or WhatsApp" : ""}. We reply within 24 hours.</li>
            </ol>
            <a className="btn btn-primary" href={mailto}>
              Email your 3 photos →
            </a>
            {whatsapp && (
              <a className="btn btn-whatsapp" href={whatsapp} target="_blank" rel="noopener">
                Send on WhatsApp
              </a>
            )}
            <p className="contact-note">
              Or write to <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
