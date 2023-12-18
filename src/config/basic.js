export const cadrList = [
    { src: "/img/item1.png" },
    { src: "/img/item2.png" },
    { src: "/img/item3.png" },

    { src: "/img/item4.png" },
    { src: "/img/item5.png" },
    { src: "/img/item6.png" },

    { src: "/img/paprika.jpg" },
    { src: "/img/carotte.jpg" },
    { src: "/img/swihla.jpg" },

    { src: "/img/tomate.jpg" },
    { src: "/img/obergine.jpg" },
    { src: "/img/mais.jpg" },

    { src: "/img/fraise.jpg" },
    { src: "/img/concumber.jpg" },
    { src: "/img/potatos.jpg" },
];

export const playerList = [
    { id: 1, name: "Player 1" },
    { id: 2, name: "Player 2" },
    { id: 3, name: "Player 3" },
    { id: 4, name: "Player 4" },
];

export const playerOptions = [
    { value: 1, label: "Single player" },
    { value: 2, label: "Two player" },
];

const cardOptions = [
    { rows: 2, cols: 3 }, // 6 => 3
    { rows: 2, cols: 5 }, // 10 => 5
    { rows: 3, cols: 6 }, // 18 => 9
    { rows: 5, cols: 6 }, // 30 => 15
];

export const getCardOptions = () => {
    return cardOptions.map((option) => {
        const value = `${option.rows}X${option.cols}`;
        const label = `${option.rows} X ${option.cols}`;
        return { ...option, label, value };
    });
};
