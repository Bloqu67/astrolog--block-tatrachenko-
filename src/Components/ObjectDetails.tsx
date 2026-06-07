import type { SpaceObject } from "../Types";

type Props = {
    object: SpaceObject | null;  //lub
};

export default function ObjectDetails({ object }: Props) {  //komponent wyświetla
    if (!object) {  //jak nie wybrano nic
        return (
            <div className="details">
                <h2>🌠 Wybierz obiekt</h2>
                <p>Kliknij element z katalogu, aby zobaczyć szczegóły.</p>
            </div>
        );
    }

    return (
        <div className="details">
            <h2>✨ {object.name}</h2>

            <p>
                <strong>Typ:</strong> {object.type}
            </p>

            <p>
                <strong>Odległość:</strong> {object.distance}
            </p>

            <img src={object.image} alt={object.name} />
        </div>
    );
}