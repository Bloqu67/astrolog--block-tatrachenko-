import type { SpaceObject } from "../Types";

type CatalogListProps = {
    objects: SpaceObject[];
    onSelect: (object: SpaceObject) => void;
};

function CatalogList({
                         objects,
                         onSelect,
                     }: CatalogListProps) {
    return (
        <aside className="catalog">
            <h2>Katalog obiektów</h2>

            {objects.map((object) => (
                <div
                    key={object.id}
                    className="catalog-item"
                    onClick={() => onSelect(object)}
                >
                    <img
                        src={object.image}
                        alt={object.name}
                        className="catalog-image"
                    />

                    <p>{object.name}</p>
                </div>
            ))}
        </aside>
    );
}

export default CatalogList;