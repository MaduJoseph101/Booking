# Booking.com Clone - React Application

This is a simplified front-end clone of a booking application built with React. It demonstrates a complete user flow from selecting a service to confirming a booking, showcasing modern React features and best practices.

## Features

- **Multi-Page Navigation**: Seamless navigation between the homepage, service selection, booking form, and confirmation page using React Router.
- **State Management**: State is managed within components using `useState` and passed between routes via `location.state`.
-_**Component-Based Architecture**: The application is broken down into reusable and maintainable components.
- **Interactive UI**: Includes a confirmation modal, notifications for form validation, and a consistent back button.
- **Styling with Tailwind CSS**: A utility-first CSS framework is used for responsive and modern styling.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For declarative routing in the React application.
- **Tailwind CSS**: For styling the application with a utility-first approach.

---

## How the Code Works

The application follows a standard user flow for a booking system. Below is a breakdown of each component and its role in the application.

### Core Components

#### `HomePage.jsx`
- **Purpose**: Serves as the landing page for the application.
- **Functionality**:
  - Displays a welcoming hero section with a background image. A `bg-black/30` overlay and a `backdrop-blur` are applied to enhance text readability.
  - Contains a **"Book a Slot Now"** button.
  - Clicking the button uses the `useNavigate` hook from React Router to redirect the user to the `/slots` page.

#### `Slots.jsx`
- **Purpose**: Displays the list of available rooms or "slots" that the user can book.
- **Functionality**:
  - Renders a grid of cards, with each card representing a bookable slot. The data is currently hardcoded in `slotsData`.
  - Each card is clickable. When a user clicks on a card, the `handleSlotClick` function is triggered.
  - It uses `navigate('/booking', { state: { selectedSlot: slot } })` to move to the booking page. Crucially, it passes the details of the selected slot to the next route using `location.state`.
  - Includes a `BackButton` that navigates the user back to the homepage (`/`).

#### `Booking.jsx`
- **Purpose**: The main form where users enter their details to finalize the booking.
- **Functionality**:
  - **State Management**:
    - It uses `useState` to manage the form data (`formData`) which includes the user's name, email, phone, etc.
    - It also manages the visibility of a confirmation modal (`showModal`) and a notification popup (`notification`).
  - **Data Retrieval**: It uses the `useLocation` hook to access the `selectedSlot` data passed from the `Slots.jsx` page.
  - **Form Handling**:
    - The `handleSubmit` function is called when the form is submitted.
    - It performs basic validation (e.g., checking if the phone number is 11 digits long). If validation fails, a notification is displayed.
    - On successful validation, it shows a confirmation modal by setting `showModal` to `true`.
  - **Confirmation Modal**:
    - Asks the user "Are you sure you want to confirm this booking?".
    - **"Yes" Button**: Calls `handleConfirmYes`, which navigates to the `/confirmation` page. It passes both the `formData` and the `selectedSlot` data to the confirmation page via `location.state`.
    - **"No" Button**: Calls `handleConfirmNo`, which simply closes the modal.
  - **Navigation**: Includes a `BackButton` that is explicitly configured to go to `/slots` (`<BackButton to="/slots" />`), ensuring predictable navigation.

#### `Confirmation.jsx`
- **Purpose**: To show the user a summary of their successful booking.
- **Functionality**:
  - It retrieves all the booking details (`bookingDetails`) from `location.state`.
  - It displays all the relevant information: the user's name, email, phone, and the details of the room they booked (name, description, price).
  - **Auto-Redirect**: It features a 10-second countdown timer. The `useEffect` hook sets up a `setTimeout` that decrements the countdown state every second. When the countdown reaches zero, it automatically navigates the user back to the `/slots` page using `navigate('/slots', { replace: true })`. The `replace: true` option prevents the confirmation page from being added to the browser's history stack, so the user can't go "back" to it.

#### `BackButton.jsx`
- **Purpose**: A reusable UI component for navigating back.
- **Functionality**:
  - It accepts an optional `to` prop.
  - If the `to` prop is provided (e.g., `<BackButton to="/slots" />`), it navigates to that specific path.
  - If the `to` prop is *not* provided, it defaults to `navigate(-1)`, which acts like the browser's native back button, going to the previous page in the session history. This makes the component highly flexible and robust.

---

### Key Concepts Explained

1.  **Routing and State Passing**: The application uses `react-router-dom` for all navigation. A key pattern demonstrated is passing data between routes using `navigate`'s second argument (`{ state: { ... } }`). This is a clean way to transfer temporary data between pages without cluttering the URL.

2.  **Controlled Components**: The form in `Booking.jsx` is built with controlled components. The component's state is the single source of truth for the input values, which are updated via the `onChange` handler.

3.  **User Experience (UX) Enhancements**:
    - **Confirmation Modal**: Prevents accidental bookings by requiring an explicit confirmation step.
    - **Notifications**: Provides immediate, non-blocking feedback for form validation errors. The notification slides in and automatically disappears after 3 seconds.
    - **Predictable Navigation**: The `BackButton` logic ensures users are always taken to the intended previous step in the application flow, rather than relying on potentially confusing browser history.

---

## How to Run This Project

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd Booking
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:5173`.

---
