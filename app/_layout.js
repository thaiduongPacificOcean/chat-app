import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Redirect, Slot, useRouter, useSegments } from "expo-router";
import "../global.css"
import { AuthContextProvider, useAuth } from '../context/authContext';


const MainLayout = () => {
    const { isAuthencated } = useAuth();
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        if (typeof isAuthencated == undefined) return;
        const inApp = segments[0] == '(app)';
        if (isAuthencated && !inApp) {
            // redirect to home
            router.replace('home');
        } else if( isAuthencated == false) {
            // redirect to signIn   
            router.replace('signIn');        }

    }, [isAuthencated])

    return (
        <Slot />
    )
}

export default function RootLayout() {
    return (
        <AuthContextProvider>
            <MainLayout />
        </AuthContextProvider>
    )
}



