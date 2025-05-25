// content.js — философ клавишных событий, блюститель порядка Enter
// Теперь с философскими логами и обработкой ошибок!

function handleKeyDown(event) {
    try {
        // Логируем каждое нажатие клавиши
        console.log(`[SmartEnter] Key pressed: ${event.key}, ctrl: ${event.ctrlKey}, target:`, event.target);

        // Если фокус не в текстовом поле — не вмешиваемся
        const target = event.target;
        if (!(target instanceof HTMLTextAreaElement || 
            (target instanceof HTMLInputElement && target.type === 'text'))) {
            console.log('[SmartEnter] Target is not a textarea or text input. Skip.');
            return;
        }

        // Enter без Ctrl — отправка (или что-то своё), без новой строки
        if (event.key === 'Enter' && !event.ctrlKey) {
            event.preventDefault(); // Гасим стандартное поведение (никаких новых строк!)
            console.log('[SmartEnter] Enter без Ctrl: предотвращаем новую строку и отправляем форму (если есть)');
            if (target.form) {
                try {
                    target.form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
                    console.log('[SmartEnter] Событие submit отправлено для формы:', target.form);
                } catch (formErr) {
                    console.error('[SmartEnter] Ошибка при отправке submit:', formErr);
                }
            } else {
                console.log('[SmartEnter] Поле не принадлежит форме. Просто предотвращаем Enter.');
            }
        }
        // Ctrl+Enter — разрешаем новую строку (как у философов в чатах)
        else if (event.key === 'Enter' && event.ctrlKey) {
            console.log('[SmartEnter] Ctrl+Enter: разрешаем новую строку.');
        }
    } catch (err) {
        console.error('[SmartEnter] Ошибка в обработчике клавиш:', err);
    }
}

document.addEventListener('keydown', handleKeyDown, true);

// Теперь ты видишь всё, что происходит с Enter. Даже если браузер не готов к такой откровенности 😏 