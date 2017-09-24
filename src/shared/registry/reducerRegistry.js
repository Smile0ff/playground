class ReducerRegistry{
    constructor(){
        this.reducers = new Map();
    }
    register(moduleName, reducer){
        if(!moduleName)
            throw new Error('moduleName '+ moduleName +' must be set');

        if(typeof moduleName !== 'string')
            throw new Error('moduleName '+ moduleName +' must be a string');

        if(!reducer)
            throw new Error('Reducer '+ moduleName +' must be set');

        if(!(reducer instanceof Function))
            throw new Error('Reducer '+ moduleName +' must be a function');

        if(this.reducers.has(moduleName))
            throw new Error('Reducer '+ moduleName +' is already exist');

        this.reducers.set(moduleName, reducer);
    }
    getReducers(){
        return this.reducers;
    }
    toArray(){
        return [...this.reducers.entries()];
    }
    toObject(){
        const reducers = [...this.reducers.entries()];
        const reducersObject = {};

        reducers.map(([key, value]) => reducersObject[key] = value);

        return reducersObject;
    }
}

export default new ReducerRegistry();