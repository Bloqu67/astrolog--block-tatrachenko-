import type { SpaceObject } from "../Types";

type Props = {
    objects: SpaceObject[];
    setObjects: React.Dispatch<React.SetStateAction<SpaceObject[]>>;
};

function DiscoveryForm({ objects, setObjects }: Props) {
    return (
        <aside className="form">
            <h2>Formularz odkryć</h2>

            {/* Zadanie 6–7 tutaj będzie logika formularza */}
            <p>Formularz w kolejnych zadaniach</p>
        </aside>
    );
}

export default DiscoveryForm;