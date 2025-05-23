// Обработчик клавиатурных событий для умного Enter
document.addEventListener("keydown", (event) => {
  console.log("🔍 Key pressed:", event.key, "Ctrl:", event.ctrlKey);
  
  // Если нажат Enter без Ctrl
  if (event.key === "Enter" && !event.ctrlKey) {
    console.log("🚀 Processing regular Enter");
    event.preventDefault(); // Предотвращаем стандартное поведение
    event.stopPropagation(); // Останавливаем всплытие события
    
    // Создаем и диспатчим новый Enter
    const enterEvent = new KeyboardEvent("keydown", {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      which: 13,
      bubbles: true
    });
    console.log("📤 Dispatching new Enter event");
    event.target.dispatchEvent(enterEvent);
  }
  
  // Если нажат Ctrl+Enter
  if (event.key === "Enter" && event.ctrlKey) {
    console.log("📝 Processing Ctrl+Enter for new line");
    event.preventDefault();
    // Вставляем перенос строки
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    range.insertNode(document.createTextNode("\n"));
    console.log("✅ New line inserted");
  }
}, true);

console.log("🎯 Smart Enter Handler initialized!"); 