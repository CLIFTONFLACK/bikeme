// Demo photography, hotlinked from Unsplash's image CDN (as Unsplash recommends). Every photo is free
// under the Unsplash License, checked on its photo page on 2026-09-17 (the four cycling photos on
// 2026-09-28). The same set is used on the website (site/index.html), so the app and the site stay
// visually consistent.

export interface Photo {
  id: string;
  alt: string;
  author: string;
  /** Extra imgix crop parameters for photos whose subject isn't centred. */
  crop?: string;
}

export const PHOTOS = {
  central: { id: 'photo-1560706834-c8b400d29d37', alt: 'Sunlight through an avenue of trees in a London park', author: 'V2F' },
  north: { id: 'photo-1723249882680-e7d99144d7c2', alt: 'Two people on a bench looking across the heath', author: 'ivan malyi', crop: '&crop=focalpoint&fp-y=0.75' },
  east: { id: 'photo-1559497353-d304de9f3647', alt: 'The red Orbit tower in Queen Elizabeth Olympic Park', author: 'Tom Wheatley' },
  south: { id: 'photo-1642582466531-92118d16f5df', alt: 'View from Greenwich Park across to the Canary Wharf skyline', author: 'zeynep elif ozdemir' },
  west: { id: 'photo-1581549072287-436a6fe3880f', alt: 'Deer grazing in a London park', author: 'Zoltan Tasi' },
  thames: { id: 'photo-1765924362722-c73be2a1c076', alt: 'The Thames Embankment with the London skyline', author: 'Philippe BONTEMPS' },
  hotel: { id: 'photo-1637730826933-54287f79e1c3', alt: 'A spacious hotel lobby', author: 'Jakob Owens' },
  race: { id: 'photo-1510766528597-60f9f1c154b6', alt: 'A peloton of racing cyclists on a tree-lined road', author: 'Rob Wingate' },
  tourism: { id: 'photo-1574854985846-97f10ecc922c', alt: 'Tower Bridge at golden hour', author: 'Nirmal Rajendharkumar' },
  corporate: { id: 'photo-1605050825077-289f85b6cf43', alt: 'Three cyclists riding together round a bend on a quiet road', author: 'Munbaik Cycling Clothing' },
  brands: { id: 'photo-1486425091969-f62210f08a26', alt: 'Racing cyclists speeding past in a blur', author: 'paolo candelo' },
  clubs: { id: 'photo-1735216228027-fe31c23474ce', alt: 'A small group of cyclists on a country lane at sunset', author: 'David Dvořáček' },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof PHOTOS;

/** Unsplash CDN URL cropped to the box. `width` is in CSS pixels; retina density is added here. */
export function photoUrl(photo: Photo, width: number, ratio: number, density = 2): string {
  const w = Math.round(width * density);
  const h = Math.round(w / ratio);
  return `https://images.unsplash.com/${photo.id}?auto=format&fit=crop${photo.crop ?? ''}&q=70&w=${w}&h=${h}`;
}
