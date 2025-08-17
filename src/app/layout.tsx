import "../styles/index.scss";
import { Metadata } from "next";

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Stratic Flow",
  "image": "https://straticflow.com/logo.png",
  "description": "Vietnam's premier digital growth agency specializing in strategic marketing and predictable business growth. Transform marketing chaos into predictable revenue with our proven Stratic Flow Method™.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "VN",
    "addressRegion": "Ho Chi Minh City"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "10.8231",
    "longitude": "106.6297"
  },
  "url": "https://straticflow.com",
  "telephone": "+84-xxx-xxx-xxxx",
  "email": "hello@straticflow.com",
  "openingHours": ["Mo-Fr 09:00-18:00"],
  "priceRange": "$$",
  "areaServed": {
    "@type": "Country",
    "name": "Vietnam"
  },
  "serviceType": "Digital Marketing Agency",
  "knowsAbout": [
    "Digital Marketing",
    "Google Ads",
    "Facebook Advertising",
    "Website Development",
    "Marketing Automation",
    "Lead Generation",
    "ROI Optimization"
  ],
  "sameAs": [
    "https://facebook.com/straticflow",
    "https://linkedin.com/company/straticflow"
  ]
};

export const metadata: Metadata = {
  title: "Digital Marketing Agency Vietnam | Stratic Flow - Proven Growth Strategies",
  description: "Vietnam's premier digital marketing agency. Transform marketing chaos into predictable growth with our proven Stratic Flow Method™. Expert Google Ads, website development, and strategic planning for Vietnamese businesses.",
  keywords: ["digital marketing agency Vietnam", "Google Ads Vietnam", "website development Vietnam", "marketing automation Vietnam", "lead generation Vietnam", "ROI marketing Vietnam", "Stratic Flow Method"],
  viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
  openGraph: {
    title: "Stratic Flow - Digital Marketing Agency Vietnam",
    description: "Transform marketing chaos into predictable growth with our proven Stratic Flow Method™. Vietnam's premier digital growth agency.",
    images: ["https://straticflow.com/og-image.jpg"],
    url: "https://straticflow.com",
    type: "website",
    siteName: "Stratic Flow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stratic Flow - Digital Marketing Agency Vietnam",
    description: "Transform marketing chaos into predictable growth with our proven Stratic Flow Method™.",
    images: ["https://straticflow.com/twitter-image.jpg"],
  },
  robots: "index, follow",
  authors: [{ name: "Stratic Flow" }],
  language: "English",
  revisitAfter: "7 days",
  alternates: {
    canonical: "https://straticflow.com",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const isDev = process.env.NODE_ENV === 'development'

  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&display=swap" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaMarkup)
          }}
        />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}