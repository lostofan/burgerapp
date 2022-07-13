import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActionDataType, ActionTopBunType } from "../Types/ActionTypes";
import { CounterSliceType } from "../Types/SliceTypes";


const initialState: CounterSliceType = {
    ingridients: {
        cutlet: {
            count: 0,
            oz: 10,
            kcal: 150,
            price: 2.6,
        },
        mayo:  {
            count: 0,
            oz: 0.5,
            kcal: 50,
            price: 0.39,
        },
        onion:  {
            count: 0,
            oz: 2.5,
            kcal: 30,
            price: 0.63,
        },
        tomato:  {
            count: 0,
            oz: 3,
            kcal: 35,
            price: 0.82,
        },
        cucumber:  {
            count: 0,
            oz: 3.2,
            kcal: 39,
            price: 0.69,
        },
        cheese:  {
            count: 0,
            oz: 1,
            kcal: 50,
            price: 1.3,
        },
        salad:  {
            count: 0,
            oz: 0.5,
            kcal: 15,
            price: 0.6,
        },
        bun:  {
            count: 0,
            oz: 6.3,
            kcal: 115,
            price: 1.25,
        },
    },
    calc: {
        ozCount: 0,
        kcalCount: 0,
        priceCount: 0,
        ifGifted: false
    },
    arrayFromIngs: [],
    topBun: {
            count: 0,
            oz: 6.3,
            kcal: 115,
            price: 1.25,
        },
    isFinished: false
}

export const ingridientCounterSlice = createSlice({
    name: "ingCounter",
    initialState,
    reducers: {
        addIngCounter: (state, action:PayloadAction<ActionDataType>) => {
            state.ingridients[action.payload.name].count = 
            action.payload.counter + 1;

            state.arrayFromIngs.push(action.payload.name);

            state.calc.ozCount += action.payload.oz;
            state.calc.kcalCount += action.payload.kcal;
            state.calc.priceCount += action.payload.price;
        },
        subIngCounter: (state, action:PayloadAction<ActionDataType>) => {
            state.ingridients[action.payload.name].count = 
            action.payload.counter - 1;

            state.calc.ozCount -= action.payload.oz;
            state.calc.kcalCount -= action.payload.kcal;
            state.calc.priceCount -= action.payload.price;
            
            const elemIdx = state.arrayFromIngs.lastIndexOf(action.payload.name);
            
            if (elemIdx !== -1) {
               state.arrayFromIngs.splice(
                elemIdx, 1
                ); 
            }
            
        },
        addTopBun: (state, action:PayloadAction<ActionTopBunType>) => {
            
            state.arrayFromIngs.push("topbun");
            state.calc.ozCount += action.payload.oz;
            state.calc.kcalCount += action.payload.kcal;
            state.isFinished = true;
            
        },
        resetBurger: (state) => {
            for (let key in state.ingridients) {
                state.ingridients[key].count = 0;
            }
            state.arrayFromIngs = [];
            state.calc.kcalCount = 0;
            state.calc.ozCount = 0;
            state.calc.priceCount = 0;
            state.calc.ifGifted = false;
            state.isFinished = false;
            
        }
    }
});

export const {addIngCounter, subIngCounter, addTopBun, resetBurger} = ingridientCounterSlice.actions;
export default ingridientCounterSlice.reducer;  