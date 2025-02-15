import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <div className="py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Аналитическое агентство полного цикла
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Превращаем данные в ценные бизнес-решения
        </p>
        <Link
          to="/contact"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Начать проект
        </Link>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Анализ данных</h3>
          <p className="text-gray-600">
            Глубокий анализ ваших данных с использованием современных методов
            статистики
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Визуализация</h3>
          <p className="text-gray-600">
            Создание интерактивных дашбордов и информативных отчетов
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Консалтинг</h3>
          <p className="text-gray-600">
            Рекомендации по оптимизации бизнес-процессов на основе данных
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
