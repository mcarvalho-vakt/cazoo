interface Maker {
    name: string;
    modelName: Model[];
}

interface Model {
    name: string;
}

const maker: Maker[] = [
    {
        name: 'BMW',
        modelName: [{name: 'Series3'}, {name: 'X1'}]
    },
    {
        name: 'Toyota',
        modelName: [{name: 'Yaris'}, {name: 'RAV4'}]
    },
    {
        name: 'Renault',
        modelName: [{name: 'Clio'}, {name: 'Megane'}]
    },
]

export default maker;