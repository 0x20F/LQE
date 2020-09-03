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
    public set = (data: Object): DataTable => {
        this.rows.push(data);
        return this;
    }

    /**
     * Returns all rows
     * @param key string
     */
    public getRows = (): any => {
        return this.rows;
    }

    public filter = () => {
        // ...
    }

    public toJson = (): string => {
        return JSON.stringify(this.getRows());
    }
}
