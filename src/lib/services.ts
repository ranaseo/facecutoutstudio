import type { ServiceSlug } from "./home";
import type { Offer } from "./site";

export type PlanData = {
  name: string;
  price: string;
  unit: string;
  items: string[];
  cta: string;
  kind: "primary" | "ghost";
  href?: string;
};

export type ServiceData = {
  slug: ServiceSlug;
  nav: string;
  title: string; // <title>, without the brand suffix
  desc: string; // meta description
  serviceType: string;
  h1: [string, string]; // plain part, highlighted part
  answer: string;
  chips: [string, string][];
  visual: "stack" | "sheet" | "cup" | "tags" | "questions" | "hub";
  defQ: string;
  defA: string;
  defIntro: string;
  defList: string[];
  facts: [string, string][];
  inclH2: string;
  inclShort: [string, string]; // bold lead, rest
  incl: [string, string][];
  steps: [string, string, string][]; // label, title, text
  specsH2: string;
  specsShort: [string, string];
  specsHead: string[];
  specs: string[][];
  specsCaption: string;
  plans: PlanData[];
  offers: Offer[];
  faq: { q: string; a: string }[];
  related: ServiceSlug[];
};

const MONTHLY = (extra: string): PlanData => ({
  name: "Monthly plan",
  price: "$249",
  unit: "month",
  items: ["Up to 100 files a month", extra, "Shared order folder", "All services included"],
  cta: "See all plans",
  kind: "ghost",
  href: "/pricing/",
});

