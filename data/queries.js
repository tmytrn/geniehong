export const metaData = `
*[_type == "siteconfig"]{
  title,
  description,
  previewImage{asset->{url}},
}
`;

export const siteQuery = `
*[_type == "siteconfig"]{
  title,
  description,
  "backgroundImages": backgroundImages[].asset->url,
  bio,
  "cv": cv.asset->url,
}
`;

export const portfolioQuery = `
*[_id== "portfolio"]{
  "images": portfolioImages[].asset->url,
} 
`;

export const portfolioPass = `
*[_type == "siteconfig"]{
portfolioPassword
}
`;
