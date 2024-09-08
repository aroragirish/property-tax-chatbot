# WhatsApp Property Tax Chatbot

This project is a Node.js application that creates a WhatsApp chatbot for handling property tax inquiries. It uses Express to set up a webhook that receives WhatsApp messages, processes them, and responds with relevant property tax information.

## Features

- Responds to greetings (hi, hello, hey)
- Provides property tax information based on property number
- Offers a payment link for pending taxes
- Handles invalid inputs gracefully

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js installed on your local machine
- A WhatsApp Business API account or a service like Twilio for WhatsApp integration
- Access to property tax data (currently using mock data)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/whatsapp-property-tax-chatbot.git
   cd whatsapp-property-tax-chatbot
   ```

2. Install the required dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your configuration:
   ```
   PORT=3000
   WHATSAPP_API_KEY=your_whatsapp_api_key_here
   ```

## Usage

1. Start the server:
   ```
   node index.js
   ```

2. The server will start running on the specified port (default is 3000).

3. Configure your WhatsApp Business API or Twilio to use the `/whatsapp` endpoint of your server as the webhook for incoming messages.

## How It Works

1. The server receives POST requests on the `/whatsapp` endpoint when a user sends a message.
2. The message is processed based on its content:
   - If it's a greeting, the bot responds with a welcome message and instructions.
   - If it's a property number, the bot looks up the property information and responds with details.
   - If it's an invalid input, the bot sends an appropriate error message.
3. Responses are sent back to the user via WhatsApp using the `sendMessage` function from the `WA` helper module.

## Project Structure

- `index.js`: Main server file containing the Express application and route handlers
- `helper-function/whatsapp-send-message.js`: Module for sending WhatsApp messages (implementation not shown in the provided code)
- `mock/propertyData.json`: Mock data file containing property information

## Configuration

You can modify the following in the `.env` file:
- `PORT`: The port on which the server will run
- `WHATSAPP_API_KEY`: Your WhatsApp API key (if required by your WhatsApp integration method)

## Contributing

Contributions to this project are welcome. Please fork the repository and submit a pull request with your changes.

## License

[MIT License](LICENSE)

## Acknowledgements

This project uses Express for the web server and integrates with WhatsApp for messaging capabilities.

## Contact

If you have any questions or feedback, please open an issue in this repository.