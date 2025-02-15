function Services() {
  const services = [
    {
      title: "Анализ данных",
      description:
        "Комплексный анализ ваших данных с использованием статистических методов и машинного обучения",
      features: [
        "Предварительная обработка данных",
        "Статистический анализ",
        "Выявление закономерностей",
        "Прогнозирование трендов",
      ],
    },
    {
      title: "Визуализация данных",
      description:
        "Создание интерактивных дашбордов и наглядных отчетов для принятия решений",
      features: [
        "Интерактивные графики",
        "Настраиваемые дашборды",
        "Автоматическая генерация отчетов",
        "Экспорт в различные форматы",
      ],
    },
    {
      title: "Аналитический консалтинг",
      description:
        "Профессиональные консультации по вопросам анализа данных и оптимизации процессов",
      features: [
        "Аудит текущих процессов",
        "Разработка стратегии работы с данными",
        "Оптимизация аналитических процессов",
        "Обучение команды",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Наши услуги</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">{service.title}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>

            <h3 className="font-semibold mb-2">Включает в себя:</h3>
            <ul className="list-disc pl-5 text-gray-600">
              {service.features.map((feature, fIndex) => (
                <li key={fIndex} className="mb-1">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
