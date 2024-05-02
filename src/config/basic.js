export const cadrList = [
    { src: "/img/paprika.jpg" },
    { src: "/img/carotte.jpg" },
    { src: "/img/swihla.jpg" },

    { src: "/img/tomate.jpg" },
    { src: "/img/obergine.jpg" },
    { src: "/img/mais.jpg" },

    { src: "/img/fraise.jpg" },
    { src: "/img/concumber.jpg" },
    { src: "/img/potatos.jpg" },

    { src: "/img/onion.jpg" },
    { src: "/img/green-paprika.jpg" },
    { src: "/img/brokoli.jpg" },

    { src: "/img/coriander.jpg" },
    { src: "/img/cabbage.jpg" },
    { src: "/img/garlic.jpg" },

    { src: "/img/green-bean.jpg" },
    { src: "/img/mint.jpg" },
    { src: "/img/celery.jpg" },
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
