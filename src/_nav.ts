export interface NavData {
  id?: string;
  title?: string;
  url?: string;
  icon?: string;
  subUrls?: string[];
}

export const navItems: NavData[] = [
  {
    id: "MNU110",
    title: "환자리스트",
    url: "/patient",
    icon: "client_list_icon",
    subUrls: [],
  },
];
