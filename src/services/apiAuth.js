import supabase from "./supabase";

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error("Cannot login the user");
  }

  return data;
}

export async function getCurrentUser() {
  // Check if there is a current active session. Supabase saves session info in the browser local storage
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  // If there is active session found, redownload all the login data from supabase
  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

// Function for logout
export async function logout() {
  let { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error("Cannot login the user");
  }
}

// Function for signup
export async function signup({ email, password, fullName, phone }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { fullName, phone } },
  });

  if (error) {
    console.log(error.message);
    throw new Error("Cannot create the user");
  }

  return data;
}
