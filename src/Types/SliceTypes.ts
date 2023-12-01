export type CounterSliceType = {
  ingridients: IngridientType;
  arrayFromIngs: string[];
  calc: {
    ozCount: number;
    kcalCount: number;
    priceCount: number;
    ifGifted: boolean;
  };
  topBun: {
    count: number;
    oz: number;
    kcal: number;
    price: number;
  };
  isFinished: boolean;
};
export type IngridientType = {
  [key: string]: IngridientParamsType;
};
export type IngridientParamsType = {
  count: number;
  oz: number;
  kcal: number;
  price: number;
};

export type modalStateType = {
  isModalVisible: boolean;
  isModalAdded: boolean;
};
