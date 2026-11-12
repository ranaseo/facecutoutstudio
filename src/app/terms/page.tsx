import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

const PATH = "/terms/";
const TITLE = "Terms of Service";
const DESC = "Terms for using Face Cutout Studio: free trial, orders, turnaround, revisions, payment, monthly plans, photo rights and ownership of delivered files.";

export const metadata: Metadata = { title: TITLE, description: DESC, alternates: { canonical: PATH }, openGraph: { title: TITLE, description: DESC, url: PATH } };

export default function Page() {
  return (
    <LegalPage
      path={PATH}
      name={TITLE}
      title={TITLE}
      desc={DESC}
      intro="These terms explain how orders, revisions, payment and file ownership work when you use Face Cutout Studio. By sending us an order, you agree to them."
      sections={[
        {
          h: "Our service",
          p: [
            "Face Cutout Studio prepares design files for sellers of personalized products: face cutouts, print-ready files, sticker and tattoo sheets, and listing images. We deliver digital files only. We do not print or ship physical products.",
          ],
        },
        {
          h: "Free trial",
          p: ["New clients can send 3 real customer photos and receive 3 finished files free, with no card needed. The trial files are yours to keep and use."],
        },
        {
          h: "Orders and turnaround",
          p: [
            "An order is complete when we have the photo, product, size and any names or dates. Standard turnaround for print files is 12 to 24 hours, and listing image sets take 2 to 3 business days. These are our normal times, not a guarantee; if an order will take longer, we tell you.",
            "If a photo is too poor to print at the size ordered, we tell you before we design it.",
          ],
        },
        {
          h: "Revisions",
          p: [
            "Every file includes 2 free revisions. If we still cannot get a file right after those revisions, you do not pay for that file.",
          ],
        },
        {
          h: "Prices and payment",
          p: [
            "Current prices are listed on the pricing page, in US dollars. Payment and invoicing details are agreed after your free trial and before your first paid order.",
          ],
        },
        {
          h: "Monthly plans",
          list: [
            "Plans are billed at the start of each month.",
            "There is no contract. You can pause or cancel at any time.",
            "Unused files do not roll over to the next month.",
            "One Etsy listing photo set counts as 7 files.",
          ],
        },
        {
          h: "Your photos and content",
          p: [
            "You confirm that you have the right to send us the photos, names, logos and templates in your orders, and that your customers have agreed to their photos being used to make their product. You are responsible for the products you sell with our files.",
            "We may decline an order that is unlawful, hateful or sexually explicit, or that uses a person's image without their consent.",
          ],
        },
        {
          h: "Ownership of files",
          p: [
            "Once a file is paid for, or delivered as part of the free trial, it is yours to print and sell. We do not put a watermark or credit on files, and we do not use your orders in our portfolio without your written permission.",
          ],
        },
        {
          h: "Confidentiality",
          p: ["We keep your orders and customer photos confidential and delete customer photos after delivery. We sign a non-disclosure agreement on request. See our privacy policy for details."],
        },
        {
          h: "Limits of our responsibility",
          p: [
            "Please check each file before you print. We are not responsible for printing costs, materials or lost sales, and our total responsibility for any order is limited to the amount you paid for it.",
          ],
        },
        {
          h: "Changes to these terms",
          p: ["If we change these terms, we will update this page and the date at the top. Changes apply to orders placed after that date."],
        },
      ]}
    />
  );
}
