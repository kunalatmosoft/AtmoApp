import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navbarButton}>
          <Text style={styles.navbarButtonText}>Home</Text>
        </TouchableOpacity>
        <Text style={styles.navbarText}>Atmosoft&trade;</Text>
        <TouchableOpacity style={styles.navbarButton}>
          <Text style={styles.navbarButtonText}>About</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
   {/* Main Content */}
<View style={styles.content}>
  <Text style={styles.heading}><Image
      source={require('./Atmosoft.png')}
      style={styles.featureImage}
    />Welcome to Atmosoft&trade;</Text>
  <Text style={styles.paragraph}>
    Atmosoft&trade; is your all-in-one solution for managing your environment. From controlling smart devices to monitoring your Pathways, Atmosoft&trade; has you covered.
  </Text>
  <View style={styles.feature}>
    
    <Text style={styles.featureText}>
      Control your smart life with ease.
    </Text>
  </View>
  <View style={styles.feature}>
   
    <Text style={styles.featureText}>
      Monitor All comples tasks in real-time.
    </Text>
  </View>
  <Link href="/home" asChild>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Learn More</Text>
    </TouchableOpacity>
  </Link>
</View>

      {/* Bottom Icons */}
      <View style={styles.bottomIcons}>
        <Link href="/home" asChild>
          <TouchableOpacity style={styles.iconContainer}>
            
            <Text style={styles.iconText}>Home</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/" asChild>
          <TouchableOpacity style={styles.iconContainer}>
           
            <Text style={styles.iconText}>Settings</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    height: 50,
    paddingHorizontal: 10,
  },
  navbarButton: {
    paddingVertical: 5,
  },
  navbarButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  navbarText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
  bottomIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    height: 60,
  },
  iconContainer: {
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  iconText: {
    color: '#FFF',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 20,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  featureImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  featureText: {
    fontSize: 16,
    flex: 1,
  },
  
});
