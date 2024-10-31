const express = require('express');
const app = express();
const dialogflow = require('@google-cloud/dialogflow');

// Create a new Dialogflow client
const client = new dialogflow.SessionsClient();

// Define the chatbot endpoint
app.post('/chatbot', async (req, res) => {
  const { query } = req.body;
  const sessionPath = client.sessionPath('your-project-id', 'your-session-id');
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: query,
        languageCode: 'en-US',
      },
    },
  };

  try {
    const [response] = await client.detectIntent(request);
    const responseText = response.queryResult.fulfillmentText;
    res.json({ response: responseText });
  } catch (error) {
    console.error('Error handling chatbot request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(3000, () => {
  console.log('Chatbot endpoint listening on port 3000');
});

module.exports= app;