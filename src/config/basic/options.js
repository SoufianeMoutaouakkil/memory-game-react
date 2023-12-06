export const items = [
    { src: "/img/item1.png" },
    { src: "/img/item2.png" },
    { src: "/img/item3.png" },
    { src: "/img/item4.png" },
    { src: "/img/item5.png" },
    { src: "/img/item6.png" },
    { src: "/img/paprika.jpg" },
    { src: "/img/carotte.jpg" },
];

const options = [
    { cols: 2, rows: 2 },
    { cols: 4, rows: 3 },
    { cols: 4, rows: 4 },
];

export const getOptions = () => {
    return options.map((option) => {
        const value = `${option.rows}X${option.cols}`;
        const label = `${option.rows} X ${option.cols}`;
        return { ...option, label, value };
    });
};
