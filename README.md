# SenseiGPT
Chrome extension that provides AI-generated breakdowns of Japanese text for language learners.

## How to use

Select a Japanese sentence in the web page you're currently reading, press `Ctrl+Shift+Y` (Windows) or `Command+Shift+Y` (mac) and get a full breakdown of its meaning from ChatGPT!

![Screenshot of SenseiGPT in action - explaining text in a manga reader application.](img/screenshot1.png)

## Getting started

### OpenAI access
The extension uses the OpenAI api in the background. This requires an API key, which can be obtained as follow
1. Go to [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)
2. Sign up for an account if you don't already haveone
3. Click `Create new secret key`
4. Take note of the key for later

### Manual installation

The extension is still in development and is not available in the chrome store. Instead it needs to be installed manually using the following steps

1. Download the latest release of the extension zip file
2. Unzip the file and take note of the folder it created
3. Go to the extensions page of your browser [chrome://extensions](chrome://extensions)
4. Enable Developer Mode
5. Import the extension by dragging the unzipped folder and dropping it anywhere on the page

### Initial configuration

Add your API key
1. Click on `Details`
2. Scroll down and click on `Extension options`
3. Paste your OpenAI API key and click `Save`

