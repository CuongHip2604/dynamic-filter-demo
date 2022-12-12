import { useMemo } from "react";
import { useDynamicTable, DynamicTable } from "savvycom-dynamic-filter";

interface User {
  id: string;
  name: string;
  email: string;
  dob: string;
}

export default function App() {
  const data = useMemo(
    () => ({
      headerUrl: "users/dynamic/fields",
      dataTableUrl: "users/paging",
      baseURL: "http://10.22.4.168:2443/",
      sortColumns: ["email", "name"],
    }),
    []
  );

  const {
    records,
    handleChange,
    pagination,
    stateQuery,
    properties,
    metrics,
    filters,
    isLoading,
    setStateQuery,
    setFilters,
    columns,
  } = useDynamicTable<User>(data);

  return (
    <DynamicTable
      data={records}
      columns={columns}
      onChange={handleChange}
      pagination={pagination}
      stateQuery={stateQuery}
      properties={properties}
      metrics={metrics}
      filters={filters}
      setFilters={setFilters}
      rowKey={(record: User) => record.id}
      loading={isLoading}
      setStateQuery={setStateQuery}
    />
  );
}
