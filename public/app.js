//require('dotenv').config()
//Supabase Client
const { createClient } = supabase;

//const supaUrl = process.env.SUPABASE_URL
//const supaAnonKey = process.env.SUPABASE_KEY
const supaUrl = "https://yirkdkgpqltnqnwtmubn.supabase.co"
const supaAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlpcmtka2dwcWx0bnFud3RtdWJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgyNDQ1MzgsImV4cCI6MjAxMzgyMDUzOH0.sVXufKh4po3FhWw8tCg1WEDFftbMhxeYZuTpdZcRLY8"

const supaClient = createClient(supaUrl, supaAnonKey)

//Html Elements
const loginButon = document.getElementById("signInBtn");
// const logoutButton = document.getElementById("signOutBtn");
// const whenSignedIn = document.getElementById("whenSignedIn");
// const whenSignedOut = document.getElementById("whenSignedOut");
// const userDetails = document.getElementById("userDetails");
// const myThingsSection = document.getElementById("myThings");
// const myThingsList = document.getElementById("myThingsList");
// const allThingsSection = document.getElementById("allThings");
// const allThingsList = document.getElementById("allThingsList");
// const createThing = document.getElementById("createThing");
// const askForEmail = document.getElementById("askForEmail");
// const emailConfirmation = document.getElementById("emailConfirmation");
// const adminSendEmails = document.getElementById("adminSendEmails");
// const askForEmailForm = document.getElementById("askForEmailForm");
// const emailInput = document.getElementById("emailInput");
// const cancelEmailBtn = document.getElementById("cancelEmailBtn");
// const adminEmailSender = document.getElementById("adminEmailSender");
// const emailContents = document.getElementById("emailContents");
// const subjectInput = document.getElementById("subjectInput");

//Event Listeners

loginButton.addEventListener("click", () => {
    console.log(supaUrl, supaAnonKey)

    console.log("aa")

    supaClient.auth.signInWithOAuth({
        provider: "google",
    });
});