import Link from "next/link";
import type { QA } from "@/components/ui";

export type FaqGroup = {
  id: string;
  title: string;
  intro: string;
  link: [string, string];
  items: (QA & { text: string })[];
};

// `text` is the plain-text version used in FAQPage schema; `a` may contain links.
const qa = (q: string, text: string, a?: React.ReactNode): QA & { text: string } => ({ q, text, a: a ?? text });

export const FAQ_GROUPS: FaqGroup[] = [
  {
    id: "getting-started",
    title: "Getting started",
    intro: "What Face Cutout Studio does, who it is for and how the free trial works.",
    link: ["/services/", "See all services"],
    items: [
      qa("What is Face Cutout Studio?", "Face Cutout Studio is a design studio that turns customer photos into print-ready files for personalized party products: face on a stick cutouts, sticker and confetti sheets, temporary tattoos, cup and banner files, and Etsy or Shopify listing images. We work behind the scenes for sellers and print shops."),
      qa("Who is this service for?", "Etsy sellers, Shopify stores, print shops and party brands that sell personalized products and get more photo orders than they can design in-house. You keep the customer and the printing; we prepare the files."),
      qa("How does the free trial work?", "Send 3 real customer photos with the product and size you need. We return 3 finished, print-ready files for free, with no card needed. If you like them, continue pay as you go or choose a monthly plan."),
      qa("Do I need to create an account?", "No. You can start by email or by sharing a Google Drive or Dropbox folder. Monthly plan clients get a shared order folder that we check every evening, US time."),
      qa(
        "Which products can you design files for?",
        "Face on a stick and big head cutouts, face stickers and confetti, temporary face tattoos, cups and shot glasses, banners, hats, bandanas, DTF transfers, and listing images for Etsy and Shopify. See all services for details.",
        <>
          Face on a stick and big head cutouts, face stickers and confetti, temporary face tattoos, cups and shot glasses, banners, hats, bandanas, DTF transfers, and listing images for Etsy and Shopify. See <Link href="/services/">all services</Link> for details.
        </>,
      ),
    ],
  },
  {
    id: "ordering",
    title: "Ordering and turnaround",
    intro: "How to send an order, when files are ready and how changes work.",
    link: ["/#how", "How an order works"],
    items: [
      qa("How do I place an order?", "Send the customer photo, the product, the print size, any names or dates, and the printer or cutting machine you use. For one order, email is fine. For many orders, use a shared folder with an order sheet listing each item."),
      qa("What time will my files be ready?", "Standard turnaround is 12 to 24 hours. Our studio works during US night hours, so orders received by 9 PM Eastern are usually ready by 7 AM Eastern the next morning."),
      qa(
        "Can I get a rush order?",
        "Rush orders are included in the Growth plan. On pay as you go, mark the order as urgent and we will confirm whether it can be ready sooner before we start.",
        <>
          Rush orders are included in the <Link href="/pricing/">Growth plan</Link>. On pay as you go, mark the order as urgent and we will confirm whether it can be ready sooner before we start.
        </>,
      ),
      qa("Can I send a whole batch of orders at once?", "Yes. Put the photos in a Google Drive or Dropbox folder with an order sheet listing names, sizes and products. We work through the batch overnight and return the finished files to the same folder, named by your order numbers."),
      qa("What if a file needs changes?", "Every file includes 2 free revisions. Reply with what to change, such as the crop, the border, a name or the size, and the revised file comes back with the next batch."),
    ],
  },
  {
    id: "photos",
    title: "Customer photos",
    intro: "Which photos work, and what we can fix when they are not perfect.",
    link: ["/#photos", "Photo guide"],
    items: [
      qa("What makes a good photo for a face cutout?", "A clear, front-facing photo with good light and nothing covering the face. Ask your customer for the original photo from their phone, not a screenshot or a picture saved from social media, because those are compressed and print soft."),
      qa("Can you use old, blurry or low-resolution photos?", "Often, yes. We clean and upscale slightly blurry or small photos so they print well. If a photo is too poor to print at the size ordered, we tell you before we design it, so you can ask the customer for a better one."),
      qa("Can you cut faces out of group photos?", "Yes. We can take one face or several faces from a group photo and turn each one into its own cutout, sticker or tattoo, sized to match."),
      qa("Can you combine faces from different photos?", "Yes. Faces from separate photos can be placed together on one sheet, cup or banner. We match their size and adjust color and brightness so they look like they belong together."),
      qa("Do you design pet faces too?", "Yes. Dogs, cats and other pets are cut out the same way as people, with fur edges cleaned so they print without a halo."),
    ],
  },
  {
    id: "files",
    title: "Files and printing",
    intro: "Formats, sizes and the printers and machines our files work with.",
    link: ["/file-specs/", "Full file specs"],
    items: [
      qa("Which file formats do I get?", "Face cutouts come as a 300 DPI transparent PNG, a PDF with the cut line and an SVG cut path. Tattoo files are mirrored when your paper needs it. Listing images come as JPG or PNG at the size each platform recommends."),
      qa("Which cutting machines do the files work with?", "The SVG cut path and the PDF cut line work with Cricut Print Then Cut, Silhouette Studio and most die-cut machines. Tell us your machine and we set up the file for it."),
      qa("Can you use my own print template?", "Yes. Send your cup, banner or sticker template as a PSD, AI, PDF or Canva link, and we place every design on it at the exact size, resolution and bleed your printer expects."),
      qa(
        "What resolution and print size are the files?",
        "Every file is set to the final print size at 300 DPI, with bleed and a safe area where they are needed. The file specs page lists exact sizes for each product.",
        <>
          Every file is set to the final print size at 300 DPI, with bleed and a safe area where they are needed. The <Link href="/file-specs/">file specs page</Link> lists exact sizes for each product.
        </>,
      ),
    ],
  },
  {
    id: "pricing",
    title: "Pricing and payment",
    intro: "Prices, plans and what happens if something is not right.",
    link: ["/pricing/", "See full pricing"],
    items: [
      qa(
        "How much does the service cost?",
        "Pay as you go starts at $2 per print file and $3 per face cutout. Monthly plans cost $249 for up to 100 files or $499 for up to 250 files. See pricing for every service.",
        <>
          Pay as you go starts at $2 per print file and $3 per face cutout. Monthly plans cost $249 for up to 100 files or $499 for up to 250 files. See <Link href="/pricing/">pricing</Link> for every service.
        </>,
      ),
      qa("Is there a minimum order?", "No. On pay as you go you can order a single file. Monthly plans make sense once you send files most days."),
      qa("Can I pause or cancel a monthly plan?", "Yes. There is no contract, so you can pause or cancel at any time and restart when your busy season returns."),
      qa("What if I am not happy with a file?", "Tell us what is wrong and we fix it with your 2 free revisions. If we still cannot get a file right, you do not pay for that file."),
    ],
  },
  {
    id: "privacy",
    title: "Privacy and white label",
    intro: "How customer photos are handled and how we stay invisible to your customers.",
    link: ["/white-label-design-for-print-shops/", "White label design"],
    items: [
      qa("What happens to my customers' photos?", "Customer photos are used only to make your files. They are never shared or posted, and they are deleted after delivery."),
      qa("Will my customers know I use a design service?", "No. We never contact your customers, and files carry no watermark, credit or studio name. You deliver everything under your own shop name."),
      qa("Do you sign an NDA?", "Yes, on request. Many print shops ask for one before sending their first batch, and we are happy to sign yours or provide ours."),
      qa("Where is Face Cutout Studio based?", "Our studio is in Dhaka, Bangladesh, and works during US night hours so files are ready by the US morning. We work with sellers in the United States, Canada, the United Kingdom and Australia, and all communication is in English."),
    ],
  },
];

export const FAQ_COUNT = FAQ_GROUPS.reduce((n, g) => n + g.items.length, 0);
