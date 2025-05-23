// Конфиг ESLint для чистоты кода и спокойствия души
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
    },
    rules: {
      semi: ["error", "always"], // Всегда ставим точку с запятой
      quotes: ["error", "double"], // Двойные кавычки — как у классиков
      "no-unused-vars": "warn", // Неиспользуемые переменные — повод задуматься
      "no-console": "off", // console.log не запрещаем, мы не такие строгие
    },
  },
]; 