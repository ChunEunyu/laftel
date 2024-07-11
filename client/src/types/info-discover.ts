export interface DiscoverInfo {
  _id: {
    $oid: string;
  };
  brands: string[];
  genres: string[];
  tags: string[];
  years: {
    animation: string[];
  };
  productions: string[];
  medium: string[];
}

