// All responses from the backend have the following shape
export interface IResponse<T> {
  count: number;
  next: string;
  previous: any;
  results: T[];
}

// Photo model
export interface PhotoType {
  prod: string;
  small: string;
  large: string;
  medium: string;
}

export interface IMetaData {
  name: string;
  description?: string;
}

export interface IPhoto {
  url: string;
  photo: PhotoType;
  motive: string;
  date_taken: Date;
  date_modified: Date;
  photo_ppoi: string;
  page: number;
  image_number: number;
  lapel: boolean;
  scanned: boolean;
  on_home_page: boolean;
  splash: boolean;
  tags: IMetaData[];
  category: IMetaData;
  media: IMetaData;
  album: IMetaData;
  place: IMetaData;
}
export class PhotoResponse implements IResponse<IPhoto> {
  count: number;
  next: string;
  previous: string;
  results: IPhoto[];

  constructor(response: IResponse<IPhoto>) {
    this.count = response.count;
    this.next = response.next;
    this.previous = response.previous ? response.previous : undefined;
    this.results = response.results;
  }
}

export interface IUser {
  username: string;
  address?: string;
  zip_code?: any;
  city?: string;
  phone?: any;
  member_number?: any;
  opptaksaar?: any;
  gjengjobb1?: string;
  gjengjobb2?: string;
  gjengjobb3?: string;
  hjemmeside?: string;
  uker?: string;
  fg_kallenavn?: string;
  bilde?: string;
  aktiv_pang?: boolean;
  aktiv?: boolean;
  comments?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
}

export interface IFilters {
  page?: string;
  search?: string;
}

export const testData: IResponse<IPhoto> = {
  count: 1,
  next: null,
  previous: null,
  results: [
    {
      url: 'foo.bar',
      photo: { prod: 'p', large: 'l', small: 's', medium: 'm' },
      motive: 'desc',
      date_taken: new Date(),
      date_modified: new Date(),
      photo_ppoi: 'ppoi',
      page: 13,
      image_number: 37,
      lapel: false,
      scanned: false,
      on_home_page: false,
      splash: false,
      tags: [{ name: 'tag' }, { name: 'tag2' }],
      category: { name: 'cat' },
      media: { name: 'med' },
      album: { name: 'alb' },
      place: { name: 'plc' },
    }
  ]
}
