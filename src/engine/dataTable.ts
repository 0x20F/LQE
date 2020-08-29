interface Rows extends Array<Object> {
    rows: Array<Object>;
}

export default class DataTable {
    rows: Rows;

    constructor(data: Rows) {
        this.rows = data;
    }

    /**
     * Set/append data to row
     * @param key string
     * @param data Object
     */
    set = (data: Object): DataTable => {
        this.rows.push(data);
        return this;
    }

    /**
     * Returns all rows
     * @param key string
     */
    getRows = (): any => {
        return this.rows;
    }

    filter = () => {
        // ...
    }

    toJson = (): string => {
        return JSON.stringify(this.getRows());
    }
}
