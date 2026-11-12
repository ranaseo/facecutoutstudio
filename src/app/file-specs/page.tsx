import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { VisualCup } from "@/components/Visuals";
import { FreeTrialSection } from "@/components/FreeTrialSection";
import { Toc } from "@/components/Toc";
import { CutLine, DataTable, FaqList, JsonLd, KeyFacts, SectionHead } from "@/components/ui";
import { SITE, breadcrumbLd, faqLd, graph, webPageLd } from "@/lib/site";

const PATH = "/file-specs/";
const TITLE = "Face Cutout & Sticker File Specs (2026)";
const DESC =
  "Print file specs for face on a stick, stickers, tattoos, cups and banners: 300 DPI, bleed, cut lines, Cricut limits and Etsy and Shopify image sizes.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESC, url: PATH },
};

const CRICUT = (
  <a href="https://cricut.com/blog/gb/how-to-get-the-best-results-with-print-then-cut/" target="_blank" rel="noopener">
    Cricut
  </a>
);
const ETSY = (
  <a href="https://help.etsy.com/hc/en-us/articles/115015663347-Requirements-and-Best-Practices-for-Images-in-Your-Etsy-Shop" target="_blank" rel="noopener">
    Etsy Help
  </a>
);
const SHOPIFY = (
  <a href="https://help.shopify.com/en/manual/products/product-media/product-media-types" target="_blank" rel="noopener">
    Shopify Help Center
  </a>
);

const FAQ = [
  { q: "What DPI should a print file be?", a: "Print files should be 300 DPI at the final print size, so a 12 inch face cutout needs about 3600 pixels of height. Large banners viewed from a distance can use 150 DPI without looking soft." },
  { q: "What is bleed and how much do I need?", a: "Bleed is extra artwork that extends past the trim line, so no white edge shows if the cut is slightly off. The standard is 0.125 inch on every side that runs to the edge." },
  { q: "Should print files be RGB or CMYK?", a: "Most desktop printers, DTF and sublimation workflows expect RGB files. Offset printing and some print shops ask for CMYK. We deliver RGB by default and convert to CMYK when your printer asks for it." },
  { q: "Which file format does Cricut need?", a: "Cricut Design Space works best with a PNG for Print Then Cut and an SVG for cut-only projects. Our face cutouts come with both, plus a PDF with the cut line for print shops." },
  { q: "What is the maximum size for Cricut Print Then Cut?", a: "Cricut lists the maximum Print Then Cut image size as 9.25 by 6.75 inches. Larger face cutouts, such as 12 inch face on a stick heads, need a print shop or a large-format printer." },
  { q: "Why does my print look blurry?", a: "Blurry prints usually come from a small or compressed source photo stretched to a large size. Ask customers for the original photo from their phone, not a screenshot, and keep files at 300 DPI at print size." },
];

const crumbs = [
  { name: "Home", href: "/" },
  { name: "File specs", href: PATH },
];

const ld = graph([webPageLd({ path: PATH, title: TITLE, description: DESC }), breadcrumbLd(crumbs), faqLd(FAQ)]);

const TOC: [string, string][] = [
  ["standard", "Standard specs"],
  ["face-on-a-stick", "Face on a stick"],
  ["stickers", "Stickers"],
  ["tattoos", "Tattoos"],
  ["print-methods", "Print methods"],
  ["cricut", "Cricut"],
  ["listing-images", "Listing images"],
  ["faq", "FAQ"],
];

function Spec({
  id,
  title,
  short,
  head,
  rows,
  caption,
  more,
}: {
  id: string;
  title: string;
  short: React.ReactNode;
  head: React.ReactNode[];
  rows: React.ReactNode[][];
  caption: React.ReactNode;
  more?: [string, string];
}) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} style={{ paddingTop: 0 }}>
      <div className="container">
        <SectionHead id={`${id}-h`} title={title} short={short} />
        <DataTable head={head} rows={rows} caption={caption} />
        {more && (
          <p className="more" style={{ marginTop: 18 }}>
            <Link href={more[0]}>{more[1]} →</Link>
          </p>
        )}
      </div>
    </section>
  );
}

