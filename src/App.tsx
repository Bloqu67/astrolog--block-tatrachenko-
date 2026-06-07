import { useState } from "react";
import type { SpaceObject } from "./Types";

import CatalogList from "./Components/CatalogList";
import ObjectDetails from "./Components/ObjectDetails";
import DiscoveryForm from "./Components/DiscoveryForm";

import "./App.css";


const initialObjects: SpaceObject[] = [  //lista
    {
        id: 1,
        name: "Mars",
        type: "Planeta",
        distance: "225 mln km",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
    },
    {
        id: 2,
        name: "Jowisz",
        type: "Planeta",
        distance: "778 mln km",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg",
    },
    {
        id: 3,
        name: "Syriusz",
        type: "Gwiazda",
        distance: "8,6 lat świetlnych",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Close-up_of_Sirius.jpg/960px-Close-up_of_Sirius.jpg",
    },
    {
        id: 4,
        name: "Andromeda",
        type: "Galaktyka",
        distance: "2,5 mln lat świetlnych",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg",
    },
    {
        id: 5,
        name: "Betelgeza",
        type: "Gwiazda",
        distance: "642 lata świetlne",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Digitized_Sky_Survey_Image_of_Betelgeuse.jpg/500px-Digitized_Sky_Survey_Image_of_Betelgeuse.jpg",
    },
];

function App() {  //glw component
    const [objects, setObjects] = useState<SpaceObject[]>(initialObjects);
    const [selectedObject, setSelectedObject] = useState<SpaceObject | null>(null);

    function addObject(newObject: SpaceObject) {  //funkcja + new object do listy
        setObjects((prev) => [...prev, newObject]);  //aktualizacja
    }

    return (
        <div className="app">
            <h1>🌌 AstroLog</h1>

            <div className="layout">
                <CatalogList
                    objects={objects}
                    onSelect={setSelectedObject}
                />

                <ObjectDetails object={selectedObject} />

                <DiscoveryForm onAddObject={addObject} />
            </div>
        </div>
    );
}

export default App;