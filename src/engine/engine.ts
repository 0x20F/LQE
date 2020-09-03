import DataTable from './dataTable';

export interface DataTableObject {
    table: string,
    row: Object,
};

export default class Engine {
    /**
     * Will push a row to table
     * @param data DataTableObject
     */
    public push = (data: DataTableObject): void => {
        let dataTable = this.pull(data.table);
        dataTable.set(data.row);
        localStorage.setItem(data.table, dataTable.toJson());
    }

    /**
     * Pulls a table and all its rows
     * @param key string
     */
    public pull = (table: string): DataTable => {
        let data = localStorage.getItem(table) || '';
        return this.toDataTable(data);
    }

    private toDataTable = (data: string): DataTable => {
        return new DataTable(JSON.parse(data));
    }
}
