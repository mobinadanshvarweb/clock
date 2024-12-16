# Clock and Date Slider Project

This project is a web-based clock and date slider application that displays both an analog and digital clock, along with a date slider to navigate between previous and next dates. The clock updates dynamically, showing the current time and allowing users to view adjacent days with an interactive slider.

---

## Features

### 1. **Clock Display**
- **Analog Clock**: Displays the current time using moving hands for hours, minutes, and seconds.
- **Digital Clock**: Shows the current time in digital format (HH:MM:SS) in either 12-hour or 24-hour format.

### 2. **Date Slider**
- Allows users to navigate between previous and next dates.
- Displays the current day of the week, day of the month, month name, and year in English.
- Dynamically updates the date on the slider.

### 3. **Dynamic Background**
- The background color changes based on the time of day:
  - **Night (12 AM - 6 AM)**: Dark blue.
  - **Morning (6 AM - 12 PM)**: Light blue.
  - **Afternoon (12 PM - 6 PM)**: Yellow.
  - **Evening (6 PM - 12 AM)**: Dark navy.

---

## Technologies Used

### 1. **HTML**
- Defines the structure of the page, including the clock, date slider, and layout.

### 2. **CSS**
- Styles the analog and digital clock, date slider, and responsive layout.
- Adds visual transitions and effects for user interactions.

### 3. **JavaScript**
- Dynamically updates the clock (both analog and digital) every second.
- Handles date navigation with the slider.
- Utilizes JavaScript’s `Date` object and `Intl.DateTimeFormat` API for time and date formatting.

---

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd clock-date-slider
   ```

3. Open the `index.html` file in a browser to view the project.

---

## File Structure

```
clock-date-slider/
|-- index.html          # Main HTML file
|-- style.css           # Styling for the project
|-- index.js            # JavaScript logic for clock and date slider
```

---

## How It Works

### Clock Logic
1. **Analog Clock**:
   - The hands of the clock rotate based on the current time.
   - Rotation is calculated using the `Date` object for hours, minutes, and seconds.

2. **Digital Clock**:
   - Time is extracted from the `Date` object.
   - It’s displayed in `HH:MM:SS` format, padded with leading zeroes for single-digit values.

3. **Dynamic Background**:
   - The time of day determines the background color (using `getHours()` from `Date`).

### Date Slider Logic
- The date slider updates the `currentDate` variable by adding or subtracting days when the user clicks on the "previous" or "next" buttons.
- Uses the `setDate()` method of the `Date` object to adjust the date.

---

## Usage

1. Open the project in your browser.
2. View the real-time clock and today’s date.
3. Use the left (`<`) and right (`>`) buttons to navigate to previous or future dates.

---

## Example Code Snippets

### Clock Update Function
```javascript
function setClockTime() {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // Analog clock rotation
  setRotation(anaS, 180, seconds / 60);
  setRotation(anaM, 180, (minutes + seconds / 60) / 60);
  setRotation(anaH, 180, (hours % 12) / 12 + minutes / 720);

  // Digital clock
  digitH.innerText = hours.toString().padStart(2, '0');
  digitM.innerText = minutes.toString().padStart(2, '0');
  digitS.innerText = seconds.toString().padStart(2, '0');
}
```

### Date Navigation
```javascript
function changeDate(direction) {
  currentDate.setDate(currentDate.getDate() + direction);
  setDate(currentDate);
}
```

---

## Possible Enhancements

1. **Localization**:
   - Add support for multiple languages (e.g., Persian).
   - Use `Intl.DateTimeFormat` for formatting dates and times in different locales.

2. **Responsive Design**:
   - Optimize the layout for mobile devices.

3. **Add Alarms**:
   - Allow users to set alarms with custom messages.

4. **Theme Customization**:
   - Enable users to select custom themes for the background and clock.

---

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute as needed.

---

## Author
Developed by MobinaDaneshvar.


