import { cadrList } from "../../../config/basic";
import array from "../../../utils/tools/array";

export default {
    getCards: (conf) => {
        const usedCards = array.shuffle(cadrList).slice(0, (conf.cols * conf.rows) / 2);
        return array.shuffle([...usedCards, ...usedCards])
            .map((card) => {
                return { ...card, id: Math.random(), matched: false };
            });
    },
};
