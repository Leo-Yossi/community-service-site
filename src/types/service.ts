export type ServiceCase = {
  id: string;
  title: string;
  note: string;
  beforeLabel?: string;
  afterLabel?: string;
};

export type SubItem = {
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
  cases?: ServiceCase[];
};

export type Service = {
  id: string;
  title: string;
  eyebrow: string;
  tagline: string;
  intro: string;
  subItems: SubItem[];
};
