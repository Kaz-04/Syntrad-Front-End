export const siteMetadata = {
  metadataBase: "https://www.syntradltd.co.uk",
  url: "https://www.syntradltd.co.uk",
  title: "Syntrad | Electrical, Electronic & Engineering Solutions",
  description:
    "Syntrad delivers expert electrical, electronic, repair, automation, engineering, and specialist equipment solutions for homes, businesses, and industrial clients across London and the UK.",
  ogImage: "https://www.syntradltd.co.uk/assets/homeMain.png",
  twitterHandle: "@SyntradLtd",
};

export function createPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = siteMetadata.ogImage,
  locale = "en_GB",
  robots = "index, follow",
}) {
  const canonicalUrl = `${siteMetadata.url}${path}`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Syntrad Ltd" }],
    metadataBase: siteMetadata.metadataBase,
    alternates: {
      canonical: canonicalUrl,
    },
    robots,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Syntrad",
      locale,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      site: siteMetadata.twitterHandle,
      creator: siteMetadata.twitterHandle,
    },
  };
}
