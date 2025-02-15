import { useState, useMemo } from "react";
import PropTypes from "prop-types";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export function DataTable({
  data,
  columns,
  pagination,
  sortable,
  selectable,
  onRowClick,
  onSelectionChange,
  onSort,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [selectedRows, setSelectedRows] = useState([]);

  // Логика сортировки
  const handleSort = (key) => {
    if (!sortable) return;

    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
    onSort?.({ key, direction });
  };

  // Сортированные данные
  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data;

    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortConfig]);

  // Пагинация
  const pageSize = pagination?.pageSize || 10;
  const totalPages = Math.ceil(sortedData.length / pageSize);
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, currentPage, pageSize]);

  // Обработка выбора строк
  const handleRowSelection = (rowId) => {
    const newSelection = selectedRows.includes(rowId)
      ? selectedRows.filter((id) => id !== rowId)
      : [...selectedRows, rowId];

    setSelectedRows(newSelection);
    onSelectionChange?.(newSelection);
  };

  // Обработка выбора всех строк
  const handleSelectAll = () => {
    const allIds = paginatedData.map((row) => row.id);
    const newSelection = selectedRows.length === allIds.length ? [] : allIds;
    setSelectedRows(newSelection);
    onSelectionChange?.(newSelection);
  };

  return (
    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            {selectable && (
              <th scope="col" className="relative px-6 py-3">
                <input
                  type="checkbox"
                  className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300"
                  checked={selectedRows.length === paginatedData.length}
                  onChange={handleSelectAll}
                />
              </th>
            )}
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className={`px-6 py-3 text-left text-sm font-semibold text-gray-900 ${
                  sortable && column.sortable
                    ? "cursor-pointer select-none"
                    : ""
                }`}
                onClick={() => column.sortable && handleSort(column.key)}
              >
                <div className="flex items-center gap-2">
                  {column.title}
                  {sortable && column.sortable && (
                    <div className="flex flex-col">
                      <ChevronUpIcon
                        className={`w-3 h-3 ${
                          sortConfig.key === column.key &&
                          sortConfig.direction === "asc"
                            ? "text-blue-600"
                            : "text-gray-400"
                        }`}
                      />
                      <ChevronDownIcon
                        className={`w-3 h-3 ${
                          sortConfig.key === column.key &&
                          sortConfig.direction === "desc"
                            ? "text-blue-600"
                            : "text-gray-400"
                        }`}
                      />
                    </div>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {paginatedData.map((row, rowIndex) => (
            <tr
              key={row.id || rowIndex}
              className={`${
                onRowClick ? "cursor-pointer hover:bg-gray-50" : ""
              }`}
              onClick={() => onRowClick?.(row)}
            >
              {selectable && (
                <td className="relative px-6 py-4">
                  <input
                    type="checkbox"
                    className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300"
                    checked={selectedRows.includes(row.id)}
                    onChange={() => handleRowSelection(row.id)}
                    onClick={(e) => e.stopPropagation()}
                  />
                </td>
              )}
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="whitespace-nowrap px-6 py-4 text-sm text-gray-500"
                >
                  {column.render
                    ? column.render(row[column.key], row)
                    : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {pagination && (
        <div className="flex items-center justify-between bg-white px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <button
              onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
              disabled={currentPage === 1}
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Предыдущая
            </button>
            <button
              onClick={() =>
                setCurrentPage((page) => Math.min(page + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Следующая
            </button>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Показано{" "}
                <span className="font-medium">
                  {(currentPage - 1) * pageSize + 1}
                </span>{" "}
                по{" "}
                <span className="font-medium">
                  {Math.min(currentPage * pageSize, sortedData.length)}
                </span>{" "}
                из <span className="font-medium">{sortedData.length}</span>{" "}
                результатов
              </p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <button
                  onClick={() =>
                    setCurrentPage((page) => Math.max(page - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Предыдущая</span>
                  <ChevronUpIcon
                    className="h-5 w-5 rotate-90"
                    aria-hidden="true"
                  />
                </button>
                {/* Номера страниц */}
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                      currentPage === index + 1
                        ? "z-10 bg-blue-600 text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() =>
                    setCurrentPage((page) => Math.min(page + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Следующая</span>
                  <ChevronDownIcon
                    className="h-5 w-5 -rotate-90"
                    aria-hidden="true"
                  />
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

DataTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      sortable: PropTypes.bool,
      render: PropTypes.func,
    })
  ).isRequired,
  pagination: PropTypes.shape({
    pageSize: PropTypes.number,
  }),
  sortable: PropTypes.bool,
  selectable: PropTypes.bool,
  onRowClick: PropTypes.func,
  onSelectionChange: PropTypes.func,
  onSort: PropTypes.func,
};

DataTable.defaultProps = {
  sortable: true,
  selectable: false,
  pagination: {
    pageSize: 10,
  },
};
