import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ActivityIndicator, TouchableOpacity } from 'react-native';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(true); // Toggle between Signup and Login

  useEffect(() => {
    const timer = setTimeout(() => {
      setAppIsReady(true);
    }, 2000); // 2 seconds delay for splash screen

    return () => clearTimeout(timer);
  }, []);

  const handleSignup = () => {
    // Handle signup logic here
    console.log('Signup Username:', username);
    console.log('Signup Email:', email);
    console.log('Signup Password:', password);
  };

  const handleLogin = () => {
    // Handle login logic here
    console.log('Login Username:', username);
    console.log('Login Password:', password);
  };

  const toggleForm = () => {
    setIsSignup(!isSignup); // Switch between Login and Signup
    setUsername('');
    setEmail('');
    setPassword('');
  };

  if (!appIsReady) {
    return (
      <View style={styles.splashScreen}>
        <Text style={styles.splashText}>Welcome to MyApp</Text>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {isSignup ? (
        <>
          <Text style={styles.headerText}>Signup</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <Button title="Sign Up" onPress={handleSignup} />
          <TouchableOpacity onPress={toggleForm}>
            <Text style={styles.toggleText}>
              Already have an account? Login
            </Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.headerText}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <Button title="Login" onPress={handleLogin} />
          <TouchableOpacity onPress={toggleForm}>
            <Text style={styles.toggleText}>
              Don't have an account? Signup
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  splashScreen: {
    flex: 1,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashText: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 32,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  toggleText: {
    marginTop: 20,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
});
