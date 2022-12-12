# Installation

```sh

// with npm

npm i savvycom-dynamic-filter

// with yarn

yarn add savvycom-dynamic-filter
```
## Usage

Here is a quick example to get you started, **it's all you need**:

Yes, it's really all you need to get started as you can see in the interactive demo:

[Demo](https://codesandbox.io/static/img/play-codesandbox.svg)

## Components

| Name  | Description | 
| --------------------- | --------------------------- |
| DynamicTable | Table data
| useDynamicTable | This is a hook for dynamic table

## API

### Dynamic Table

| Name  | Type | Require | Default | Description |
| --------------------- | --------------------------- | --------- | ---------- | ----------------- | 
| columns  | refer to [column config](https://ant.design/components/table#column)  | Yes | - |column names of table
| data  | Array< object >  | Yes | - | The data of table that will be show
| pagination | object or false | Yes | - | Config of pagination. You can ref table pagination [config](https://ant.design/components/table#pagination), hide it by setting it to false
| stateQuery | StateQueryInterface | Yes | - | state of filters
| setStateQuery  | Function  | Yes | - | This is a function that used set stateQuery
| filters | FilterPayloadInterface[] | if `showFilter = true`, it's required, else not required | - | This is a array that contains user-selected filters
| setFilters | Function | if `showFilter = true`, it's required, else not required | - | This is a function that used set filters
| showFilter | boolean | if `showFilter = true`, it's required, else not required | true | Enable filter
| properties | PropertyInterface[] | if `showFilter = true`, it's required, else not required | - |  This is column names
| metrics | MetricInterface[] | if `showFilter = true`, it's required, else not required | This is conditios of the filter.
| loading | boolean | No | - | Loading status of table
| size | `small` or `middle` or `large` | No | middle | Size of table
| rowSelection | object | No | - | Row selection [config](https://ant.design/components/table#rowSelection)
| id | string | No | - | The id of table element
| className | string | No | - | The class name of table element
| components | [TableComponents](https://github.com/react-component/table/blob/75ee0064e54a4b3215694505870c9d6c817e9e4a/src/interface.ts#L129) | No | - | Override default table elements
| expandable | [exapndable](https://ant.design/components/table#expandable) | No | - | Config expandable content
| rowClassName | function(record, index): string | No | - |  Row's className
| rowKey | string or function(record): string | No | - | Row's unique key, could be a string or function that returns a string
| onRow | function(record, index) | No | - | Set props on per row
| onChange | function(pagination, filters, sorter, extra: { currentDataSource: [], action: paginate or sort or filter }) | No |	- |  Callback executed when pagination, filters or sorter is changed

### useDynamicTable Hook

| Name  | Type | Require | Description |
| --------------------- | --------------------------- | ---------- | ----------------- |
| headerUrl | string | Yes | this is url path that used to get header data
| dataTableUrl | string | Yes | this is url path that used to get table data
| baseURL | string | Yes | this is base url that used to merge with `headerUrl` and `dataTableUrl`
| sortColumns | string[] | No | It will define columns which you want to sort
| customColumns | refer to [column config](https://ant.design/components/table#column) | No | It will custom columns which defined in `DynamicTable` component

This hook will export under data:

| Name  | Type | Description |
| --------------------- | --------------------------- | ----------------- |
| records | Array | This is a table data that get from `dataTableUrl`
| columns | Array | This is a header data that get from `headerUrl`
| pagination | object or false | Config of pagination. You can ref table pagination [config](https://ant.design/components/table#pagination), hide it by setting it to false
| properties | PropertyInterface[] | This is column names
| metrics | MetricInterface[] | This is conditios of the filter
| filters | FilterPayloadInterface[] | This is a array that contains user-selected filters
| setFilters | function | This is a function that used set filters
| stateQuery | StateQueryInterface | state of filters
| setStateQuery | function | This is a function that used set stateQuery
| isLoading | boolean | Loading status of table
| queries | object | This is value of `stateQuery` when converted to string
| handleChange | function | Callback executed when pagination, filters or sorter is changed

### Note

Please define response of api `headerUrl` is `HeaderResponse` and `dataTableUrl` is `TableDataResponse`
## Interface

```sh

// FilterInterface

FilterInterface {
  field: string;
  value: string;
  operator: string;
  logic: 'AND' | 'OR'
}

// FilterPayloadInterface

FilterPayloadInterface extends FilterInterface {
  labelField: string;
  labelOperator: string;
}

// SortInterface

SortInterface {
  field: string;
  orderBy: 'asc' | 'desc'
}

// StateQueryInterface

StateQueryInterface {
  pagination?: {
    limit: number;
    page: number;
  },
  filters?: FilterInterface[],
  sorts?: SortInterface[]
}

// PropertyInterface

PropertyInterface {
  label: string;
  value: string;
}

// MetricInterface

MetricInterface {
  label: string;
  value: string;
}

// HeaderResponse

HeaderResponse {
  meta: {
    code: number;
    status: string;
    message: string;
  };
  data: {
    columns: {
      dataIndex: string;
      type: string;
      name: string;
    }[];
    operators: {
      key: string;
      value: string;
    }[];
    logics: string[]
  }
}

// TableDataResponse

TableDataResponse {
  meta: {
    code: number;
    status: string;
    message: string;
    pagination: {
      page: number;
      limit: number;
      totalPage: number;
      hasPreviousPage: boolean;
      hasNextPage: boolean;
    }
  };
  data: []
}
```

## License

This project is licensed under the terms of the

[MIT license](/LICENSE).
