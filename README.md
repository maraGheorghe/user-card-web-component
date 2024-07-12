# User Card Web Component

A custom web component that displays a user's name, avatar, description, and a follow/unfollow button with customizable text and functionality.

## Features

- **Customizable Name**: Display the user's name.
- **Customizable Avatar**: Display the user's avatar image.
- **Customizable Description**: Provide a brief description of the user.
- **Follow/Unfollow Button**: A button that toggles between follow and unfollow states.
- **Custom Button Text**: Set the initial text of the follow/unfollow button.
- **Custom Button Function**: Execute a custom function when the button is clicked.

## Installation

### Step 1: Include the Component Script

Ensure that the `user-card.js` file is included in your HTML file:

```html
<script src="path/to/user-card.js"></script>
```

### Step 2: Use the Custom Element

Add the `<user-card>` element in your HTML with the desired attributes:

```html
<user-card
  name="John Doe"
  avatar="https://via.placeholder.com/150"
  description="Web Developer and Open Source Enthusiast"
  button-text="Follow"
></user-card>
```

### Step 3: Define a Custom Function (Optional)

If you want to execute a custom function when the follow/unfollow button is clicked, define the function and set the `button-function` attribute:

```html
<script>
  function followUser() {
    alert('User followed!');
  }

  document.addEventListener('DOMContentLoaded', () => {
    const userCard = document.querySelector('user-card');
    userCard.setAttribute('button-function', 'followUser');
  });
</script>
```

## Attributes

- `name`: The name of the user (string).
- `avatar`: The URL of the user's avatar image (string).
- `description`: A brief description of the user (string).
- `button-text`: The initial text of the button (string).
- 
## Example

Here's a complete example of how to use the `user-card` component in your project:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>User Card Component</title>
  <script src="path/to/user-card.js"></script>
</head>
<body>
  <user-card
    name="John Doe"
    avatar="https://via.placeholder.com/150"
    description="Web Developer and Open Source Enthusiast"
    button-text="Follow"
  ></user-card>

  <script>
    function followUser() {
      alert('User followed!');
    }

    document.addEventListener('DOMContentLoaded', () => {
      const userCard = document.querySelector('user-card');
      userCard.setAttribute('button-function', 'followUser');
    });
  </script>
</body>
</html>
```
