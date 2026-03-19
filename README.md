# Nova - Astronomy & Space Exploration

Nova is a beautiful, interactive chat application built with React and Vite. It serves as an AI assistant focused entirely on astronomy and space exploration, uniquely powered by a local knowledge base and a matching engine instead of relying on external APIs.

## Features

- **Local Knowledge Base**: Works completely offline. Powered by local astronomy data without needing external API access.
- **Space-Themed UI**: An immersive and dynamic user interface featuring animated starfields and colorful nebula gradients.
- **Session Tracking**: Chat sessions are stored locally and easily accessible via a persistent sidebar.
- **Modern Architecture**: Fast and responsive, built using standard React patterns.

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite v8
- **Styling**: Tailwind CSS + Vite Plugin
- **Routing**: React Router DOM (v7)

## Getting Started

To get the app up and running on your local machine:

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   *This will start the app on a local port (usually `http://localhost:5173`).*

3. **Build for Production**
   ```bash
   npm run build
   ```

## Overview of Project Structure

- `src/components/`: Reusable interface elements like the `Starfield` background, `Sidebar`, `NameModal`, and Chat `Message` components.
- `src/pages/`: Contains the main view routing (such as the `ChatPage`).
- `src/context/`: React Context providers for managing global state (`UserContext` for user name mapping and `SessionsContext` for saving chats).
- `src/data/`: Contains `knowledgeBase.js`, a large offline dictionary of space data.
- `src/engine/`: Contains `matcher.js` the logic that parses user queries and retrieves matching responses from the knowledge base.
