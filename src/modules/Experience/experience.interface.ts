export type TExperience = {
  title: string;
  employmentType?: string;
  companyName: string;
  location?: string;
  locationType?: string;
  startDate: {
    month: string;
    year: number;
  };
  endDate?: {
    month: string;
    year: number;
  };
  Description?: string;
};
