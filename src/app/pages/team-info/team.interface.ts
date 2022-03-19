export interface TeamInterface {
  activeCompetitions: [
    {
      id: number;
      area: { id: number; name: string };
      name: string;
      code: string;
      plan: string;
    }
  ];
  address: string;
  area: { id: number; name: string };
  clubColors: string;
  crestUrl: string;
  email: string;
  founded: number;
  id: number;
  lastUpdated: string;
  name: string;
  phone: string;
  shortName: string;
  squad?: [
    {
      name?: string;
      position: string;
      dateOfBirth: string;
      nationality: string;
    }
  ];
  tla: string;
  venue: string;
  website: string;
}
