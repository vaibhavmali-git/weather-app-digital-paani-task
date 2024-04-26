## Setup

Follow these steps to set up and run the app

1. Clone the Repository:

```bash
https://github.com/vaibhavmali-git/weather-app-digital-pani-task.git
```

2. Navigate to the Project Directory:

```bash
cd weather-app-digital-pani-task
```

3. Install Dependencies:

```bash
npm install
```

4. Run the Application:
   
```bash
npm run dev
```

Open in Browser:
Open http://localhost:5173/ in your browser to view the application.

### Replacing the API Key

To replace the OpenWeatherMap API key with your own key, follow these steps:

1.Obtain an API key from [OpenWeatherMap](https://openweathermap.org/api). You need to create an account to get an API key.
2. Open the `Context` file in your project.
3. Find the section where the API key is defined. It might look something like this:

   ```javascript
   const fetchWeather = async () => {
     const options = {
       method: "GET",
       url: `https://api.openweathermap.org/data/2.5/weather`,
       params: {
         q: place,
         units: "metric",
         appid: "YOUR_API_KEY", // This is where you need to replace with your key
       },
     };
   };
```
