[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python: 3.8](https://img.shields.io/badge/Python-3.8-blue.svg)](https://www.python.org/downloads/release/python-380/)
# Trading Platform

[![GitHub license](https://img.shields.io/github/license/<username>/<repo-name>.svg)](https://github.com/omarsa999/news/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/<username>/<repo-name>.svg)](https://github.com/omarsa999/news/issues)
[![GitHub stars](https://img.shields.io/github/stars/<username>/<repo-name>.svg)](https://github.com/omarsa999/news/stargazers)

A robust and efficient trading platform that allows users to buy and sell stocks in real-time.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Features

- Users can create an account, login and logout securely
- Users can view their portfolio, including their current holdings and total value
- Users can place market or limit orders to buy or sell stocks
- Users can view their order history and pending orders
- Admins can add new stocks to the platform
- Charts are available to visualize stock prices over time
- Flask endpoints have been thoroughly tested

## Installation

1. Clone the repository:

    ```
    git clone https://github.com/your-username/trading-platform.git
    cd trading-platform
    ```

2. Create and activate a virtual environment:

    ```
    python -m venv env
    source env/bin/activate
    ```

3. Install the required dependencies:

    ```
    pip install -r requirements.txt
    ```

4. Create the database and tables:

    ```
    python db.py
    ```

5. Start the Flask app:

    ```
    export FLASK_APP=run.py
    export FLASK_ENV=development
    flask run
    ```

6. Visit `http://localhost:5000` in your web browser to access the app.

## Usage

1. Create a user account by clicking on the "Register" link in the top right corner of the app. You will be redirected to the registration page where you can create a new account by providing a username, email and password.

2. Log in to the app using the username and password you just created. You will be redirected to the dashboard where you can view your portfolio, place orders and view your order history.

3. To place an order, click on the "Place Order" button on the dashboard. You can then select a stock to trade, the type of order (market or limit) and the quantity you wish to trade.

4. To view your order history, click on the "Order History" link in the top right corner of the app. You can view your completed orders as well as any pending orders.

5. To view charts of the stock prices over time, click on the "Charts" link in the navigation bar. You can then select a stock to view the chart for.

6. If you are an admin user, you can add new stocks to the platform by clicking on the "Admin" link in the navigation bar and then clicking on the "Add Stock" button.



## Contributing

1. Fork the repository.

2. Create a new branch:

    ```
    git checkout -b my-feature-branch
    ```

3. Make changes and commit them:

    ```
    git add .
    git commit -m "Add new feature"
    ```

4. Push your changes to your fork:

    ```
    git push origin my-feature-branch
    ```

5. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
