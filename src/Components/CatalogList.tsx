import type { SpaceObject } from "../Types";

type Props = {
    objects: SpaceObject[];
    onSelect: (obj: SpaceObject) => void;  //funkcja wywolana po kliknieciu
};

export default function CatalogList({ objects, onSelect }: Props) {
    return (
        <div className="catalog">
            <h2>🌌 Katalog obiektów</h2>

            {objects.map((obj) =>  (  // przetwarza dane z tablicy tworzy z niego jak by html
                <div
                    key={obj.id}  // key do aktualizacji listy (tyko dodanie nowego elementu) unikalny klucz dla react
                    className="catalog-item"
                    onClick={() => onSelect(obj)}  //przekazanie do rodzica
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