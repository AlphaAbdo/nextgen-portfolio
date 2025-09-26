export interface INavItem {
  section: string;
  label: string;
  icon?: string;
  description?: string;
}

export type MenuActionKind = 'open' | 'close' | 'toggle' | 'navigate' | 'interact';

export type MenuAction = {
  kind: MenuActionKind;
  payload?: Record<string, any> | string | undefined;
};
