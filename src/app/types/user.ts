export type User = {
    id: string;
    name: string;
    surname: string;
    email: string;
    gender: "male" | "female";
    role: "user" | "admin";
};
