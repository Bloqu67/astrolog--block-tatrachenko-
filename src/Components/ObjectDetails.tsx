import type { SpaceObject } from "../Types";

type Props = {
    object: SpaceObject | null;
};

function ObjectDetails({ object }: Props) {
    return (
        <aside className="details">
            <h2>Szczegóły obiektu</h2>

            {/* ZADANIE 5 – renderowanie warunkowe */}
            {!object ? (
                <p>👉 Wybierz obiekt z katalogu</p>
            ) : (
                <div>
                    <img
                        src={object.image}
                        alt={object.name}
                        className="details-image"
                    />

                    <h3>{object.name}</h3>
                    <p>Typ: {object.type}</p>
                    <p>Odległość: {object.distance}</p>
                </div>
            )}
        </aside>
    );
}

export default ObjectDetails;