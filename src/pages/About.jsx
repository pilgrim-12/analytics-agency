function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">О нашем агентстве</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Наша миссия</h2>
          <p className="text-gray-600 mb-4">
            Мы помогаем компаниям принимать решения на основе данных,
            предоставляя глубокий анализ и профессиональные аналитические
            исследования.
          </p>

          <h2 className="text-xl font-semibold mb-4">Наш опыт</h2>
          <p className="text-gray-600 mb-4">
            Более 5 лет опыта в сфере аналитики данных. Мы работали с компаниями
            различного масштаба, от стартапов до крупных корпораций.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Наши преимущества</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Индивидуальный подход к каждому проекту</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Использование современных инструментов анализа</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Гарантия конфиденциальности данных</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Оперативное выполнение проектов</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
