class SagaRegistry{

    constructor(){
        this.sagas = new Map();
    }
    register(saga){
        this.sagas.set(saga);
    }
    getSagas(){
        return this.sagas;
    }
    toArray(){
        const sagas = [...this.sagas.entries()];
        const sagasArray = [];

        sagas.map(([key,]) => sagasArray.push(key()));

        return sagasArray;
    }

}

export default new SagaRegistry();