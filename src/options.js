document.addEventListener('DOMContentLoaded', async () => {
  const optionsForm = document.getElementById('optionsForm');
  const apiKeyInput = document.getElementById('apiKey');

  const apiKey = await getApiKey();
  if (apiKey) {
    apiKeyInput.value = apiKey;
  }

  optionsForm.addEventListener('submit', (event) => {
    event.preventDefault();
    saveApiKey(apiKeyInput.value);
  });
});

async function getApiKey() {
  return new Promise((resolve) => {
    chrome.storage.sync.get('API_KEY', (result) => {
      resolve(result.API_KEY);
    });
  });
}

function saveApiKey(apiKey) {
  chrome.storage.sync.set({ 'API_KEY': apiKey }, () => {
    alert('API Key saved successfully.');
  });
}