export default function FileSpecsPage() {
  return (
    <>
      <JsonLd data={ld} />
      <PageHero
        crumbs={crumbs}
        title={
          <>
            Print file specs for <span className="hl">face cutouts &amp; party products</span> (2026)
          </>
        }
        answer={
          <>
            Every Face Cutout Studio file is 300 DPI at final print size, with a 0.25&quot; white border and a matching cut path
            wherever the product is cut. This page lists the exact sizes, formats and cut settings we use for face on a stick,
            stickers, tattoos, cups, banners and listing images.
          </>
        }
        secondary={{ label: "See all services", href: "/services/" }}
        chips={[
          ["300 DPI", ""],
          ["PNG, PDF, SVG", ""],
          ["Cricut ready", ""],
        ]}
        visual={<VisualCup />}
      />
      <Toc items={TOC} />

      <section id="standard" aria-labelledby="standard-h">
        <div className="container def-grid">
          <div className="def">
            <h2 id="standard-h">What are the standard print file specs?</h2>
            <p className="big">
              A print-ready file is set to the final print size at 300 DPI, keeps important content inside a safe area, adds
              bleed where the print runs to the edge, and includes a cut path for anything that is cut out.
            </p>
            <p>These are our defaults. If your printer or template asks for something different, we follow your spec sheet.</p>
          </div>
          <KeyFacts
            title="Face Cutout Studio: standard specs"
            facts={[
              ["Resolution", '300 DPI at final print size; 150 DPI for banners over 36"'],
              ["Color mode", "RGB by default; CMYK on request for offset or some print shops"],
              ["Formats", "Transparent PNG, PDF with cut line, SVG cut path; DXF on request"],
              ["Bleed", '0.125" on prints that run to the edge'],
              ["Safe area", 'Text and faces kept 0.125" inside the trim'],
              ["White border", '0.25" around every cutout, adjustable'],
              ["Cut path", "Single closed path matching the outer border"],
              ["File names", "Your order number plus product and size"],
            ]}
          />
        </div>
      </section>

      <CutLine />
      <div style={{ height: 64 }} />

      <Spec
        id="face-on-a-stick"
        title="What size is a face on a stick?"
        short={
          <>
            <b>Most face on a stick heads are 8 to 12 inches tall</b>; big head cutouts for stadiums and parties go up to 24
            inches. Every size gets the same border and cut path.
          </>
        }
        head={["Product", "Head height", "Pixels at 300 DPI", "Typical material"]}
        rows={[
          ["Face on a stick, small", '8"', "about 2400 px tall", "Cardstock, foam board"],
          ["Face on a stick, standard", '12"', "about 3600 px tall", "Foam board"],
          ["Big head cutout", '18"', "about 5400 px tall", "Foam board, coroplast"],
          ["Big head cutout, XL", '24"', "about 7200 px tall", "Corrugated plastic"],
        ]}
        caption='Head height is measured from chin to top of hair; the 0.25" white border is added outside it.'
      />
      <Spec
        id="stickers"
        title="How many faces fit on a sticker sheet?"
        short={
          <>
            <b>A letter-size sheet holds 6 faces at 2.5&quot;, 12 at 2&quot; or about 40 at 1&quot; confetti size</b>, with a
            kiss-cut or die-cut path around each one.
          </>
        }
        head={["Face size", "Faces per 8.5 × 11\" sheet", "Cut type", "Use"]}
        rows={[
          ['1"', "about 40", "Die-cut", "Face confetti"],
          ['1.5"', "about 20", "Kiss-cut", "Cup and favor stickers"],
          ['2"', "12", "Kiss-cut", "Party stickers"],
          ['2.5"–3"', "6", "Kiss-cut or die-cut", "Large stickers, cupcake toppers"],
        ]}
        caption='Layouts keep a 0.125" gap between stickers and a 0.25" margin at the sheet edge.'
        more={["/custom-face-sticker-design/", "Sticker & confetti design service"]}
      />
      <Spec
        id="tattoos"
        title="What size should face temporary tattoos be?"
        short={
          <>
            <b>Face tattoos work best between 1.5 and 3 inches</b>; the file is mirrored for tattoo paper that transfers face
            down, and kept unmirrored for paper that does not.
          </>
        }
        head={["Face size", "Faces per sheet", "Mirrored?", "Note"]}
        rows={[
          ['1.5"', "about 20", "Yes, if your paper needs it", "Kids' parties, cheeks"],
          ['2"', "12", "Yes, if your paper needs it", "Most popular"],
          ['3"', "6", "Yes, if your paper needs it", "Arms and larger designs"],
        ]}
        caption="White areas do not print on clear tattoo paper, so faces are given a light skin fill and no white border."
        more={["/custom-face-tattoo-design/", "Face tattoo design service"]}
      />
      <Spec
        id="print-methods"
        title="Which file format does each print method need?"
        short={
          <>
            <b>PNG for DTF, sublimation and Print Then Cut; PDF for print shops; SVG for cut-only machines.</b> We deliver all
            three for cutouts and the right one for everything else.
          </>
        }
        head={["Print method", "File we deliver", "Color", "Special handling"]}
        rows={[
          ["Inkjet / laser on cardstock", "PDF with cut line, PNG", "RGB", "Bleed and trim marks"],
          ["Sublimation (cups, shirts)", "PNG, mirrored", "RGB", "Sized to your wrap or press template"],
          ["DTF transfers", "Transparent PNG", "RGB", "Background removed, white underbase ready"],
          ["UV DTF (cups, glass)", "Transparent PNG", "RGB", "Cut contour included"],
          ["Print shop / offset", "PDF", "CMYK on request", "0.125\" bleed, crop marks"],
          ["Cut-only vinyl", "SVG, DXF on request", "—", "Single closed path"],
        ]}
        caption="Tell us your printer and software and we match the file to it."
        more={["/print-ready-files-for-etsy-sellers/", "Print-ready files service"]}
      />
      <Spec
        id="cricut"
        title="What is the Cricut Print Then Cut size limit?"
        short={
          <>
            <b>{CRICUT} lists the maximum Print Then Cut image size as 9.25 × 6.75 inches</b> (23.5 × 17 cm). We lay out
            Cricut files inside that area so the registration marks scan.
          </>
        }
        head={["Product", "Fits Print Then Cut?", "What we do"]}
        rows={[
          ["Single face cutout", 'Up to about 6" head height', 'Fits inside the 9.25 × 6.75" limit with border'],
          ['Face on a stick, 8"', "Fits on its side", 'Rotate the head to use the 9.25" length'],
          ['Face on a stick, 12" and larger', "Does not fit", "Use a print shop or a large-format printer and cut by hand"],
          ["Sticker and confetti sheets", "Fewer faces per sheet", 'Layout limited to 9.25 × 6.75" of an 8.5 × 11" page'],
          ["Temporary tattoo sheets", "Fewer faces per sheet", 'Same 9.25 × 6.75" printable limit'],
        ]}
        caption={<>Size limit from {CRICUT}&apos;s Print Then Cut guide, checked October 2026.</>}
      />
      <Spec
        id="listing-images"
        title="What size should Etsy and Shopify product images be?"
        short={
          <>
            <b>Etsy: at least 2000 px on the shortest side. Shopify: 2048 × 2048 px for square images.</b> Both platforms show
            your main images best when every listing uses the same ratio.
          </>
        }
        head={["Image", "Size we deliver", "Format", "Source / note"]}
        rows={[
          ["Etsy listing photo", "2700 × 2025 px (4:3) or 2000 × 2000 px", "JPG", <>At least 2000 px on the shortest side ({ETSY})</>],
          ["Shopify product image", "2048 × 2048 px", "PNG or JPEG", <>Square suggested; under 20 MB ({SHOPIFY})</>],
          ["Meta ad, square", "1080 × 1080 px", "JPEG", "Cropped from the product image"],
          ["Meta story or reel", "1080 × 1920 px", "JPEG", "Vertical crop"],
        ]}
        caption="Checked against Etsy and Shopify help pages, October 2026."
        more={["/etsy-listing-image-design/", "Etsy listing image design"]}
      />

      <section id="faq" aria-labelledby="faq-h" style={{ paddingTop: 0 }}>
        <div className="container faq-grid">
          <div className="faq-side">
            <span className="eyebrow">FAQ</span>
            <h2 id="faq-h">Questions about print file specs</h2>
            <p className="updated">
              Answers reviewed <time dateTime={SITE.updated}>{SITE.updatedLabel}</time>
            </p>
            <Link className="btn btn-ghost" href="/#free" style={{ alignSelf: "flex-start" }}>
              Ask your own question
            </Link>
          </div>
          <FaqList items={FAQ} />
        </div>
      </section>

      <FreeTrialSection />
    </>
  );
}
