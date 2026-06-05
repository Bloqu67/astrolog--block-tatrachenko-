import { useState } from "react";
import type { SpaceObject } from "../Types";

type Props = {
    objects: SpaceObject[];
    setObjects: React.Dispatch<React.SetStateAction<SpaceObject[]>>;
};

export default function DiscoveryForm({ objects, setObjects }: Props) {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [distance, setDistance] = useState("");
    const [image, setImage] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!name || !type || !distance || !image) return;

        const newObject: SpaceObject = {
            id: Date.now(),
            name,
            type,
            distance,
            image,
        };

        setObjects([...objects, newObject]);

        // reset formularza
        setName("");
        setType("");
        setDistance("");
        setImage("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Dodaj obiekt kosmiczny</h2>

            <input
                placeholder="Nazwa"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                placeholder="Typ (np. Planeta)"
                value={type}
                onChange={(e) => setType(e.target.value)}
            />

            <input
                placeholder="Odległość"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
            />

            <input
                placeholder="URL zdjęcia"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />

            <button type="submit">Dodaj</button>
        </form>
    );
}