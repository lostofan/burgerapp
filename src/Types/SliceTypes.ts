export type CounterSliceType = {
    ingridients: {
        [key: string]: {
            count: number;
            oz: number;
            kcal: number;
            price: number;
        }
    },
    arrayFromIngs: string[],
    calc: {
        ozCount: number;
        kcalCount: number;
        priceCount: number;
        ifGifted: boolean;
    },
    topBun: {
        count: number;
        oz: number;
        kcal: number;
        price: number;
    },
    isFinished: boolean;
}

export type modalStateType = {
    isModalVisible: boolean;
    isModalAdded: boolean;
}