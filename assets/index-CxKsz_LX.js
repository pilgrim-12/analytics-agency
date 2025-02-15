import{a as e,r as s,u as a,L as l,H as t,b as i,d as r}from"./react-vendor-aE5GHkPA.js";import{P as c,j as n,R as d,L as m,C as o,X as x,Y as h,T as p,a as j,b as g,B as u,c as b,d as f,e as N,f as y}from"./analytics-libs-DBI6UkSM.js";var v;!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&s(e)})).observe(document,{childList:!0,subtree:!0})}function s(e){if(e.ep)return;e.ep=!0;const s=function(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?s.credentials="include":"anonymous"===e.crossOrigin?s.credentials="omit":s.credentials="same-origin",s}(e);fetch(e.href,s)}}();var w=e;function k({items:e,logo:t,onLogout:i,userProfile:r}){const[c,d]=s.useState(!1),m=a(),o=e=>m.pathname===e;return n.jsxs("nav",{className:"bg-white shadow",children:[n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:"flex justify-between h-16",children:[n.jsxs("div",{className:"flex",children:[n.jsx("div",{className:"flex-shrink-0 flex items-center",children:"string"==typeof t?n.jsx("img",{className:"h-8 w-auto",src:t,alt:"Logo"}):t}),n.jsx("div",{className:"hidden sm:ml-6 sm:flex sm:space-x-8",children:e.map((e=>n.jsxs(l,{to:e.path,className:"inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium "+(o(e.path)?"border-blue-500 text-gray-900":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"),children:[e.icon&&n.jsx("span",{className:"mr-2",children:e.icon}),e.title]},e.path)))})]}),n.jsx("div",{className:"hidden sm:ml-6 sm:flex sm:items-center",children:r&&n.jsxs("div",{className:"flex items-center space-x-4",children:[n.jsx("span",{className:"text-sm text-gray-700",children:r.name}),r.avatar&&n.jsx("img",{className:"h-8 w-8 rounded-full",src:r.avatar,alt:r.name}),i&&n.jsx("button",{onClick:i,className:"text-sm text-gray-500 hover:text-gray-700",children:"Выйти"})]})}),n.jsx("div",{className:"flex items-center sm:hidden",children:n.jsxs("button",{type:"button",className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100",onClick:()=>d(!c),children:[n.jsx("span",{className:"sr-only",children:"Открыть меню"}),c?n.jsx("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}):n.jsx("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})]})})]})}),c&&n.jsxs("div",{className:"sm:hidden",children:[n.jsx("div",{className:"pt-2 pb-3 space-y-1",children:e.map((e=>n.jsx(l,{to:e.path,className:"block pl-3 pr-4 py-2 border-l-4 text-base font-medium "+(o(e.path)?"bg-blue-50 border-blue-500 text-blue-700":"border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"),onClick:()=>d(!1),children:n.jsxs("div",{className:"flex items-center",children:[e.icon&&n.jsx("span",{className:"mr-2",children:e.icon}),e.title]})},e.path)))}),r&&n.jsxs("div",{className:"pt-4 pb-3 border-t border-gray-200",children:[n.jsxs("div",{className:"flex items-center px-4",children:[r.avatar&&n.jsx("div",{className:"flex-shrink-0",children:n.jsx("img",{className:"h-10 w-10 rounded-full",src:r.avatar,alt:r.name})}),n.jsxs("div",{className:"ml-3",children:[n.jsx("div",{className:"text-base font-medium text-gray-800",children:r.name}),r.email&&n.jsx("div",{className:"text-sm font-medium text-gray-500",children:r.email})]})]}),i&&n.jsx("div",{className:"mt-3 space-y-1",children:n.jsx("button",{onClick:()=>{i(),d(!1)},className:"block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100",children:"Выйти"})})]})]})]})}function F({companyName:e="Analytics Agency",contacts:s={},services:a=[]}){const t={email:"info@analytics-agency.ru",phone:"+7 (999) 123-45-67",address:"г. Москва, ул. Примерная, д. 123",...s},i=a.length>0?a:["Анализ данных","Визуализация данных","Статистические исследования","Консалтинг"];return n.jsx("footer",{className:"bg-gray-800 text-white",children:n.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8",children:[n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[n.jsxs("div",{className:"space-y-4",children:[n.jsx("h3",{className:"text-lg font-semibold",children:e}),n.jsx("p",{className:"text-gray-300 text-sm",children:"Профессиональные решения в области анализа данных для вашего бизнеса"})]}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Навигация"}),n.jsxs("ul",{className:"space-y-2",children:[n.jsx("li",{children:n.jsx(l,{to:"/",className:"text-gray-300 hover:text-white text-sm",children:"Главная"})}),n.jsx("li",{children:n.jsx(l,{to:"/about",className:"text-gray-300 hover:text-white text-sm",children:"О нас"})}),n.jsx("li",{children:n.jsx(l,{to:"/services",className:"text-gray-300 hover:text-white text-sm",children:"Услуги"})}),n.jsx("li",{children:n.jsx(l,{to:"/portfolio",className:"text-gray-300 hover:text-white text-sm",children:"Портфолио"})})]})]}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Услуги"}),n.jsx("ul",{className:"space-y-2",children:i.map(((e,s)=>n.jsx("li",{className:"text-gray-300 text-sm",children:e},s)))})]}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Контакты"}),n.jsxs("ul",{className:"space-y-2",children:[n.jsxs("li",{className:"text-gray-300 text-sm",children:["Email: ",t.email]}),n.jsxs("li",{className:"text-gray-300 text-sm",children:["Телефон: ",t.phone]}),n.jsxs("li",{className:"text-gray-300 text-sm",children:["Адрес: ",t.address]})]})]})]}),n.jsx("div",{className:"mt-8 pt-8 border-t border-gray-700",children:n.jsxs("div",{className:"text-center text-gray-300 text-sm",children:["© ",(new Date).getFullYear()," ",e,". Все права защищены."]})})]})})}function L(){return n.jsxs("div",{className:"container mx-auto px-4",children:[n.jsxs("div",{className:"py-16 text-center",children:[n.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-6",children:"Аналитическое агентство полного цикла"}),n.jsx("p",{className:"text-xl text-gray-600 mb-8",children:"Превращаем данные в ценные бизнес-решения"}),n.jsx(l,{to:"/contact",className:"bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors",children:"Начать проект"})]}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 py-12",children:[n.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[n.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Анализ данных"}),n.jsx("p",{className:"text-gray-600",children:"Глубокий анализ ваших данных с использованием современных методов статистики"})]}),n.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[n.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Визуализация"}),n.jsx("p",{className:"text-gray-600",children:"Создание интерактивных дашбордов и информативных отчетов"})]}),n.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[n.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Консалтинг"}),n.jsx("p",{className:"text-gray-600",children:"Рекомендации по оптимизации бизнес-процессов на основе данных"})]})]})]})}function C(){return n.jsxs("div",{className:"container mx-auto px-4 py-8",children:[n.jsx("h1",{className:"text-3xl font-bold mb-6",children:"О нашем агентстве"}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[n.jsxs("div",{children:[n.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Наша миссия"}),n.jsx("p",{className:"text-gray-600 mb-4",children:"Мы помогаем компаниям принимать решения на основе данных, предоставляя глубокий анализ и профессиональные аналитические исследования."}),n.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Наш опыт"}),n.jsx("p",{className:"text-gray-600 mb-4",children:"Более 5 лет опыта в сфере аналитики данных. Мы работали с компаниями различного масштаба, от стартапов до крупных корпораций."})]}),n.jsxs("div",{children:[n.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Наши преимущества"}),n.jsxs("ul",{className:"space-y-3",children:[n.jsxs("li",{className:"flex items-start",children:[n.jsx("span",{className:"text-blue-500 mr-2",children:"•"}),n.jsx("span",{children:"Индивидуальный подход к каждому проекту"})]}),n.jsxs("li",{className:"flex items-start",children:[n.jsx("span",{className:"text-blue-500 mr-2",children:"•"}),n.jsx("span",{children:"Использование современных инструментов анализа"})]}),n.jsxs("li",{className:"flex items-start",children:[n.jsx("span",{className:"text-blue-500 mr-2",children:"•"}),n.jsx("span",{children:"Гарантия конфиденциальности данных"})]}),n.jsxs("li",{className:"flex items-start",children:[n.jsx("span",{className:"text-blue-500 mr-2",children:"•"}),n.jsx("span",{children:"Оперативное выполнение проектов"})]})]})]})]})]})}function M(){return n.jsxs("div",{className:"container mx-auto px-4 py-8",children:[n.jsx("h1",{className:"text-3xl font-bold mb-8",children:"Наши услуги"}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[{title:"Анализ данных",description:"Комплексный анализ ваших данных с использованием статистических методов и машинного обучения",features:["Предварительная обработка данных","Статистический анализ","Выявление закономерностей","Прогнозирование трендов"]},{title:"Визуализация данных",description:"Создание интерактивных дашбордов и наглядных отчетов для принятия решений",features:["Интерактивные графики","Настраиваемые дашборды","Автоматическая генерация отчетов","Экспорт в различные форматы"]},{title:"Аналитический консалтинг",description:"Профессиональные консультации по вопросам анализа данных и оптимизации процессов",features:["Аудит текущих процессов","Разработка стратегии работы с данными","Оптимизация аналитических процессов","Обучение команды"]}].map(((e,s)=>n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[n.jsx("h2",{className:"text-xl font-semibold mb-4",children:e.title}),n.jsx("p",{className:"text-gray-600 mb-4",children:e.description}),n.jsx("h3",{className:"font-semibold mb-2",children:"Включает в себя:"}),n.jsx("ul",{className:"list-disc pl-5 text-gray-600",children:e.features.map(((e,s)=>n.jsx("li",{className:"mb-1",children:e},s)))})]},s)))})]})}function A(){return n.jsxs("div",{className:"container mx-auto px-4 py-8",children:[n.jsx("h1",{className:"text-3xl font-bold mb-8",children:"Наше портфолио"}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[{title:"Анализ рынка электронной коммерции",client:"E-Commerce Company",description:"Проведен комплексный анализ рынка, выявлены основные тренды и возможности роста",results:["Увеличение конверсии на 25%","Оптимизация маркетингового бюджета","Выявление новых сегментов рынка"],tags:["Market Analysis","E-commerce","Data Visualization"]},{title:"Оптимизация логистических процессов",client:"Logistics Corp",description:"Анализ и оптимизация логистических маршрутов с использованием машинного обучения",results:["Сокращение расходов на 15%","Уменьшение времени доставки на 30%","Повышение удовлетворенности клиентов"],tags:["Machine Learning","Logistics","Process Optimization"]},{title:"Прогнозирование спроса в ритейле",client:"Retail Group",description:"Разработка модели прогнозирования спроса для сети магазинов",results:["Снижение излишков товара на 20%","Увеличение точности прогнозов до 85%","Оптимизация складских запасов"],tags:["Predictive Analytics","Retail","Forecasting"]},{title:"Анализ клиентской базы банка",client:"Major Bank",description:"Сегментация клиентской базы и разработка персонализированных предложений",results:["Увеличение cross-sell на 40%","Снижение оттока клиентов на 15%","Повышение LTV клиентов"],tags:["Banking","Customer Analytics","Segmentation"]}].map(((e,s)=>n.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[n.jsx("h2",{className:"text-xl font-semibold mb-2",children:e.title}),n.jsx("p",{className:"text-gray-500 mb-4",children:e.client}),n.jsx("p",{className:"text-gray-600 mb-4",children:e.description}),n.jsxs("div",{className:"mb-4",children:[n.jsx("h3",{className:"font-semibold mb-2",children:"Результаты:"}),n.jsx("ul",{className:"list-disc pl-5 text-gray-600",children:e.results.map(((e,s)=>n.jsx("li",{className:"mb-1",children:e},s)))})]}),n.jsx("div",{className:"flex flex-wrap gap-2",children:e.tags.map(((e,s)=>n.jsx("span",{className:"px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm",children:e},s)))})]},s)))}),n.jsxs("div",{className:"mt-12 text-center",children:[n.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Хотите обсудить ваш проект?"}),n.jsx("p",{className:"text-gray-600 mb-6",children:"Мы готовы помочь вам с анализом данных и оптимизацией бизнес-процессов"}),n.jsx("button",{className:"bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors",onClick:()=>window.location.href="/contact",children:"Связаться с нами"})]})]})}function B(){const e=[{name:"Анализ",value:400},{name:"Визуализация",value:300},{name:"Консалтинг",value:300},{name:"Обучение",value:200}],s=["#0088FE","#00C49F","#FFBB28","#FF8042"];return n.jsxs("div",{className:"container mx-auto px-4 py-8",children:[n.jsx("h1",{className:"text-3xl font-bold mb-8",children:"Демо дашборд"}),n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[n.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-md",children:[n.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Динамика показателей"}),n.jsx("div",{className:"h-64",children:n.jsx(d,{width:"100%",height:"100%",children:n.jsxs(m,{data:[{name:"Янв",value:4e3},{name:"Фев",value:3e3},{name:"Мар",value:2e3},{name:"Апр",value:2780},{name:"Май",value:1890},{name:"Июн",value:2390}],children:[n.jsx(o,{strokeDasharray:"3 3"}),n.jsx(x,{dataKey:"name"}),n.jsx(h,{}),n.jsx(p,{}),n.jsx(j,{}),n.jsx(g,{type:"monotone",dataKey:"value",stroke:"#8884d8"})]})})})]}),n.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-md",children:[n.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Сравнение проектов"}),n.jsx("div",{className:"h-64",children:n.jsx(d,{width:"100%",height:"100%",children:n.jsxs(u,{data:[{name:"Проект A",value:3200},{name:"Проект B",value:2100},{name:"Проект C",value:4500},{name:"Проект D",value:2800}],children:[n.jsx(o,{strokeDasharray:"3 3"}),n.jsx(x,{dataKey:"name"}),n.jsx(h,{}),n.jsx(p,{}),n.jsx(j,{}),n.jsx(b,{dataKey:"value",fill:"#82ca9d"})]})})})]}),n.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-md",children:[n.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Распределение услуг"}),n.jsx("div",{className:"h-64",children:n.jsx(d,{width:"100%",height:"100%",children:n.jsxs(f,{children:[n.jsx(N,{data:e,cx:"50%",cy:"50%",labelLine:!1,outerRadius:80,fill:"#8884d8",dataKey:"value",label:({name:e,percent:s})=>`${e} ${(100*s).toFixed(0)}%`,children:e.map(((e,a)=>n.jsx(y,{fill:s[a%s.length]},`cell-${a}`)))}),n.jsx(p,{})]})})})]}),n.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-md",children:[n.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Ключевые показатели"}),n.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[n.jsxs("div",{className:"p-4 bg-blue-50 rounded-lg",children:[n.jsx("h3",{className:"text-lg font-medium text-blue-700",children:"Проекты"}),n.jsx("p",{className:"text-3xl font-bold text-blue-800",children:"24"}),n.jsx("p",{className:"text-sm text-blue-600",children:"+12% к прошлому месяцу"})]}),n.jsxs("div",{className:"p-4 bg-green-50 rounded-lg",children:[n.jsx("h3",{className:"text-lg font-medium text-green-700",children:"Клиенты"}),n.jsx("p",{className:"text-3xl font-bold text-green-800",children:"18"}),n.jsx("p",{className:"text-sm text-green-600",children:"+5 новых клиентов"})]}),n.jsxs("div",{className:"p-4 bg-purple-50 rounded-lg",children:[n.jsx("h3",{className:"text-lg font-medium text-purple-700",children:"Отчеты"}),n.jsx("p",{className:"text-3xl font-bold text-purple-800",children:"156"}),n.jsx("p",{className:"text-sm text-purple-600",children:"За последний квартал"})]}),n.jsxs("div",{className:"p-4 bg-yellow-50 rounded-lg",children:[n.jsx("h3",{className:"text-lg font-medium text-yellow-700",children:"Эффективность"}),n.jsx("p",{className:"text-3xl font-bold text-yellow-800",children:"94%"}),n.jsx("p",{className:"text-sm text-yellow-600",children:"Средняя оценка клиентов"})]})]})]})]})]})}function R(){const[e,a]=s.useState({name:"",email:"",company:"",message:""}),l=s=>{a({...e,[s.target.name]:s.target.value})};return n.jsxs("div",{className:"container mx-auto px-4 py-8",children:[n.jsx("h1",{className:"text-3xl font-bold mb-8",children:"Свяжитесь с нами"}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[n.jsxs("div",{children:[n.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Контактная информация"}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("p",{className:"flex items-center",children:[n.jsx("span",{className:"font-semibold mr-2",children:"Адрес:"}),n.jsx("span",{className:"text-gray-600",children:"г. Москва, ул. Примерная, д. 123"})]}),n.jsxs("p",{className:"flex items-center",children:[n.jsx("span",{className:"font-semibold mr-2",children:"Email:"}),n.jsx("span",{className:"text-gray-600",children:"info@analytics-agency.ru"})]}),n.jsxs("p",{className:"flex items-center",children:[n.jsx("span",{className:"font-semibold mr-2",children:"Телефон:"}),n.jsx("span",{className:"text-gray-600",children:"+7 (999) 123-45-67"})]})]})]}),n.jsx("div",{children:n.jsxs("form",{onSubmit:e=>{e.preventDefault()},className:"space-y-4",children:[n.jsxs("div",{children:[n.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Имя"}),n.jsx("input",{type:"text",id:"name",name:"name",value:e.name,onChange:l,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",required:!0})]}),n.jsxs("div",{children:[n.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),n.jsx("input",{type:"email",id:"email",name:"email",value:e.email,onChange:l,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",required:!0})]}),n.jsxs("div",{children:[n.jsx("label",{htmlFor:"company",className:"block text-sm font-medium text-gray-700",children:"Компания"}),n.jsx("input",{type:"text",id:"company",name:"company",value:e.company,onChange:l,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"})]}),n.jsxs("div",{children:[n.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700",children:"Сообщение"}),n.jsx("textarea",{id:"message",name:"message",value:e.message,onChange:l,rows:"4",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",required:!0})]}),n.jsx("button",{type:"submit",className:"bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors",children:"Отправить"})]})})]})]})}v=w.createRoot,w.hydrateRoot,k.propTypes={items:c.arrayOf(c.shape({path:c.string.isRequired,title:c.string.isRequired,icon:c.node})).isRequired,logo:c.oneOfType([c.string,c.node]),onLogout:c.func,userProfile:c.shape({name:c.string.isRequired,email:c.string,avatar:c.string})},k.defaultProps={items:[],userProfile:null},F.propTypes={companyName:c.string,contacts:c.shape({email:c.string,phone:c.string,address:c.string}),services:c.arrayOf(c.string)};const D=[{path:"/",title:"Главная"},{path:"/about",title:"О нас"},{path:"/services",title:"Услуги"},{path:"/portfolio",title:"Портфолио"},{path:"/dashboard",title:"Дашборд"},{path:"/contact",title:"Контакты"}],E={name:"Analytics Agency",contacts:{email:"info@analytics-agency.ru",phone:"+7 (999) 123-45-67",address:"г. Москва, ул. Примерная, д. 123"},services:["Анализ данных","Визуализация данных","Статистические исследования","Консалтинг"]};function I(){return n.jsx(t,{children:n.jsxs("div",{className:"min-h-screen flex flex-col",children:[n.jsx(k,{items:D,logo:"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='31.88'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20257'%3e%3cdefs%3e%3clinearGradient%20id='IconifyId1813088fe1fbc01fb466'%20x1='-.828%25'%20x2='57.636%25'%20y1='7.652%25'%20y2='78.411%25'%3e%3cstop%20offset='0%25'%20stop-color='%2341D1FF'%3e%3c/stop%3e%3cstop%20offset='100%25'%20stop-color='%23BD34FE'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient%20id='IconifyId1813088fe1fbc01fb467'%20x1='43.376%25'%20x2='50.316%25'%20y1='2.242%25'%20y2='89.03%25'%3e%3cstop%20offset='0%25'%20stop-color='%23FFEA83'%3e%3c/stop%3e%3cstop%20offset='8.333%25'%20stop-color='%23FFDD35'%3e%3c/stop%3e%3cstop%20offset='100%25'%20stop-color='%23FFA800'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23IconifyId1813088fe1fbc01fb466)'%20d='M255.153%2037.938L134.897%20252.976c-2.483%204.44-8.862%204.466-11.382.048L.875%2037.958c-2.746-4.814%201.371-10.646%206.827-9.67l120.385%2021.517a6.537%206.537%200%200%200%202.322-.004l117.867-21.483c5.438-.991%209.574%204.796%206.877%209.62Z'%3e%3c/path%3e%3cpath%20fill='url(%23IconifyId1813088fe1fbc01fb467)'%20d='M185.432.063L96.44%2017.501a3.268%203.268%200%200%200-2.634%203.014l-5.474%2092.456a3.268%203.268%200%200%200%203.997%203.378l24.777-5.718c2.318-.535%204.413%201.507%203.936%203.838l-7.361%2036.047c-.495%202.426%201.782%204.5%204.151%203.78l15.304-4.649c2.372-.72%204.652%201.36%204.15%203.788l-11.698%2056.621c-.732%203.542%203.979%205.473%205.943%202.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505%204.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z'%3e%3c/path%3e%3c/svg%3e"}),n.jsx("main",{className:"flex-grow",children:n.jsxs(i,{children:[n.jsx(r,{path:"/",element:n.jsx(L,{})}),n.jsx(r,{path:"/about",element:n.jsx(C,{})}),n.jsx(r,{path:"/services",element:n.jsx(M,{})}),n.jsx(r,{path:"/portfolio",element:n.jsx(A,{})}),n.jsx(r,{path:"/dashboard",element:n.jsx(B,{})}),n.jsx(r,{path:"/contact",element:n.jsx(R,{})})]})}),n.jsx(F,{companyName:E.name,contacts:E.contacts,services:E.services})]})})}v(document.getElementById("root")).render(n.jsx(s.StrictMode,{children:n.jsx(I,{})}));
