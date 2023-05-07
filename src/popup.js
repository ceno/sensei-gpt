(async () => {

  async function getApiKey() {
    return new Promise((resolve) => {
      chrome.storage.sync.get('API_KEY', (result) => {
        resolve(result.API_KEY);
      });
    });
  }

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
  function getTitle() { return window.getSelection().toString(); }

  let injectionResults = await chrome.scripting.executeScript({
    target : {tabId : tab.id, allFrames : false},
    func : getTitle,
  })

  for (const {frameId, result} of injectionResults) {
    console.log(`Frame ${frameId} result:`, result);
    if (result === "") {
      document.getElementById("selected-text").textContent = "Please select some text on the page.";
    } else {
      document.getElementById("selected-text").textContent = result;
    }

    try {
      console.log(result)
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${await getApiKey()}`,
        },
        body: JSON.stringify({
          "model": "gpt-3.5-turbo",
          "messages": [{"content":"You are a Japanese tutor and provide knowledgeable and didactic answers with full grammatical context for the students benefit.","role":"system"},{"content":`Please break down the following Japanese sentence for me, including the meaning of and grammatical function and hiragana pronunciation of each element, and please skip any introduction and just go straight your explanation: ${result}`,"role":"user"}]
          }),
      });
  
      const response2 = await response.json();
      console.log(response2)

      if(response2["error"] !== undefined) {
        console.log(`Got error!`)
        if(response2.error.code === 'invalid_api_key') {
          document.getElementById("explanation").innerHTML = `The API key is invalid, please set a new key in the options page.`;
          //document.getElementById("explanation").innerHTML = `Error! ${response2.error.code}:${response2.error.message}`;
        } else {
          document.getElementById("explanation").innerHTML = `Error! ${response2.error.code}:${response2.error.message}`;
        }
        
      } else {
        console.log(`Got response: ${response2.choices[0].message.content}`)
        document.getElementById("explanation").innerHTML = response2.choices[0].message.content.replace(/\n/g, "<BR>");
      }

      
      //const { text } = choices[0];
  
      console.log(response2);
    } catch (error) {
      console.log("Error: " + error.message)
    }
  }
  
})()