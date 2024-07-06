export type TExperience = {
  title: string;
  employmentType?: string;
  companyName: string;
  location?: string;
  locationType?: string;
  startDate: {
    month: string;
    year: string;
  };
  endDate?: {
    month: string;
    year: string;
  };
  description?: string;
};
