import React, { useState } from 'react';
// Import the icons
import showIcon from '../asset/show.png'; // Adjust the path as necessary
import hideIcon from '../asset/show.png'; // Adjust the path as necessary
import emailIcon from '../asset/account.png'; // Adjust the path as necessary
import passwordIcon from '../asset/padlock.png'; // Adjust the path as necessary
import backgroundImage from '../asset/imgbg.svg'; // Adjust the path to your background image

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageCard}>
        <img src={backgroundImage} alt="Background" style={styles.image} />
      </div>
      <div style={styles.loginCard}>
        <h2 style={styles.title}>Login</h2>
        <form style={styles.form}>
          <div style={styles.inputContainer}>
            <img src={emailIcon} alt="Email icon" style={styles.iconInside} />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              style={styles.input}
            />
          </div>
          
          <div style={styles.inputContainer}>
            <img src={passwordIcon} alt="Password icon" style={styles.iconInside} />
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Password"
              style={styles.input}
            />
            <button 
              type="button" 
              onClick={handlePasswordToggle} 
              style={styles.toggleButton}
            >
              <img
                src={showPassword ? hideIcon : showIcon}
                alt={showPassword ? 'Hide Password' : 'Show Password'}
                style={styles.icon}
              />
            </button>
          </div>
          <div style={styles.forgotPassword}>
            <a href="/forgot-password" style={styles.forgotPasswordLink}>Forgot Password?</a>
          </div>

          <button type="submit" style={styles.button}>Login</button>
        </form>
       
        <div>
          <span style={styles.registerLink}>Don't have an account?</span>
          <a href="/register" style={styles.link}> Register</a>
        </div>
      </div>
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
    position: 'relative', // For absolute positioning of child elements
  },
  imageCard: {
    position: 'absolute',
    width: '550px', // Larger width
    height: '600px', // Larger height
    borderRadius: '8px',
    padding: '20px',
    backgroundColor: '#f5f5f5', // Set the card color to be visible
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:"29%",
    zIndex: 1, // Ensure this is behind the login card
  },
  image: {
    width: '398px', // Small image size
    height: 'auto',
    borderRadius: '8px',
    marginRight:"19%",

  },
  loginCard: {
    marginLeft:"20%",
    width: '350px',
    height:"65%",
    padding: '25px',
    borderRadius: '16px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f5f5f5',
        zIndex: 2, // Ensure this is in front of the background card
  },
  title: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputContainer: {
    position: 'relative',
    marginBottom: '12px',
  },
  input: {
    padding: '10px',
    paddingLeft: '40px', // Add padding to make room for the icon
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
  },
  iconInside: {
    position: 'absolute',
    top: '50%',
    left: '10px',
    transform: 'translateY(-50%)',
    width: '20px', // Adjust the size as needed
    height: '20px',
  },
  toggleButton: {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
  },
  icon: {
    width: '20px', // Adjust the size as needed
    height: '20px',
  },
  button: {
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: "600",
  },
  forgotPassword: {
    textAlign: 'right',
    marginTop: '10px',
  },
  forgotPasswordLink: {
    color: '#B2B2B2', // Ash color
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  forgotPasswordLinkHover: {
    color: '#1591ea', // Blue color on hover
  },
  registerLink: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15px',
    fontSize: "15px",
    color: "#000",
    fontWeight: "600",
  },
};

export default Login;
