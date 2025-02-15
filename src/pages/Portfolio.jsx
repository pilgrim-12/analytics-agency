function Portfolio() {
  const projects = [
    {
      title: "Анализ рынка электронной коммерции",
      client: "E-Commerce Company",
      description:
        "Проведен комплексный анализ рынка, выявлены основные тренды и возможности роста",
      results: [
        "Увеличение конверсии на 25%",
        "Оптимизация маркетингового бюджета",
        "Выявление новых сегментов рынка",
      ],
      tags: ["Market Analysis", "E-commerce", "Data Visualization"],
    },
    {
      title: "Оптимизация логистических процессов",
      client: "Logistics Corp",
      description:
        "Анализ и оптимизация логистических маршрутов с использованием машинного обучения",
      results: [
        "Сокращение расходов на 15%",
        "Уменьшение времени доставки на 30%",
        "Повышение удовлетворенности клиентов",
      ],
      tags: ["Machine Learning", "Logistics", "Process Optimization"],
    },
    {
      title: "Прогнозирование спроса в ритейле",
      client: "Retail Group",
      description:
        "Разработка модели прогнозирования спроса для сети магазинов",
      results: [
        "Снижение излишков товара на 20%",
        "Увеличение точности прогнозов до 85%",
        "Оптимизация складских запасов",
      ],
      tags: ["Predictive Analytics", "Retail", "Forecasting"],
    },
    {
      title: "Анализ клиентской базы банка",
      client: "Major Bank",
      description:
        "Сегментация клиентской базы и разработка персонализированных предложений",
      results: [
        "Увеличение cross-sell на 40%",
        "Снижение оттока клиентов на 15%",
        "Повышение LTV клиентов",
      ],
      tags: ["Banking", "Customer Analytics", "Segmentation"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Наше портфолио</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-500 mb-4">{project.client}</p>

            <p className="text-gray-600 mb-4">{project.description}</p>

            <div className="mb-4">
              <h3 className="font-semibold mb-2">Результаты:</h3>
              <ul className="list-disc pl-5 text-gray-600">
                {project.results.map((result, rIndex) => (
                  <li key={rIndex} className="mb-1">
                    {result}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tIndex) => (
                <span
                  key={tIndex}
                  className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Хотите обсудить ваш проект?
        </h2>
        <p className="text-gray-600 mb-6">
          Мы готовы помочь вам с анализом данных и оптимизацией бизнес-процессов
        </p>
        <button
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          onClick={() => (window.location.href = "/contact")}
        >
          Связаться с нами
        </button>
      </div>
    </div>
  );
}

export default Portfolio;
