import { useState } from "react";
import type { SpaceObject } from "./Types";

import CatalogList from "./Components/CatalogList";
import ObjectDetails from "./Components/ObjectDetails";
import DiscoveryForm from "./Components/DiscoveryForm";

import "./App.css";

const initialObjects: SpaceObject[] = [
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
        image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Sirius_A_and_B_Hubble_photo.jpg",
    },
    {
        id: 4,
        name: "Andromeda",
        type: "Galaktyka",
        distance: "2,5 mln lat świetlnych",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Andromeda_Galaxy_%28with_h-alpha%29.jpg",
    },
    {
        id: 5,
        name: "Betelgeza",
        type: "Gwiazda",
        distance: "642 lata świetlne",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/77/Artist%27s_impression_of_the_red_supergiant_star_Betelgeuse.jpg",
    },
];

function App() {
    const [objects, setObjects] = useState<SpaceObject[]>(initialObjects);
    const [selectedObject, setSelectedObject] = useState<SpaceObject | null>(null);

    return (
        <div className="app">
            <h1>🌌 AstroLog</h1>

            <div className="layout">
                <CatalogList
                    objects={objects}
                    onSelect={setSelectedObject}
                />

                <ObjectDetails object={selectedObject} />

                <DiscoveryForm
                    objects={objects}
                    setObjects={setObjects}
                />
            </div>
        </div>
    );
}

export default App;