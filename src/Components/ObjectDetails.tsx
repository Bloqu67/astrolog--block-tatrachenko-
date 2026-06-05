import type { SpaceObject } from "../Types";

type ObjectDetailsProps = {
    object: SpaceObject | null;
};

function ObjectDetails({
                           object,
                       }: ObjectDetailsProps) {
    return (
        <div>
            <h2>Szczegóły obiektu</h2>

            {object ? (
                <>
                    <img
                        src={object.image}
                        alt={object.name}
                        width={250}
                    />

                    <p>Nazwa: {object.name}</p>
                    <p>Typ: {object.type}</p>
                    <p>Odległość: {object.distance}</p>
                </>
            ) : (
                <p>Wybierz obiekt z katalogu.</p>
            )}
        </div>
    );
}

export default ObjectDetails;