This project is a basic To-Do List application built with Laravel 12, Vue 3, and Laravel Sanctum for API authentication. Users can add, edit, delete, and mark tasks as completed.

## Features

-   **Add Tasks:** Users can create new tasks with titles and descriptions.
-   **Edit Tasks:** Users can modify existing tasks.
-   **Delete Tasks:** Users can remove tasks.
-   **Mark as Completed:** Users can toggle the completion status of tasks.
-   **API Authentication:** Secured API endpoints using Laravel Sanctum.
-   **Vue 3 Frontend:** Dynamic and responsive user interface.
-   **Pinia State Management:** Centralized state management for Vue 3.
-   **MySQL Database:** Stores task data.
-   **Form Validation:** Basic validation for task input.

## Prerequisites

Before you begin, ensure you have the following installed:

-   **PHP (>= 8.2):** [https://www.php.net/downloads.php](https://www.php.net/downloads.php)
-   **Composer:** [https://getcomposer.org/download/](https://getcomposer.org/download/)
-   **Node.js and npm:** [https://nodejs.org/](https://nodejs.org/)
-   **MySQL:** [https://www.mysql.com/downloads/](https://www.mysql.com/downloads/)

## Installation

1.  **Clone the Repository:**

    ```bash
    git clone git@github.com:mdnurulmomen/todo-app.git
    cd todo-app
    ```

2.  **Install Composer Dependencies:**

    ```bash
    composer install
    ```

3.  **Copy `.env.example` to `.env` and Configure Database:**

    ```bash
    cp .env.example .env
    ```

    Open `.env` and update the database credentials:

    ```dotenv
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=your_database_name
    DB_USERNAME=your_username
    DB_PASSWORD=your_password

    SANCTUM_STATEFUL_DOMAINS="localhost:8000"

    SESSION_DRIVER=file
    SESSION_DOMAIN=localhost
    ```

4.  **Generate Application Key:**

    ```bash
    php artisan key:generate
    ```

5.  **Run Database Migrations:**

    ```bash
    php artisan migrate
    ```

6.  **Run Database Seeder:**

    ```bash
    php artisan db:seed
    ```

7.  **Install Node.js Dependencies:**

    ```bash
    npm install
    ```

8.  **Compile Assets:**

    ```bash
    npm run dev
    ```

9. **Start the Development Server:**

    ```bash
    php artisan serve
    ```

    Open your browser and navigate to `http://127.0.0.1:8000`.

## API Routes

The following API routes are protected by Laravel Sanctum:

-   `GET /api/v1/tasks`: Retrieve all tasks.
-   `POST /api/v1/tasks`: Create a new task.
-   `GET /api/v1/tasks/{task}`: Retrieve a specific task.
-   `PUT /api/v1/tasks/{task}`: Update a specific task.
-   `DELETE /api/v1/tasks/{task}`: Delete a specific task.

## Vue 3 Components

-   `TaskIndex.vue`: Main component for displaying and managing tasks.
-   `resources/js/components/globals`: Common components for managing vue-pages.
-   `resources/js/components/helpers`: All functions for general purposes.
-   `resources/js/components/pages`: All pages in application.
-   `resources/js/components/routes`: All routes in application.
-   `resources/js/stores/task.js`: Pinia store for managing task state.

## Authentication

-   Implement user registration and login to obtain a Sanctum token.

## Testing

-   Run the automated test cases.
    ```bash
    php artisan test
    ```

## Contributing

Feel free to contribute to this project by submitting pull requests.

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Md. Nurul Momen via [mdnurulmomen.bd@gmail.com](mailto:mdnurulmomen.bd@gmail.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
