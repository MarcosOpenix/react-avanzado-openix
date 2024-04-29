export interface Pet {
    [key: string]: string | boolean | undefined;
    id?: string,
    name: string;
    status: string;
}

export interface StatusColor {
    success: "success",
    warning: "warning",
};