export interface NavigationItem {

    label: string;

    icon?: string;

    route?: string;

    children?: NavigationItem[];

    section?: boolean;

}