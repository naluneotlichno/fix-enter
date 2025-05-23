# Makefile для расширения браузера fix-enter


# Определяем переменные
NODE_VERSION = 22.13.1 # Соответствует версии Node.js, используемой в CI
ZIP_FILE = extension.zip
EXCLUDE_ZIP = '*.git*' 'node_modules/*' 'package-lock.json'

.PHONY: all install lint zip clean

# Целевая задача по умолчанию: запустить линтер и затем создать архив
all: lint zip

# Установка зависимостей Node.js
install:
	npm ci

# Запуск линтера ESLint
lint:
	npm run lint

# Создание zip-архива файлов расширения для распространения
zip: install
	zip $(ZIP_FILE) -r . -x $(EXCLUDE_ZIP)

# Очистка сгенерированных файлов
clean:
	rm -f $(ZIP_FILE)

# Опционально: настройка окружения Node.js (полезно, если вы используете разные версии Node)
# setup-node:
# 	# Здесь можно использовать nvm или аналогичный инструмент для обеспечения правильной версии Node
# 	echo "Убедитесь, что версия Node.js $(NODE_VERSION) активна." 