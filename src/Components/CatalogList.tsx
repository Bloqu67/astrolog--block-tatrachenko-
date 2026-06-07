import type { SpaceObject } from "../Types";

type Props = {
    objects: SpaceObject[];
    onSelect: (obj: SpaceObject) => void;
};

export default function CatalogList({ objects, onSelect }: Props) {
    return (
        <div className="catalog">
            <h2>🌌 Katalog obiektów</h2>

            {objects.map((obj) =>  (
                <div
                    key={obj.id}
                    className="catalog-item"
                    onClick={() => onSelect(obj)}
                >
                    <img src={obj.image} alt={obj.name} />

                    <div>
                        <strong>{obj.name}</strong>
                        <p>{obj.type}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}