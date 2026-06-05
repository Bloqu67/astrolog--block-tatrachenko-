export type SpaceObject = {
    id: number;
    name: string;
    type: "Planeta" | "Gwiazda" | "Galaktyka" | "Inne";
    distance: string;
    image: string;
};