GIF Expert App 🎨
=================

A React-based web application that allows users to search and display GIFs using the GIPHY API. Users can add search categories and view a grid of related GIFs for each category.

🚀 Features
-----------

-   Search and display GIFs from GIPHY
-   Add multiple search categories
-   Responsive grid layout
-   Loading states for better user experience
-   No duplicate categories allowed
-   Real-time GIF fetching

🛠️ Technologies
----------------

-   React 18
-   Vite
-   GIPHY API
-   Custom Hooks
-   CSS for styling

📋 Prerequisites
----------------

Before you begin, ensure you have the following installed:

-   Node.js (latest LTS version recommended)
-   npm (comes with Node.js)

🔧 Installation
---------------

1.  Clone the repository:

bash

Copy

`git clone <repository-url>
cd gif-expert-app`

1.  Install dependencies:

bash

Copy

`npm install`

1.  Create a `.env` file in the root directory and add your GIPHY API key:

bash

Copy

`VITE_GIPHY_API_KEY=your_api_key_here`

1.  Start the development server:

bash

Copy

`npm run dev`

🏗️ Project Structure
---------------------

Copy

`gif-expert-app/
├── src/
│   ├── components/
│   │   ├── AddCategory/
│   │   └── GifGrid/
│   ├── helpers/
│   │   └── getGifs.js
│   ├── hooks/
│   │   └── useFetchGifs.js
│   ├── GifExpertApp.jsx
│   ├── main.jsx
│   └── styles.css
├── package.json
└── vite.config.js`

🎮 Usage
--------

1.  The app starts with a default category "One Punch"
2.  Use the input field at the top to add new search categories
3.  Each category will display up to 10 related GIFs
4.  The app prevents duplicate categories
5.  GIFs are loaded with a loading state indicator

📦 Components
-------------

### GifExpertApp

The main component that manages the application state and renders the category list.

### AddCategory

Handles the input form for adding new categories.

### GifGrid

Displays the grid of GIFs for each category using the custom `useFetchGifs` hook.

🪝 Custom Hooks
---------------

### useFetchGifs

A custom hook that manages:

-   Loading states
-   GIF fetching
-   State updates for the GIF grid

🔄 API Helper
-------------

### getGifs

Handles the GIPHY API communication:

-   Fetches GIFs based on search category
-   Formats the response data
-   Returns standardized GIF objects

📝 Scripts
----------

-   `npm run dev` - Start development server
-   `npm run build` - Build for production
-   `npm run preview` - Preview production build

🔒 Environment Variables
------------------------

Required environment variables:

-   `VITE_GIPHY_API_KEY` - Your GIPHY API key
