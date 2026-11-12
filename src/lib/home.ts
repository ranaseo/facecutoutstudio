export const HOME_FAQ = [
  {
    q: "What photo quality do you need for a face cutout?",
    a: "A clear, front-facing photo where the face is well lit and nothing covers it. Phone photos work well. Send the original file rather than a screenshot, because screenshots and social media downloads are compressed. If a photo won't print sharply, we tell you before we start.",
  },
  {
    q: "How long does face cutout design take?",
    a: "Standard orders are delivered within 12 to 24 hours. Orders sent by 9 PM Eastern are usually ready by 7 AM Eastern the next morning, because our studio in Dhaka works during US night hours. Rush delivery is available on the Growth plan.",
  },
  {
    q: "What file formats do you deliver?",
    a: "Every face cutout comes as a 300 DPI transparent PNG, a print-ready PDF with the cut line, and an SVG cut path. Temporary tattoo files are mirrored for tattoo paper. All files are sized to your printer's specs and named with your order numbers.",
  },
  {
    q: "Do the files work with Cricut and Silhouette?",
    a: "Yes. The SVG cut path and the PDF cut line work with Cricut Print Then Cut, Silhouette Studio and most die-cut machines. Tell us which machine and software you use, and we set up the files to match.",
  },
  {
    q: "Can you work under my shop's name?",
    a: "Yes. With white label service we never contact your customers, files carry no watermark or credit, and we sign an NDA on request. Many print shops use Face Cutout Studio as their behind-the-scenes design team.",
  },
  {
    q: "How much does face cutout design cost?",
    a: "A single face cutout costs $3. Shops that send orders every day can choose the Starter plan at $249 a month for up to 100 files or the Growth plan at $499 a month for up to 250 files. Your first 3 cutouts are free.",
  },
  {
    q: "What if my customer's photo is blurry?",
    a: "Slightly blurry or low-resolution photos can usually be cleaned and upscaled to print well. If a photo is too small or blurry to give a good result, we tell you before starting so you can ask your customer for a better one.",
  },
  {
    q: "How do I send orders in bulk?",
    a: "Share a Google Drive or Dropbox folder with an order sheet listing names, sizes and products, or email the photos. Finished files go back to the same folder, named with your order numbers, so you can print straight away.",
  },
];

export const SERVICES = [
  {
    slug: "print-ready-files-for-etsy-sellers",
    nav: "Print-ready files",
    tag: "Daily orders",
    blurb: "Background removal and print prep for cups, banners, hats and bandanas.",
    from: "From $2 per file",
  },
  {
    slug: "custom-face-sticker-design",
    nav: "Sticker & confetti design",
    tag: "Sheets",
    blurb: "Die-cut face stickers and confetti sheets with clean cut paths.",
    from: "From $6 per sheet",
  },
  {
    slug: "custom-face-tattoo-design",
    nav: "Face tattoo design",
    tag: "Tattoo paper",
    blurb: "Photo-to-tattoo artwork, sized and mirrored for temporary tattoo paper.",
    from: "From $5 per sheet",
  },
  {
    slug: "white-label-design-for-print-shops",
    nav: "White label design",
    tag: "Your brand",
    blurb: "A dedicated designer working under your shop's name, with an NDA.",
    from: "From $249 per month",
  },
  {
    slug: "etsy-listing-image-design",
    nav: "Etsy listing images",
    tag: "Listings",
    blurb: "Thumbnails, mockups and personalization guides that answer buyer questions.",
    from: "$39 per listing",
  },
  {
    slug: "shopify-product-image-design",
    nav: "Shopify product images",
    tag: "Storefront",
    blurb: "Product images and collection banners in one consistent style.",
    from: "$9 per image",
  },
] as const;

export type ServiceSlug = (typeof SERVICES)[number]["slug"];
