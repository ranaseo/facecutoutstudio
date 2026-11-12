import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

const PATH = "/privacy-policy/";
const TITLE = "Privacy Policy";
const DESC = "How Face Cutout Studio handles customer photos, order details and contact information: used only for your orders, never shared, deleted after delivery.";

export const metadata: Metadata = { title: TITLE, description: DESC, alternates: { canonical: PATH }, openGraph: { title: TITLE, description: DESC, url: PATH } };

export default function Page() {
  return (
    <LegalPage
      path={PATH}
      name={TITLE}
      title={TITLE}
      desc={DESC}
      intro="Face Cutout Studio uses the photos and order details you send only to make your files. We do not sell or share them, we do not post them, and customer photos are deleted after delivery."
      sections={[
        {
          h: "What we collect",
          list: [
            "Contact details you give us: your name, email address, WhatsApp number and shop link.",
            "Order details: product, size, names, dates and any notes for the design.",
            "Customer photos that you send us for an order.",
            "Messages you send us by email or WhatsApp.",
          ],
        },
        {
          h: "How we use it",
          list: [
            "To design, check and deliver the files you ordered.",
            "To reply to your questions and send revisions.",
            "To invoice you for paid work.",
          ],
          p: ["We do not use your information for advertising, and we do not sell it to anyone."],
        },
        {
          h: "Customer photos",
          p: [
            "Photos of your customers are used only to make your files. They are never shared, posted or used in our portfolio without your written permission.",
            "Customer photos and working files are deleted after your order is delivered and any revisions are finished. If you want us to keep templates or brand files for future orders, tell us and we will keep only those.",
            "We sign a non-disclosure agreement on request.",
          ],
        },
        {
          h: "Who can see your information",
          p: [
            "Only the Face Cutout Studio team working on your orders. Files and messages pass through the services you choose to send them with, such as email, WhatsApp, Google Drive or Dropbox, and those services handle data under their own privacy policies.",
          ],
        },
        {
          h: "This website",
          p: [
            "This website has no account system, no contact form and no advertising trackers. Our hosting provider keeps standard server logs, such as IP address and browser type, to keep the site secure and running.",
          ],
        },
        {
          h: "Your choices",
          p: [
            "You can ask us at any time what information we hold about you, ask us to correct it, or ask us to delete it. Email us and we will reply within 7 days.",
          ],
        },
        {
          h: "Changes to this policy",
          p: ["If we change this policy, we will update this page and the date at the top."],
        },
      ]}
    />
  );
}
