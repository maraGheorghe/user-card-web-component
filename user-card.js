class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Create elements
    const wrapper = document.createElement('div');
    wrapper.classList.add('user-card');

    const avatar = document.createElement('img');
    avatar.classList.add('avatar');
    avatar.src = this.getAttribute('avatar');

    const name = document.createElement('h2');
    name.classList.add('name');
    name.textContent = this.getAttribute('name');

    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = this.getAttribute('description');

    const button = document.createElement('button');
    button.classList.add('follow-btn');
    button.textContent = this.getAttribute('button-text') || 'Follow';
    button.addEventListener('click', () => this.handleButtonClick());

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      .user-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid #ddd;
        padding: 16px;
        border-radius: 8px;
        width: 200px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      }
      .avatar {
        border-radius: 50%;
        width: 100px;
        height: 100px;
        object-fit: cover;
      }
      .name {
        font-size: 1.5em;
        margin: 0.5em 0;
      }
      .description {
        font-size: 1em;
        text-align: center;
        color: #666;
      }
      .follow-btn {
        padding: 0.5em 1em;
        font-size: 1em;
        color: white;
        background-color: #007bff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;
      }
      .follow-btn:hover {
        background-color: #0056b3;
      }
      .followed {
        background-color: #28a745;
      }
    `;

    // Append elements to shadow DOM
    this.shadowRoot.append(style, wrapper);
    wrapper.append(avatar, name, description, button);
  }

  handleButtonClick() {
    const button = this.shadowRoot.querySelector('.follow-btn');
    const functionName = this.getAttribute('button-function');
    const isFollowed = button.classList.toggle('followed');
    button.textContent = isFollowed ? 'Unfollow' : (this.getAttribute('button-text') || 'Follow');

    if (functionName && typeof window[functionName] === 'function') {
      window[functionName]();
    }
  }

  static get observedAttributes() {
    return ['name', 'avatar', 'description', 'button-text', 'button-function'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'name':
        this.shadowRoot.querySelector('.name').textContent = newValue;
        break;
      case 'avatar':
        this.shadowRoot.querySelector('.avatar').src = newValue;
        break;
      case 'description':
        this.shadowRoot.querySelector('.description').textContent = newValue;
        break;
      case 'button-text':
        if (!this.shadowRoot.querySelector('.followed')) {
          this.shadowRoot.querySelector('.follow-btn').textContent = newValue;
        }
        break;
    }
  }
}

customElements.define('user-card', UserCard);
