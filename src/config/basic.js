export const items = [
    // { src: "/img/item1.png" },
    // { src: "/img/item2.png" },
    // { src: "/img/item3.png" },
    // { src: "/img/item4.png" },
    // { src: "/img/item5.png" },
    // { src: "/img/item6.png" },
    { src: "/img/paprika.jpg" },
    { src: "/img/carotte.jpg" },
    { src: "/img/swihla.jpg" },
    { src: "/img/tomate.jpg" },
    { src: "/img/obergine.jpg" },
    { src: "/img/mais.jpg" },
    { src: "/img/fraise.jpg" },
    { src: "/img/concumber.jpg" },
];

export const playerOptions = [
    {"value": 1, label: "Single player"},
    {"value": 2, label: "Two player"},
    {"value": 3, label: "Three player"},
];

const cardOptions = [
    { cols: 2, rows: 2 },
    { cols: 4, rows: 3 },
    { cols: 4, rows: 4 },
];


export const getCardOptions = () => {
    return cardOptions.map((option) => {
        const value = `${option.rows}X${option.cols}`;
        const label = `${option.rows} X ${option.cols}`;
        return { ...option, label, value };
    });
};
