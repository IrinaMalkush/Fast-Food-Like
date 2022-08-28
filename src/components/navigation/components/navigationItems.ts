export type LinkDirectionType = "right" | "left" | "straight";

export interface INavigationLinks {
  path: string;
  exact?: boolean;
  direction: LinkDirectionType;
  name: string;
}

export const navigationItems: Record<string, INavigationLinks> = {
  home: {
    path: "/",
    exact: true,
    direction: "right",
    name: "Главная",
  },
  menu: {
    path: "/menu",
    direction: "right",
    name: "Меню",
  },
  delivery: {
    path: "/delivery",
    direction: "right",
    name: "Еда на дом",
  },
  events: {
    path: "/events",
    direction: "straight",
    name: "Акции",
  },
  contacts: {
    path: "/contacts",
    direction: "left",
    name: "Контакты",
  },
  comments: {
    path: "/comments",
    direction: "left",
    name: "Отзывы",
  },
  gallery: {
    path: "/gallery",
    direction: "left",
    name: "Галерея",
  },
};
