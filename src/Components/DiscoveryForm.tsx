import type { SpaceObject } from "../Types";

type DiscoveryFormProps = {
    objects: SpaceObject[];
    setObjects: React.Dispatch<React.SetStateAction<SpaceObject[]>>;
};

function DiscoveryForm({
                           objects,
                           setObjects,
                       }: DiscoveryFormProps) {
    console.log(objects, setObjects);

    return (
        <div>
            <h2>Formularz dodawania obiektu</h2>
        </div>
    );
}

export default DiscoveryForm;