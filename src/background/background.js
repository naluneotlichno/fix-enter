// Инициализация расширения
chrome.action.onClicked.addListener(() => {
  console.log("Smart Enter Handler activated! 🚀");
});

chrome.tabs.onActivated.addListener(function() {
  chrome.action.setBadgeText({ text: "ON" });
});