export const SERVICE_PAGES: ServiceData[] = [
  {
    slug: "print-ready-files-for-etsy-sellers",
    nav: "Print-ready files",
    title: "Print-Ready Files for Etsy Sellers",
    desc: "Customer photos and names turned into print-ready files for cups, banners, hats and DTF transfers. 300 DPI, your template, 12–24h. From $2 per file.",
    serviceType: "Print-ready file preparation",
    h1: ["Print-ready files for ", "Etsy sellers and print shops"],
    answer:
      "We turn your customers' photos and names into print-ready files for cups, shot glasses, banners, hats, bandanas and DTF transfers. Backgrounds are removed, colors fixed, and every file is set to your printer's size, resolution and bleed. Files arrive in 12–24 hours, from $2 each.",
    chips: [
      ["12–24h", "turnaround"],
      ["300 DPI", "at print size"],
      ["Your template", "matched"],
    ],
    visual: "cup",
    defQ: "What is a print-ready file?",
    defA: "A print-ready file is artwork that can go straight to your printer with no more editing: the right size, 300 DPI, the right color mode, and bleed or a cut line where the product needs one.",
    defIntro: "For personalized products, that usually means we:",
    defList: [
      "Remove the photo background cleanly, including hair",
      "Fix brightness, color and small blemishes",
      "Place the photo, name and date on your template",
      "Export in the format your print method needs",
    ],
    facts: [
      ["Products", "Cups, shot glasses, banners, hats, bandanas, koozies, DTF transfers"],
      ["Resolution", "300 DPI at final print size; 150 DPI for large banners"],
      ["Formats", "PNG, PDF; mirrored PNG for sublimation"],
      ["Turnaround", "12–24 hours; daily batches ready by 7 AM ET"],
      ["Revisions", "2 free per file"],
      ["Price", "From $2 per file"],
    ],
    inclH2: "What's included in every print-ready file?",
    inclShort: ["Everything between the customer's photo and your printer.", " You only press print."],
    incl: [
      ["Background removal", "Clean edges around hair, glasses and shoulders, on a transparent background."],
      ["Photo fixes", "Brightness, color and sharpness adjusted so faces print clearly on the product."],
      ["Your template", "Each design is placed on your cup wrap, banner or hat template at the exact size."],
      ["Name and spelling check", "Every name and date is checked against your order sheet before delivery."],
      ["Right format per method", "PNG for DTF and sublimation, PDF with bleed for print shops."],
      ["Order-number file names", "Files are named with your order numbers so nothing gets mixed up."],
    ],
    steps: [
      ["You · 2 minutes", "Send the order", "Share the photo, names, product and your print template by folder or email."],
      ["Studio · 12–24 hours", "We prepare the file", "We remove the background, fix the photo and place it on your print template."],
      ["You · same morning", "Print it", "Download the finished file, named by order number, and send it to your printer."],
    ],
    specsH2: "Which file format does each print method need?",
    specsShort: [
      "PNG for DTF, sublimation and Print Then Cut; PDF for print shops; SVG for cut-only machines.",
      " We deliver the right one for your method.",
    ],
    specsHead: ["Print method", "File we deliver", "Color", "Special handling"],
    specs: [
      ["Inkjet / laser on cardstock", "PDF with cut line, PNG", "RGB", "Bleed and trim marks"],
      ["Sublimation (cups, shirts)", "PNG, mirrored", "RGB", "Sized to your wrap or press template"],
      ["DTF transfers", "Transparent PNG", "RGB", "Background removed, white underbase ready"],
      ["UV DTF (cups, glass)", "Transparent PNG", "RGB", "Cut contour included"],
      ["Print shop / offset", "PDF", "CMYK on request", '0.125" bleed, crop marks'],
      ["Cut-only vinyl", "SVG, DXF on request", "—", "Single closed path"],
    ],
    specsCaption: "Tell us your printer and software and we match the file to it.",
    plans: [
      {
        name: "Per file",
        price: "$2",
        unit: "file",
        items: ["Background removal", "Placed on your template", "Name and spelling check", "12–24h turnaround"],
        cta: "Start with 3 free",
        kind: "primary",
      },
      MONTHLY("Daily batches by 7 AM ET"),
    ],
    offers: [
      { name: "Print-ready file", price: "2", unit: "file" },
      { name: "Starter plan", price: "249", unit: "month" },
    ],
    faq: [
      { q: "What does print-ready mean?", a: "Print-ready means the file needs no more editing before printing. It is the correct size at 300 DPI, uses the color mode your printer expects, and has bleed or a cut line where the product needs one." },
      { q: "Can you remove backgrounds for DTF printing?", a: "Yes. We remove the background and deliver a transparent PNG with clean edges, so no white box or halo prints around the design on DTF or UV DTF transfers." },
      { q: "Which file format is best for printing?", a: "It depends on the print method. DTF, sublimation and Cricut Print Then Cut work best with a 300 DPI PNG. Print shops usually ask for a PDF with bleed. Cut-only machines need an SVG." },
      { q: "Can you use my cup or banner template?", a: "Yes. Send your template as a PSD, AI, PDF or Canva link, and we place every design on it at the exact size, resolution and bleed your printer expects." },
      { q: "Do you check names and spelling?", a: "Yes. Every name and date is checked against your order sheet before the file is delivered. If something in the order looks wrong, we ask before we design it." },
    ],
    related: ["custom-face-sticker-design", "custom-face-tattoo-design", "white-label-design-for-print-shops"],
  },
  {
    slug: "custom-face-sticker-design",
    nav: "Sticker & confetti design",
    title: "Custom Face Sticker & Confetti Design",
    desc: "Customer photos turned into die-cut face sticker and confetti sheets with cut paths for Cricut and Silhouette. 300 DPI, 12–24h. From $6 per sheet.",
    serviceType: "Custom face sticker and confetti design",
    h1: ["Custom face sticker and ", "confetti sheet design"],
    answer:
      "We turn customer photos into print-ready face sticker and face confetti sheets. Each face is cut out, given a white border and a cut path, and laid out on a letter-size sheet for Cricut, Silhouette or a print shop. Sheets are delivered in 12–24 hours, from $6 per sheet.",
    chips: [
      ["12–24h", "turnaround"],
      ['1"–3"', "face sizes"],
      ["Cut path", "included"],
    ],
    visual: "sheet",
    defQ: "What is a custom face sticker sheet?",
    defA: "A custom face sticker sheet is a printable page of one person's face, repeated as stickers, with a cut path around each one so a cutting machine can kiss-cut or die-cut them.",
    defIntro: "Sellers use the same sheet for:",
    defList: [
      "Face stickers for cups, favor bags and invitations",
      "Face confetti for tables and balloons",
      "Cupcake toppers and gift tags",
      "Bachelorette, birthday and graduation party packs",
    ],
    facts: [
      ["Face sizes", '1" confetti to 3" stickers'],
      ["Sheet size", '8.5 × 11" letter; A4 on request'],
      ["Cut type", "Kiss-cut or die-cut"],
      ["Formats", "PNG, PDF with cut line, SVG cut path"],
      ["Turnaround", "12–24 hours"],
      ["Price", "From $6 per sheet"],
    ],
    inclH2: "What's included in a face sticker sheet?",
    inclShort: ["A finished sheet you can print and cut.", " No layout work left for you."],
    incl: [
      ["Face cutout", "Each face is cut out with hair edges cleaned, ready to sit on any color."],
      ["White border", "An even white border around every sticker, so cuts look clean."],
      ["Cut path", "A kiss-cut or die-cut path for Cricut, Silhouette and die-cut machines."],
      ["Names or dates", "Add a name, age or date under or around the face at no extra cost."],
      ["Up to 3 faces per sheet", "Mix up to 3 different faces on one sheet for group orders."],
      ["Sheet layout", "Faces are spaced for your machine, with safe margins at the sheet edge."],
    ],
    steps: [
      ["You · 2 minutes", "Send the photos", "Share the photos, sticker size, and any names or dates to add."],
      ["Studio · 12–24 hours", "We build the sheet", "We cut out each face, add borders and text, and lay out the sheet with cut paths."],
      ["You · same morning", "Print and cut", "Print the sheet and load the cut file into your machine."],
    ],
    specsH2: "How many faces fit on a sticker sheet?",
    specsShort: [
      'A letter-size sheet holds 6 faces at 2.5", 12 at 2" or about 40 at 1" confetti size',
      ", with a kiss-cut or die-cut path around each one.",
    ],
    specsHead: ["Face size", 'Faces per 8.5 × 11" sheet', "Cut type", "Use"],
    specs: [
      ['1"', "about 40", "Die-cut", "Face confetti"],
      ['1.5"', "about 20", "Kiss-cut", "Cup and favor stickers"],
      ['2"', "12", "Kiss-cut", "Party stickers"],
      ['2.5"–3"', "6", "Kiss-cut or die-cut", "Large stickers, cupcake toppers"],
    ],
    specsCaption: 'Layouts keep a 0.125" gap between stickers and a 0.25" margin at the sheet edge.',
    plans: [
      {
        name: "Per sheet",
        price: "$6",
        unit: "sheet",
        items: ["Up to 3 different faces", "Cut path included", "Names or dates added", "12–24h turnaround"],
        cta: "Start with 3 free",
        kind: "primary",
      },
      MONTHLY("Ready by 7 AM ET"),
    ],
    offers: [
      { name: "Sticker sheet", price: "6", unit: "sheet" },
      { name: "Starter plan", price: "249", unit: "month" },
    ],
    faq: [
      { q: "What is face confetti?", a: "Face confetti is small die-cut pieces, usually about 1 inch, printed with a person's face. Party sellers scatter it on tables or put it inside balloons. We lay out about 40 faces on a letter-size sheet." },
      { q: "Can you add names or text to face stickers?", a: "Yes. A name, age, date or short phrase can go under or around the face. Text is included in the sheet price and checked against your order." },
      { q: "Do custom face stickers work on cups?", a: "Yes, if you print on waterproof vinyl sticker paper. We size the stickers to your cup, usually 1.5 to 2.5 inches, and keep the cut path smooth so the edges do not lift." },
      { q: "Which cut file do you send?", a: "Every sheet comes with a PNG for Print Then Cut, a PDF with the cut line for print shops, and an SVG cut path for Cricut Design Space and Silhouette Studio." },
      { q: "How many faces fit on one sheet?", a: "A letter-size sheet holds about 40 faces at 1 inch, about 20 at 1.5 inches, 12 at 2 inches or 6 at 2.5 to 3 inches. Cricut Print Then Cut sheets hold fewer because of its smaller print area." },
    ],
    related: ["custom-face-tattoo-design", "print-ready-files-for-etsy-sellers", "etsy-listing-image-design"],
  },
  {
    slug: "custom-face-tattoo-design",
    nav: "Face tattoo design",
    title: "Custom Face Temporary Tattoo Design",
    desc: "Customer photos turned into face temporary tattoo sheets: sized 1.5–3 inches, mirrored for tattoo paper and print-ready in 12–24h. From $5 per sheet.",
    serviceType: "Custom face temporary tattoo design",
    h1: ["Custom face temporary ", "tattoo design"],
    answer:
      "We turn customer photos into custom face temporary tattoo artwork. Each face is cut out, sized from 1.5 to 3 inches, given a clean edge for clear tattoo paper, mirrored when your paper needs it, and laid out on a print-ready sheet. Delivered in 12–24 hours, from $5 per sheet.",
    chips: [
      ["12–24h", "turnaround"],
      ['1.5"–3"', "face sizes"],
      ["Mirrored", "when needed"],
    ],
    visual: "sheet",
    defQ: "What is a custom face temporary tattoo?",
    defA: "A custom face temporary tattoo is a person's face printed on temporary tattoo paper, which transfers to skin with water. It is a popular favor for bachelorette parties, birthdays and game days.",
    defIntro: "The file is different from a sticker file because:",
    defList: [
      "Most tattoo paper transfers face down, so the art is mirrored",
      "White does not print on clear tattoo paper",
      "Fine hair edges need to be simplified to transfer cleanly",
      "Faces need more contrast to read on skin",
    ],
    facts: [
      ["Face sizes", '1.5", 2" and 3"'],
      ["Sheet size", '8.5 × 11" letter; A4 on request'],
      ["Mirroring", "Mirrored when your paper transfers face down"],
      ["Formats", "PNG, PDF; cut path on request"],
      ["Turnaround", "12–24 hours"],
      ["Price", "From $5 per sheet"],
    ],
    inclH2: "What's included in a face tattoo sheet?",
    inclShort: ["Artwork made for tattoo paper, not a resized sticker.", " It transfers cleanly the first time."],
    incl: [
      ["Face cutout", "Each face is cut out and the hair edge simplified so it transfers in one piece."],
      ["Contrast for skin", "Brightness and contrast are adjusted so the face stays clear on skin."],
      ["Mirrored print file", "The sheet is flipped when your paper needs it, so names read the right way."],
      ["Frames or names", "Add a heart, banner, name or date around the face at no extra cost."],
      ["Up to 3 faces per sheet", "Mix up to 3 different faces on one sheet for group orders."],
      ["Sheet layout", "Faces are spaced for hand cutting or a cutting machine."],
    ],
    steps: [
      ["You · 2 minutes", "Send the photos", "Share the photos, tattoo size and the tattoo paper brand you use."],
      ["Studio · 12–24 hours", "We design the sheet", "We cut out and adjust each face, add any frames or names, and lay out the sheet."],
      ["You · same morning", "Print and apply", "Print on tattoo paper, add the adhesive sheet and cut."],
    ],
    specsH2: "What size should face temporary tattoos be?",
    specsShort: [
      "Face tattoos work best between 1.5 and 3 inches",
      "; the file is mirrored for tattoo paper that transfers face down, and kept unmirrored for paper that does not.",
    ],
    specsHead: ["Face size", "Faces per sheet", "Mirrored?", "Note"],
    specs: [
      ['1.5"', "about 20", "Yes, if your paper needs it", "Kids' parties, cheeks"],
      ['2"', "12", "Yes, if your paper needs it", "Most popular"],
      ['3"', "6", "Yes, if your paper needs it", "Arms and larger designs"],
    ],
    specsCaption: "White areas do not print on clear tattoo paper, so faces are given a light skin fill and no white border.",
    plans: [
      {
        name: "Per sheet",
        price: "$5",
        unit: "sheet",
        items: ["Up to 3 different faces", "Mirrored print file", "Frames or names added", "12–24h turnaround"],
        cta: "Start with 3 free",
        kind: "primary",
      },
      MONTHLY("Ready by 7 AM ET"),
    ],
    offers: [
      { name: "Tattoo sheet", price: "5", unit: "sheet" },
      { name: "Starter plan", price: "249", unit: "month" },
    ],
    faq: [
      { q: "Do you mirror the file for tattoo paper?", a: "Yes, when your paper needs it. Most temporary tattoo paper transfers face down, so the artwork is flipped and any names read correctly on skin. Tell us your paper brand and we set it up to match." },
      { q: "Why does white not show on my face tattoos?", a: "Home printers do not print white ink, so white areas on clear tattoo paper stay transparent and show the skin. We avoid white borders and adjust light areas so the face still reads clearly." },
      { q: "What size should a face tattoo be?", a: "Two inches is the most popular size. Use 1.5 inches for kids' parties and cheeks, and 3 inches for arms or designs with a frame or name." },
      { q: "Can you add names or frames to face tattoos?", a: "Yes. Hearts, banners, names, dates and short phrases can be added around the face. They are included in the sheet price." },
      { q: "Can one sheet hold several different faces?", a: "Yes. One sheet can mix up to 3 different faces. For more faces, order extra sheets or use a monthly plan." },
    ],
    related: ["custom-face-sticker-design", "print-ready-files-for-etsy-sellers", "etsy-listing-image-design"],
  },
  {
    slug: "white-label-design-for-print-shops",
    nav: "White label design",
    title: "White Label Design for Print Shops",
    desc: "A behind-the-scenes design team for print shops and party brands: overnight files under your name, NDA on request, no contract. Plans from $249 a month.",
    serviceType: "White label graphic design",
    h1: ["White label design for ", "print shops and party brands"],
    answer:
      "Face Cutout Studio works as your behind-the-scenes design team. You send customer orders in the evening, we prepare the print-ready files overnight, and you deliver them under your own shop name. We never contact your customers, files carry no watermark, and we sign an NDA on request. Plans start at $249 a month.",
    chips: [
      ["By 7 AM ET", "files ready"],
      ["NDA", "on request"],
      ["No contract", ""],
    ],
    visual: "stack",
    defQ: "What is white label design?",
    defA: "White label design means a studio does the design work and you sell it as your own. Your customers only ever see your shop name.",
    defIntro: "For a print shop, that means:",
    defList: [
      "No designer to hire, train or manage",
      "Files ready when your shop opens",
      "Capacity that grows in busy seasons",
      "Nothing on any file that points to us",
    ],
    facts: [
      ["Who it's for", "Print shops, Etsy and Shopify sellers, party brands"],
      ["Hours", "Overnight for US time zones; files ready by 7 AM ET"],
      ["Volume", "100, 250 or more files a month"],
      ["Confidentiality", "NDA on request; photos deleted after delivery"],
      ["Contract", "None; pause or cancel anytime"],
      ["Price", "From $249 per month"],
    ],
    inclH2: "What's included in white label service?",
    inclShort: ["A design team that works like your own staff.", " Your customers never know we exist."],
    incl: [
      ["All services", "Face cutouts, print files, sticker and tattoo sheets and listing images, on one plan."],
      ["Shared order folder", "One folder for orders in and files out, checked every evening, US time."],
      ["Overnight turnaround", "Orders sent by 9 PM Eastern are usually ready by 7 AM Eastern."],
      ["No watermark or credit", "Files carry your order numbers and nothing else."],
      ["NDA and photo deletion", "Customer photos are deleted after delivery and kept confidential."],
      ["Your templates and style", "We follow your templates, fonts and file naming."],
    ],
    steps: [
      ["Every evening", "You drop in orders", "Add photos and an order sheet to the shared folder before 9 PM Eastern."],
      ["Overnight", "We design and check", "Each file is designed, checked against the order and exported to your specs."],
      ["Every morning", "Files and proofs ready", "Finished files and proofs are waiting by 7 AM Eastern."],
    ],
    specsH2: "Which white label plan fits my shop?",
    specsShort: [
      "Pick the plan by how many files you send a month.",
      " Every plan includes all services and overnight turnaround; you can pause in slow months.",
    ],
    specsHead: ["Plan", "Files a month", "Best for", "Includes"],
    specs: [
      ["Starter", "Up to 100", "Shops with a few orders a day", "All services, shared folder"],
      ["Growth", "Up to 250", "Busy shops and seasonal peaks", "NDA, rush orders, dedicated designer"],
      ["Custom", "250+", "High-volume shops", "Custom hours and turnaround"],
    ],
    specsCaption: "Prices in USD. One Etsy listing photo set counts as 7 files.",
    plans: [
      {
        name: "Starter plan",
        price: "$249",
        unit: "month",
        items: ["Up to 100 files a month", "All services included", "Ready by 7 AM ET", "Shared order folder"],
        cta: "Start with 3 free",
        kind: "ghost",
      },
      {
        name: "Growth plan",
        price: "$499",
        unit: "month",
        items: ["Up to 250 files a month", "White label + NDA", "Rush orders", "Dedicated designer"],
        cta: "Talk to us",
        kind: "primary",
      },
    ],
    offers: [
      { name: "Starter plan", price: "249", unit: "month" },
      { name: "Growth plan", price: "499", unit: "month" },
    ],
    faq: [
      { q: "What is a white label service?", a: "A white label service does work that you sell under your own name. We design the files, you deliver them to your customers, and nothing on the files mentions Face Cutout Studio." },
      { q: "Will my customers know you exist?", a: "No. We never contact your customers, and files carry no watermark, credit or studio name. All communication goes through you." },
      { q: "Do you sign an NDA?", a: "Yes, on request. Customer photos are used only for your orders and deleted after delivery." },
      { q: "What hours do you work in US time?", a: "Our studio in Dhaka works during US night hours. Orders sent by 9 PM Eastern are usually ready by 7 AM Eastern." },
      { q: "Can I pause my plan in slow months?", a: "Yes. There is no contract, so you can pause or cancel at any time and restart when your busy season comes back." },
    ],
    related: ["print-ready-files-for-etsy-sellers", "custom-face-sticker-design", "etsy-listing-image-design"],
  },
  {
    slug: "etsy-listing-image-design",
    nav: "Etsy listing images",
    title: "Etsy Listing Image Design Service",
    desc: "Etsy listing photo sets for personalized products: thumbnail, mockups, size chart and how-to-order images, sized to Etsy's specs. $39 per listing.",
    serviceType: "Etsy listing image design",
    h1: ["Etsy listing image design for ", "personalized products"],
    answer:
      "We design a full set of Etsy listing photos for personalized products: a clear thumbnail, product mockups, a size chart, a how-to-order guide and a what's-included image. Each set has 7 images sized to Etsy's recommendations, delivered in 2–3 business days for $39 per listing.",
    chips: [
      ["7 images", "per listing"],
      ["2–3 days", "delivery"],
      ["$39", "per listing"],
    ],
    visual: "tags",
    defQ: "What is an Etsy listing image set?",
    defA: "An Etsy listing image set is the group of photos a buyer swipes through before ordering. For personalized products, the images also have to explain how to send a photo and what the buyer will receive.",
    defIntro: "A good set answers buyer questions before they message you:",
    defList: [
      "What does the product look like in use?",
      "What sizes can I choose?",
      "How do I send my photo and name?",
      "What exactly arrives in the package?",
    ],
    facts: [
      ["Images per set", "7"],
      ["Image size", "2700 × 2025 px (4:3) or 2000 × 2000 px"],
      ["Format", "JPG"],
      ["Delivery", "2–3 business days"],
      ["Add-on", "Etsy title and tags, $15 per listing"],
      ["Price", "$39 per listing"],
    ],
    inclH2: "What's in an Etsy listing photo set?",
    inclShort: ["Seven images, each with one job.", " Together they answer the questions buyers ask most."],
    incl: [
      ["Main thumbnail", "A clean first image that reads clearly at small size in search results."],
      ["Product mockups", "Your design shown on the product, without needing a physical sample."],
      ["Size chart", "Sizes shown side by side so buyers choose the right one."],
      ["How to order", "Simple steps for sending a photo, name and date."],
      ["What's included", "Exactly what the buyer receives, to cut down on messages."],
      ["Photo guide", "What kind of photo works best, so you get better photos from buyers."],
    ],
    steps: [
      ["You · 5 minutes", "Send the listing", "Share your listing link or product details, plus any photos you already have."],
      ["Studio · 2–3 days", "We design the set", "We design 7 images in one consistent style that matches your shop."],
      ["You · 5 minutes", "Upload to Etsy", "Upload the images in order and update your listing."],
    ],
    specsH2: "What size should Etsy listing photos be?",
    specsShort: [
      "Etsy recommends at least 2000 px on the shortest side.",
      " We deliver 2700 × 2025 px in 4:3, or 2000 × 2000 px square if you prefer.",
    ],
    specsHead: ["Image", "Size we deliver", "Format", "Note"],
    specs: [
      ["Etsy listing photo", "2700 × 2025 px (4:3) or 2000 × 2000 px", "JPG", "At least 2000 px on the shortest side"],
      ["Thumbnail crop", "Checked at small size", "JPG", "Key content kept in the center"],
      ["Meta ad, square", "1080 × 1080 px", "JPEG", "Cropped from the listing image, on request"],
    ],
    specsCaption: "Sizes follow Etsy's image requirements and best practices, checked October 2026.",
    plans: [
      {
        name: "Listing photo set",
        price: "$39",
        unit: "listing",
        items: ["7 listing images", "Mockups without a sample", "Sized for Etsy", "2 free revisions"],
        cta: "Start with 3 free",
        kind: "primary",
      },
      {
        name: "Title and tags",
        price: "$15",
        unit: "listing",
        items: ["Keyword-researched title", "13 tags", "Add-on to a photo set", "Not counted toward plans"],
        cta: "See all plans",
        kind: "ghost",
        href: "/pricing/",
      },
    ],
    offers: [
      { name: "Etsy listing photo set", price: "39", unit: "listing" },
      { name: "Etsy title and tags", price: "15", unit: "listing" },
    ],
    faq: [
      { q: "What size should Etsy listing photos be?", a: "Etsy recommends listing photos at least 2000 pixels on the shortest side. We deliver 2700 by 2025 pixels in a 4:3 ratio, or 2000 by 2000 pixels square, with key content centered so thumbnails crop well." },
      { q: "How many photos should an Etsy listing have?", a: "For personalized products, 7 images cover what buyers need: a thumbnail, mockups, a size chart, how to order, what's included and a photo guide. Etsy allows more, and you can add your own photos to the set." },
      { q: "Can you make mockups without a physical sample?", a: "Yes. We build mockups from your design files and product details, so you can list a new product before you print a sample." },
      { q: "Do you write Etsy titles and tags too?", a: "Yes, as an add-on. A keyword-researched title and 13 tags cost $15 per listing." },
      { q: "Will new photos help my Etsy listing rank?", a: "Photos do not change ranking directly, and no one can promise a position. Clearer images can lead more shoppers to click and buy, and Etsy says it considers how shoppers respond to a listing when ranking it." },
    ],
    related: ["shopify-product-image-design", "custom-face-sticker-design", "white-label-design-for-print-shops"],
  },
  {
    slug: "shopify-product-image-design",
    nav: "Shopify product images",
    title: "Shopify Product Image Design Service",
    desc: "Shopify product images, mockups and collection banners for personalized products in one consistent style. 2048 × 2048 px, alt text included. $9 per image.",
    serviceType: "Shopify product image design",
    h1: ["Shopify product image design for ", "personalized products"],
    answer:
      "We design Shopify product images for personalized products: clean main images, mockups, variant images and collection banners in one consistent style. Images are delivered at 2048 × 2048 px with alt text, in 2–3 business days, for $9 per image.",
    chips: [
      ["2048 px", "square"],
      ["2–3 days", "delivery"],
      ["$9", "per image"],
    ],
    visual: "hub",
    defQ: "What is Shopify product image design?",
    defA: "Shopify product image design is preparing the images on your product and collection pages so they share one size, one background and one style, and load fast.",
    defIntro: "For a personalized product store, that covers:",
    defList: [
      "Main product images on a consistent background",
      "Mockups for each product and variant",
      "Collection and homepage banners",
      "Square and vertical crops for ads",
    ],
    facts: [
      ["Image size", "2048 × 2048 px square"],
      ["Formats", "PNG or JPEG"],
      ["Alt text", "Included with every image"],
      ["Delivery", "2–3 business days"],
      ["Revisions", "2 free per image"],
      ["Price", "$9 per image"],
    ],
    inclH2: "What's included with every Shopify image?",
    inclShort: ["Images that make the whole store look like one brand.", " Ready to upload."],
    incl: [
      ["Consistent style", "One background, one angle and one crop across every product."],
      ["Mockups", "Your designs shown on the product, without a photo shoot."],
      ["Square 2048 px", "Sized to Shopify's suggested square format so product grids line up."],
      ["Alt text", "A short description for each image, for accessibility and search."],
      ["Small file sizes", "Compressed so pages stay fast on mobile."],
      ["Ad crops on request", "Square and vertical versions for Meta ads from the same design."],
    ],
    steps: [
      ["You · 5 minutes", "Send your store", "Share your store link, the products to cover and any brand guidelines."],
      ["Studio · 2–3 days", "We design the images", "We design each image in one consistent style and write the alt text."],
      ["You · 5 minutes", "Upload to Shopify", "Add the images and alt text to your products and collections."],
    ],
    specsH2: "What size should Shopify product images be?",
    specsShort: [
      "2048 × 2048 px for square product images.",
      " Using the same ratio for every product keeps your collection pages even.",
    ],
    specsHead: ["Image", "Size we deliver", "Format", "Note"],
    specs: [
      ["Product image", "2048 × 2048 px", "PNG or JPEG", "Square; under 20 MB"],
      ["Collection banner", "Sized to your theme", "JPEG", "Text kept inside the safe area"],
      ["Meta ad, square", "1080 × 1080 px", "JPEG", "Cropped from the product image"],
      ["Meta story or reel", "1080 × 1920 px", "JPEG", "Vertical crop"],
    ],
    specsCaption: "Sizes follow the Shopify Help Center's product media guidance, checked October 2026.",
    plans: [
      {
        name: "Per image",
        price: "$9",
        unit: "image",
        items: ["2048 × 2048 px", "Alt text included", "Matched to your brand", "2 free revisions"],
        cta: "Start with 3 free",
        kind: "primary",
      },
      MONTHLY("1 file per image"),
    ],
    offers: [
      { name: "Shopify product image", price: "9", unit: "image" },
      { name: "Starter plan", price: "249", unit: "month" },
    ],
    faq: [
      { q: "What size should Shopify product images be?", a: "Shopify suggests 2048 by 2048 pixels for square product images. We deliver that size by default and keep every product in the same ratio so collection pages line up." },
      { q: "Which image format is best for Shopify?", a: "JPEG suits most product photos because files stay small. PNG is better when you need a transparent background. Shopify also converts images to modern formats for browsers that support them." },
      { q: "Can you match my existing brand style?", a: "Yes. Send your store link or brand guidelines, and we match your backgrounds, colors, fonts and crop so new images sit next to your current ones." },
      { q: "Do you write alt text for product images?", a: "Yes. Every image comes with a short alt text that describes the product, which helps screen reader users and image search." },
      { q: "Can you make ad images from the same designs?", a: "Yes. On request we deliver 1080 by 1080 square and 1080 by 1920 vertical versions for Meta ads, cropped from the same design." },
    ],
    related: ["etsy-listing-image-design", "print-ready-files-for-etsy-sellers", "white-label-design-for-print-shops"],
  },
];

export function getService(slug: ServiceSlug): ServiceData {
  const s = SERVICE_PAGES.find((p) => p.slug === slug);
  if (!s) throw new Error(`Unknown service: ${slug}`);
  return s;
}
