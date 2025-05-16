chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
  if (!tab?.url) return;

  const pocketUrl = `https://getpocket.com/edit?url=${encodeURIComponent(tab.url)}`;

  chrome.tabs.create({ url: pocketUrl, active: false }, (newTab) => {
    setTimeout(() => {
      chrome.tabs.remove(newTab.id);
    }, 2000);
  });
});
