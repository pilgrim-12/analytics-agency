import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function Dashboard() {
  // Пример данных для графиков
  const lineData = [
    { name: "Янв", value: 4000 },
    { name: "Фев", value: 3000 },
    { name: "Мар", value: 2000 },
    { name: "Апр", value: 2780 },
    { name: "Май", value: 1890 },
    { name: "Июн", value: 2390 },
  ];

  const barData = [
    { name: "Проект A", value: 3200 },
    { name: "Проект B", value: 2100 },
    { name: "Проект C", value: 4500 },
    { name: "Проект D", value: 2800 },
  ];

  const pieData = [
    { name: "Анализ", value: 400 },
    { name: "Визуализация", value: 300 },
    { name: "Консалтинг", value: 300 },
    { name: "Обучение", value: 200 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Демо дашборд</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* График линейный */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Динамика показателей</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* График столбчатый */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Сравнение проектов</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* График круговой */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Распределение услуг</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Информационная панель */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Ключевые показатели</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-medium text-blue-700">Проекты</h3>
              <p className="text-3xl font-bold text-blue-800">24</p>
              <p className="text-sm text-blue-600">+12% к прошлому месяцу</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="text-lg font-medium text-green-700">Клиенты</h3>
              <p className="text-3xl font-bold text-green-800">18</p>
              <p className="text-sm text-green-600">+5 новых клиентов</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="text-lg font-medium text-purple-700">Отчеты</h3>
              <p className="text-3xl font-bold text-purple-800">156</p>
              <p className="text-sm text-purple-600">За последний квартал</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h3 className="text-lg font-medium text-yellow-700">
                Эффективность
              </h3>
              <p className="text-3xl font-bold text-yellow-800">94%</p>
              <p className="text-sm text-yellow-600">Средняя оценка клиентов</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
