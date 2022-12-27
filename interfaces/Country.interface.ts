export interface CountryProps {
  flags: {
    png: string;
    svg: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      eng: {
        official: string;
        common: string;
      };
    };
  };
  capital: string[];
  altSpellings: string[];
}

export interface CountryQuizProps {
  country: CountryProps;
}
