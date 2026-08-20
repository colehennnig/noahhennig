const CMS_URL = "https://script.google.com/macros/s/AKfycbwDrOh9mBN4Wv_b1PXjkIpcsRRl0fY5WKtI1yzROjWSYuQbAXE4BeNz6S-QnvUylzobjg/exec";

export type Experience = {
  id: string;
  name: string;
  role: string;
  start_date: string;
  end_date: string;
  location: string;
  description: string;
  image_url: string;
  highlights: string[];
  website: string;
};

export type ExpertiseGroup = {
  category: string;
  items: string[];
};

export type CMSData = {
  site: {
    site_name: string;
    site_title: string;
    site_description: string;
    footer_title: string;
    footer_description: string;
  };

  expertise: ExpertiseGroup[];

  experience: Experience[];

  sections: any;

  contact: any;

  socialLinks: any;
};

export async function getCMSData(): Promise<CMSData> {
  const response = await fetch(CMS_URL, {
    next: {
      revalidate: 300,
    },
  });

  if (!response.ok) {
    throw new Error(`CMS request failed: ${response.status}`);
  }

  return response.json();
}