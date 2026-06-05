import { useState } from "react";
import type { SpaceObject } from "../Types";

type Props = {
    onAddObject: (obj: SpaceObject) => void;
};

export default function DiscoveryForm({ onAddObject }: Props) {
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

        // 🔥 WYSYŁAMY DO RODZICA
        onAddObject(newObject);

        // reset
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
                placeholder="Typ"
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