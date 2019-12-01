import { observable, action } from 'mobx'
import * as deployed from '../deployed'

export const formNames = {
    INPUT_FORM: 'inputs'
}

export const labels = {
    inputs: {
        INPUT_TOKEN: 'Input Token',
        OUTPUT_TOKEN: 'Output Token',
        INPUT_AMOUNT: 'Input Amount',
        OUTPUT_AMOUNT: 'Output Amount'
    },
    outputs: {
        INPUT_AMOUNT: 'Input Amount',
        OUTPUT_AMOUNT: 'Output Amount',
        EFFECTIVE_PRICE: 'Effective Price',
        MARGINAL_PRICE: 'Marginal Price'
    }
}

export default class SwapFormStore {
    @observable inputs = {
        inputToken: '',
        outputToken: '',
        inputAmount: '',
        outputAmount: ''
    }
    @observable outputs = {
        inputAmount: '',
        outputAmount: '',
        effectivePrice: '',
        swaps: [],
        validSwap: false
    }

    @action updateOutputsFromObject(output) {
        this.outputs = {
            ...this.outputs,
            ...output
        }
    }

    getTokenList = () => {
        return deployed.tokens
    }

    resetInputs() {
        this.inputs = {
            ...this.inputs,
            inputAmount: '',
            outputAmount: ''
        }
    }

    resetOutputs() {
        this.outputs = {
            inputAmount: '',
            outputAmount: '',
            effectivePrice: '',
            swaps: []
        }
    }

    constructor(rootStore) {
        this.rootStore = rootStore;
    }
}